import React, { useState, useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  ConnectionLineType,
} from 'reactflow';
import 'reactflow/dist/style.css';

import CustomNode from './components/CustomNode';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { saveWorkflow, loadWorkflow, executeWorkflow, createNewNode } from './utils/workflowUtils';

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes = [];
const initialEdges = [];

export default function App() {
  const [workflowName, setWorkflowName] = useState('Mon Workflow');
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [showTemplates, setShowTemplates] = useState(false);

  // Fonction pour connecter les nœuds
  const onConnect = useCallback(
    (params) => {
      console.log('Connexion établie:', params);
      setEdges((eds) => addEdge({
        ...params,
        type: 'smoothstep',
        style: { stroke: '#4f46e5', strokeWidth: 2 },
      }, eds));
    },
    [setEdges]
  );

  const onSelectionChange = useCallback(({ nodes }) => {
    setSelectedNode(nodes.length === 1 ? nodes[0] : null);
  }, []);

  const onAddNode = useCallback((template) => {
    const newNode = createNewNode(template, {
      x: Math.random() * 400 + 100,
      y: Math.random() * 400 + 100,
    });
    setNodes((nds) => nds.concat(newNode));
    setShowTemplates(false);
  }, [setNodes]);

  const onDeleteNode = useCallback(() => {
    if (selectedNode) {
      setNodes((nds) => nds.filter((node) => node.id !== selectedNode.id));
      // Supprimer aussi les connexions liées à ce nœud
      setEdges((eds) => eds.filter(
        (edge) => edge.source !== selectedNode.id && edge.target !== selectedNode.id
      ));
      setSelectedNode(null);
    }
  }, [selectedNode, setNodes, setEdges]);

  const onSave = useCallback(() => {
    saveWorkflow(workflowName, nodes, edges);
  }, [workflowName, nodes, edges]);

  const onLoad = useCallback((event) => {
    const file = event.target.files[0];
    if (file) {
      loadWorkflow(file, setWorkflowName, setNodes, setEdges);
    }
  }, [setNodes, setEdges]);

  const onExecute = useCallback(() => {
    if (nodes.length === 0) {
      alert('Ajoutez des nœuds avant d\'exécuter le workflow !');
      return;
    }
    if (edges.length === 0) {
      alert('Connectez les nœuds avant d\'exécuter le workflow !');
      return;
    }
    executeWorkflow(nodes, setNodes);
  }, [nodes, edges, setNodes]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header
        workflowName={workflowName}
        setWorkflowName={setWorkflowName}
        onExecute={onExecute}
        onSave={onSave}
        onLoad={onLoad}
      />
      
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar
          showTemplates={showTemplates}
          setShowTemplates={setShowTemplates}
          onAddNode={onAddNode}
          selectedNode={selectedNode}
          onDeleteNode={onDeleteNode}
        />
        
        <div style={{ flex: 1, position: 'relative' }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onSelectionChange={onSelectionChange}
            nodeTypes={nodeTypes}
            connectionLineType={ConnectionLineType.SmoothStep}
            connectionLineStyle={{ stroke: '#4f46e5', strokeWidth: 2 }}
            fitView
            style={{ background: '#f8fafc' }}
          >
            <MiniMap 
              nodeStrokeColor="#4f46e5"
              nodeColor="#e0e7ff"
              maskColor="rgba(255,255,255,0.6)"
            />
            <Controls />
            <Background variant="dots" gap={12} size={1} />
          </ReactFlow>
        </div>
      </div>
      
      <Footer nodesCount={nodes.length} edgesCount={edges.length} />
    </div>
  );
}