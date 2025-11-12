export const saveWorkflow = (workflowName, nodes, edges) => {
  const workflow = {
    name: workflowName,
    nodes,
    edges,
    savedAt: new Date().toISOString(),
    version: '1.0'
  };
  
  const blob = new Blob([JSON.stringify(workflow, null, 2)], { 
    type: 'application/json' 
  });
  
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${workflowName.replace(/\s/g, '_')}.json`;
  link.click();
  
  URL.revokeObjectURL(url);
};

export const loadWorkflow = (file, setWorkflowName, setNodes, setEdges) => {
  const reader = new FileReader();
  
  reader.onload = (event) => {
    try {
      const workflow = JSON.parse(event.target.result);
      setWorkflowName(workflow.name || 'Workflow Importé');
      setNodes(workflow.nodes || []);
      setEdges(workflow.edges || []);
      alert('Workflow chargé avec succès !');
    } catch (error) {
      alert('Erreur lors du chargement du fichier');
      console.error('Erreur:', error);
    }
  };
  
  reader.readAsText(file);
};

export const executeWorkflow = (nodes, setNodes) => {
  // Réinitialiser tous les statuts
  setNodes(nds => nds.map(node => ({
    ...node,
    data: { ...node.data, status: 'pending' }
  })));

  let currentIndex = 0;
  const nodeIds = nodes.map(n => n.id);
  
  const interval = setInterval(() => {
    if (currentIndex >= nodeIds.length) {
      clearInterval(interval);
      alert('Workflow terminé !');
      return;
    }
    
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeIds[currentIndex]) {
          return {
            ...node,
            data: { ...node.data, status: 'running' }
          };
        }
        if (nodeIds.indexOf(node.id) < currentIndex) {
          return {
            ...node,
            data: { ...node.data, status: 'completed' }
          };
        }
        return node;
      })
    );
    
    currentIndex++;
  }, 1000);
};

// Fonction pour créer un nouveau nœud avec position
export const createNewNode = (template, position) => {
  return {
    id: `${template.type}-${Date.now()}`,
    type: 'custom',
    position,
    data: {
      ...template,
      status: 'pending'
    }
  };
};