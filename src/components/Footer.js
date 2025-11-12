import React from 'react';

const Footer = ({ nodesCount, edgesCount }) => {
  return (
    <footer
      style={{
        background: '#1f2937',
        color: '#9ca3af',
        padding: '10px 20px',
        fontSize: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>Glissez pour déplacer • Connectez les nœuds • Cliquez pour sélectionner</div>
      <div style={{ color: '#6b7280' }}>
        {nodesCount} nœuds • {edgesCount} connexions
      </div>
    </footer>
  );
};

export default Footer;
