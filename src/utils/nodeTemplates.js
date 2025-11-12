// Templates de nœuds disponibles pour créer de nouveaux éléments
export const nodeTemplates = [
  { 
    type: 'start', 
    label: 'Début', 
    color: '#dbeafe', 
    icon: '🚀',
    description: 'Point de départ du workflow'
  },
  { 
    type: 'process', 
    label: 'Processus', 
    color: '#e0e7ff', 
    icon: '⚙️',
    description: 'Étape de traitement'
  },
  { 
    type: 'decision', 
    label: 'Décision', 
    color: '#fef3c7', 
    icon: '❓',
    description: 'Point de décision conditionnelle'
  },
  { 
    type: 'api', 
    label: 'API Call', 
    color: '#fce7f3', 
    icon: '🔌',
    description: 'Appel API externe'
  },
  { 
    type: 'email', 
    label: 'Email', 
    color: '#fce7f3', 
    icon: '📧',
    description: 'Envoi de notification'
  },
  { 
    type: 'database', 
    label: 'Base de données', 
    color: '#d1fae5', 
    icon: '💾',
    description: 'Opération base de données'
  },
  { 
    type: 'end', 
    label: 'Fin', 
    color: '#dcfce7', 
    icon: '🎯',
    description: 'Fin du workflow'
  },
];