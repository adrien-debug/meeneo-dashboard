// ============================================
// SERVEUR LOCAL POUR DASHBOARD MEENEO
// ============================================

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname)));

// Route principale
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log('🚀 Serveur démarré !');
  console.log(`📊 Dashboard disponible sur : http://localhost:${PORT}`);
  console.log(`\nAppuyez sur Ctrl+C pour arrêter le serveur\n`);
});

