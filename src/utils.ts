import { FORMS } from './constants';

export const showAlert = (message: string, type: 'info' | 'success' | 'error' | 'warning' = 'info') => {
  const alertContainer = document.getElementById('alertContainer') || (() => {
    const container = document.createElement('div');
    container.id = 'alertContainer';
    container.style.position = 'fixed';
    container.style.top = '18px';
    container.style.right = '18px';
    container.style.zIndex = '99999';
    document.body.appendChild(container);
    return container;
  })();

  const alert = document.createElement('div');
  alert.className = `alert ${type}`;
  alert.textContent = message;
  alert.style.marginTop = '8px';
  alert.style.padding = '0.65rem 0.9rem';
  alert.style.borderRadius = '8px';
  alert.style.background = 
    type === 'error' ? 'linear-gradient(90deg,#ff6b6b,#ff9aa2)' :
    type === 'success' ? 'linear-gradient(90deg,#7bed9f,#2ee59d)' :
    'linear-gradient(90deg,#9d8dff,#00f0ff)';
  alert.style.color = '#051018';

  alertContainer.appendChild(alert);

  setTimeout(() => {
    alert.style.opacity = '0';
    alert.style.transition = 'opacity 0.3s ease';
    setTimeout(() => alert.remove(), 300);
  }, 3000);
};

export const getFormUrl = (passType: string): string | null => {
  return FORMS[passType as keyof typeof FORMS] || null;
};

export const registerForPass = (passType: string) => {
  const registrations = JSON.parse(localStorage.getItem('passRegistrations') || '[]');
  registrations.push({
    passType,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('passRegistrations', JSON.stringify(registrations));
  
  showAlert('✓ Opening registration form...', 'success');
  goToPassForm(passType);
};

export const goToPassForm = (passType: string) => {
  const formBase = getFormUrl(passType);
  if (!formBase || formBase.includes('YOUR-')) {
    showAlert('📢 Google Forms link not configured yet. Please provide the form links.', 'error');
    return;
  }

  try {
    const newWin = window.open(formBase, '_blank');
    if (!newWin) {
      console.warn('Popup blocked — navigating in same tab');
      window.location.href = formBase;
    }
  } catch (e) {
    console.warn('window.open failed, navigating in same tab', e);
    window.location.href = formBase;
  }
};
