import React from 'react';

/**
 * Composant de nœud personnalisé pour React Flow
 * Affiche un nœud avec icône, label, description et statut
 */
const CustomNode = ({ data, selected }) => {
  const getIcon = () => {
    switch (data.type) {
      case 'start': return '▶';
      case 'process': return '⚙';
      case 'decision': return '?';
      case 'api': return '⛓';
      case 'email': return '✉';
      case 'database': return '💽';
      case 'end': return '■';
      default: return '⬜';
    }
  };

  return (
    <div
      style={{
        padding: '12px 16px',
        borderRadius: '8px',
        background: selected ? '#4f46e5' : data.color || '#ffffff',
        border: `2px solid ${selected ? '#4f46e5' : '#e5e7eb'}`,
        minWidth: '160px',
        boxShadow: selected
          ? '0 6px 16px rgba(79, 70, 229, 0.3)'
          : '0 2px 6px rgba(0,0,0,0.05)',
        transition: 'all 0.2s ease',
        cursor: 'grab',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
        <span style={{ fontSize: '18px' }}>{getIcon()}</span>
        <div>
          <div
            style={{
              fontWeight: 'bold',
              color: selected ? '#ffffff' : '#1f2937',
              fontSize: '13px',
            }}
          >
            {data.label}
          </div>
          <div
            style={{
              fontSize: '11px',
              color: selected ? '#e5e7eb' : '#6b7280',
            }}
          >
            {data.type}
          </div>
        </div>
      </div>

      {data.description && (
        <div
          style={{
            fontSize: '11px',
            color: selected ? '#e5e7eb' : '#4b5563',
            marginTop: '6px',
            paddingTop: '6px',
            borderTop: `1px solid ${selected ? 'rgba(255,255,255,0.3)' : '#e5e7eb'}`,
          }}
        >
          {data.description}
        </div>
      )}

      {data.status && (
        <div
          style={{
            marginTop: '6px',
            padding: '3px 6px',
            borderRadius: '4px',
            fontSize: '10px',
            background:
              data.status === 'completed'
                ? '#10b981'
                : data.status === 'running'
                ? '#f59e0b'
                : '#6b7280',
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          {data.status === 'completed'
            ? 'Complété'
            : data.status === 'running'
            ? 'En cours'
            : 'En attente'}
        </div>
      )}
    </div>
  );
};

export default CustomNode;
