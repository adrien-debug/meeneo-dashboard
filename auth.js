// ============================================
// GESTION DE L'AUTHENTIFICATION
// ============================================

// Vérifier l'authentification au chargement
function checkAuthentication() {
  const auth = localStorage.getItem('meeneo_auth');
  
  if (!auth) {
    console.log('🔐 No authentication found, redirecting to login...');
    redirectToLogin();
    return false;
  }
  
  try {
    const authData = JSON.parse(auth);
    
    // Vérifier si la session a expiré
    if (authData.expires && new Date() > new Date(authData.expires)) {
      console.log('⏰ Session expired, redirecting to login...');
      localStorage.removeItem('meeneo_auth');
      redirectToLogin();
      return false;
    }
    
    if (authData.authenticated === true) {
      console.log('✅ User authenticated');
      return true;
    } else {
      console.log('❌ User not authenticated, redirecting to login...');
      redirectToLogin();
      return false;
    }
  } catch (e) {
    console.error('❌ Error parsing auth data:', e);
    localStorage.removeItem('meeneo_auth');
    redirectToLogin();
    return false;
  }
}

// Rediriger vers la page de connexion
function redirectToLogin() {
  // Ne rediriger que si on n'est pas déjà sur la page de login
  if (window.location.pathname !== '/login.html' && !window.location.pathname.endsWith('login.html')) {
    window.location.href = 'login.html';
  }
}

// Déconnexion
function logout() {
  console.log('🚪 Logging out...');
  localStorage.removeItem('meeneo_auth');
  window.location.href = 'login.html';
}

// Vérifier l'authentification immédiatement si on est sur index.html
if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
  // Attendre que le DOM soit chargé
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      if (!checkAuthentication()) {
        // Empêcher le chargement du reste de la page
        document.body.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100vh; font-family: Arial, sans-serif;">Redirection vers la page de connexion...</div>';
      }
    });
  } else {
    if (!checkAuthentication()) {
      document.body.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100vh; font-family: Arial, sans-serif;">Redirection vers la page de connexion...</div>';
    }
  }
}

// Exposer les fonctions globalement
window.checkAuthentication = checkAuthentication;
window.logout = logout;

