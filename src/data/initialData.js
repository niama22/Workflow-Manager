import { MarkerType } from 'reactflow';

// Nœuds initiaux du workflow
export const initialNodes = [
  {
    id: '1',
    type: 'custom',
    data: { 
      label: 'Nouvelle Demande', 
      type: 'start',
      color: '#dbeafe',
      description: 'Point de départ du workflow',
      status: 'completed'
    },
    position: { x: 250, y: 50 },
  },
  {
    id: '2',
    type: 'custom',
    data: { 
      label: 'Validation Manager', 
      type: 'decision',
      color: '#fef3c7',
      description: 'Approbation niveau 1',
      status: 'running'
    },
    position: { x: 250, y: 180 },
  },
  {
    id: '3',
    type: 'custom',
    data: { 
      label: 'Traitement RH', 
      type: 'process',
      color: '#e0e7ff',
      description: 'Vérification documents',
      status: 'pending'
    },
    position: { x: 100, y: 320 },
  },
  {
    id: '4',
    type: 'custom',
    data: { 
      label: 'Notification Email', 
      type: 'email',
      color: '#fce7f3',
      description: 'Envoi confirmation',
      status: 'pending'
    },
    position: { x: 400, y: 320 },
  },
  {
    id: '5',
    type: 'custom',
    data: { 
      label: 'Enregistrement BD', 
      type: 'database',
      color: '#d1fae5',
      description: 'Sauvegarde données',
      status: 'pending'
    },
    position: { x: 250, y: 460 },
  },
  {
    id: '6',
    type: 'custom',
    data: { 
      label: 'Workflow Terminé', 
      type: 'end',
      color: '#dcfce7',
      description: 'Fin du processus',
      status: 'pending'
    },
    position: { x: 250, y: 600 },
  },
];

// Connexions initiales entre les nœuds
export const initialEdges = [
  { 
    id: 'e1-2', 
    source: '1', 
    target: '2', 
    animated: true, 
    label: 'Soumis', 
    style: { stroke: '#667eea' }, 
    markerEnd: { type: MarkerType.ArrowClosed } 
  },
  { 
    id: 'e2-3', 
    source: '2', 
    target: '3', 
    animated: true, 
    label: 'Approuvé', 
    style: { stroke: '#10b981' }, 
    markerEnd: { type: MarkerType.ArrowClosed } 
  },
  { 
    id: 'e2-4', 
    source: '2', 
    target: '4', 
    animated: false, 
    label: 'Rejeté', 
    style: { stroke: '#ef4444', strokeDasharray: '5,5' }, 
    markerEnd: { type: MarkerType.ArrowClosed } 
  },
  { 
    id: 'e3-5', 
    source: '3', 
    target: '5', 
    animated: true, 
    style: { stroke: '#667eea' }, 
    markerEnd: { type: MarkerType.ArrowClosed } 
  },
  { 
    id: 'e4-5', 
    source: '4', 
    target: '5', 
    animated: true, 
    style: { stroke: '#667eea' }, 
    markerEnd: { type: MarkerType.ArrowClosed } 
  },
  { 
    id: 'e5-6', 
    source: '5', 
    target: '6', 
    animated: true, 
    style: { stroke: '#667eea' }, 
    markerEnd: { type: MarkerType.ArrowClosed } 
  },
];