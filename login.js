// ============================================
// GESTION DE LA PAGE DE CONNEXION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('🔐 Login page loaded');
  
  const loginForm = document.getElementById('login-form');
  const errorDiv = document.getElementById('login-error');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const rememberMeCheckbox = document.getElementById('remember-me');
  
  // Vérifier si l'utilisateur est déjà connecté
  if (isAuthenticated()) {
    console.log('✅ User already authenticated, redirecting...');
    window.location.href = 'index.html';
    return;
  }
  
  // Focus sur le champ username au chargement
  if (usernameInput) {
    usernameInput.focus();
  }
  
  // Gestion de la soumission du formulaire
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    const rememberMe = rememberMeCheckbox.checked;
    
    console.log('🔑 Attempting login...', { username, rememberMe });
    
    // Validation des identifiants
    if (username === 'admin' && password === 'admin') {
      console.log('✅ Login successful');
      
      // Sauvegarder l'état de connexion
      saveAuthentication(rememberMe);
      
      // Masquer l'erreur si elle était affichée
      hideError();
      
      // Animation de succès
      loginForm.style.opacity = '0.7';
      loginForm.style.pointerEvents = 'none';
      
      // Redirection après un court délai
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 300);
    } else {
      console.error('❌ Invalid credentials');
      showError('Identifiants incorrects. Veuillez réessayer.');
      
      // Animation d'erreur
      loginForm.style.animation = 'shake 0.5s ease';
      setTimeout(() => {
        loginForm.style.animation = '';
      }, 500);
      
      // Focus sur le champ password
      passwordInput.focus();
      passwordInput.select();
    }
  });
  
  // Fonction pour afficher une erreur
  function showError(message) {
    if (errorDiv) {
      errorDiv.textContent = message;
      errorDiv.style.display = 'block';
    }
  }
  
  // Fonction pour masquer l'erreur
  function hideError() {
    if (errorDiv) {
      errorDiv.style.display = 'none';
    }
  }
  
  // Fonction pour vérifier si l'utilisateur est authentifié
  function isAuthenticated() {
    const auth = localStorage.getItem('meeneo_auth');
    if (!auth) return false;
    
    try {
      const authData = JSON.parse(auth);
      // Vérifier si la session n'a pas expiré (24h par défaut)
      if (authData.expires && new Date() > new Date(authData.expires)) {
        localStorage.removeItem('meeneo_auth');
        return false;
      }
      return authData.authenticated === true;
    } catch (e) {
      console.error('Error parsing auth data:', e);
      return false;
    }
  }
  
  // Fonction pour sauvegarder l'authentification
  function saveAuthentication(rememberMe) {
    const authData = {
      authenticated: true,
      username: 'admin',
      timestamp: new Date().toISOString()
    };
    
    if (rememberMe) {
      // Si "Se souvenir de moi" est coché, la session dure 30 jours
      const expires = new Date();
      expires.setDate(expires.getDate() + 30);
      authData.expires = expires.toISOString();
    } else {
      // Sinon, la session dure 24 heures
      const expires = new Date();
      expires.setHours(expires.getHours() + 24);
      authData.expires = expires.toISOString();
    }
    
    localStorage.setItem('meeneo_auth', JSON.stringify(authData));
    console.log('💾 Authentication saved', authData);
  }
  
  // Animation d'entrée pour les champs
  const inputs = document.querySelectorAll('.form-input');
  inputs.forEach((input, index) => {
    input.style.opacity = '0';
    input.style.transform = 'translateY(10px)';
    setTimeout(() => {
      input.style.transition = 'all 0.4s ease';
      input.style.opacity = '1';
      input.style.transform = 'translateY(0)';
    }, 100 * (index + 1));
  });
});

