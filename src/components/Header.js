import React from 'react';
import { Play, Download, Upload } from 'lucide-react';
import { buttonStyle } from '../styles/buttonStyles';

const Header = ({ workflowName, setWorkflowName, onExecute, onSave, onLoad }) => {
  return (
    <header
      style={{
        background: '#4f46e5',
        padding: '16px 24px',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}
    >
      <div>
        <h1 style={{ margin: '0 0 6px 0', fontSize: '22px', fontWeight: 'bold' }}>
          Workflow Manager
        </h1>
        <input
          type="text"
          value={workflowName}
          onChange={(e) => setWorkflowName(e.target.value)}
          placeholder="Nom du workflow..."
          style={{
            background: 'rgba(255,255,255,0.15)',
            border: 'none',
            color: 'white',
            padding: '6px 10px',
            borderRadius: '4px',
            fontSize: '14px',
            width: '280px',
          }}
        />
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <button onClick={onExecute} style={buttonStyle('#10b981')}>
          <Play size={16} /> Exécuter
        </button>
        <button onClick={onSave} style={buttonStyle('#3b82f6')}>
          <Download size={16} /> Sauvegarder
        </button>
        <label style={{ ...buttonStyle('#8b5cf6'), cursor: 'pointer' }}>
          <Upload size={16} /> Charger
          <input type="file" accept=".json" onChange={onLoad} style={{ display: 'none' }} />
        </label>
      </div>
    </header>
  );
};

export default Header;
