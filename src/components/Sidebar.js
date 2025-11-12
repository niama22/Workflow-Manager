import React from 'react';
import { Plus, Trash2, Link } from 'lucide-react';
import { buttonStyle } from '../styles/buttonStyles';
import { nodeTemplates } from '../utils/nodeTemplates';

const Sidebar = ({
  showTemplates,
  setShowTemplates,
  onAddNode,
  selectedNode,
  onDeleteNode,
}) => {
  return (
    <aside
      style={{
        width: '280px',
        background: '#ffffff',
        borderRight: '1px solid #e5e7eb',
        padding: '20px',
        overflowY: 'auto',
      }}
    >
      <h3 style={{ fontSize: '15px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>
        Éléments du Workflow
      </h3>

      {/* Instructions de connexion */}
      <div style={{
        background: '#f0f9ff',
        border: '1px solid #bae6fd',
        borderRadius: '6px',
        padding: '10px',
        marginBottom: '16px',
        fontSize: '11px',
        color: '#0369a1'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
          <Link size={12} />
          <strong>Pour connecter :</strong>
        </div>
        <div>1. Glissez les points ronds</div>
        <div>2. Relâchez sur un autre nœud</div>
      </div>

      <button
        onClick={() => setShowTemplates(!showTemplates)}
        style={{ ...buttonStyle('#4f46e5'), width: '100%', marginBottom: '16px' }}
      >
        <Plus size={16} /> Ajouter un nœud
      </button>

      {showTemplates && (
        <div style={{ display: 'grid', gap: '8px', marginBottom: '24px' }}>
          {nodeTemplates.map((template, index) => (
            <button
              key={index}
              onClick={() => onAddNode(template)}
              style={{
                padding: '12px',
                background: template.color,
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                textAlign: 'left',
                fontSize: '13px',
                cursor: 'grab',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{template.label}</div>
              <div style={{ fontSize: '11px', color: '#6b7280' }}>{template.description}</div>
            </button>
          ))}
        </div>
      )}

      {selectedNode && (
        <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '12px' }}>
            Nœud sélectionné
          </h3>
          <div style={{ 
            background: '#f8fafc', 
            padding: '12px', 
            borderRadius: '6px',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '6px', fontSize: '14px' }}>
              {selectedNode.data.label}
            </div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
              Type : {selectedNode.data.type}
            </div>
            {selectedNode.data.description && (
              <div style={{ fontSize: '11px', color: '#64748b', fontStyle: 'italic' }}>
                {selectedNode.data.description}
              </div>
            )}
          </div>
          <button
            onClick={onDeleteNode}
            style={{ 
              ...buttonStyle('#ef4444'), 
              width: '100%', 
              marginTop: '12px' 
            }}
          >
            <Trash2 size={16} /> Supprimer le nœud
          </button>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;