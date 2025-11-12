/**
 * Styles réutilisables pour les boutons
 */

export const buttonStyle = (bgColor) => ({
  padding: '8px 16px',
  background: bgColor,
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '13px',
  fontWeight: '600',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  transition: 'all 0.2s',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
});

export const iconButtonStyle = {
  padding: '8px',
  background: 'transparent',
  border: '1px solid #e5e7eb',
  borderRadius: '6px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s',
};