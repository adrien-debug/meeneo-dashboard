// ============================================
// DASHBOARD MEENEO - APPLICATION JAVASCRIPT
// ============================================

// Configuration GSAP
gsap.registerPlugin(ScrollTrigger);

// ============================================
// GESTION DES STYLES
// ============================================
let currentStyle = 'premium';

const styleButtons = document.querySelectorAll('.style-btn');
const body = document.body;

// Initialisation du style
function initStyle() {
  body.className = `style-${currentStyle}`;
  updateCharts();
  animateMetrics();
}

// Changement de style
styleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const style = button.dataset.style;
    currentStyle = style;
    
    // Mise à jour des boutons actifs
    styleButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');
    
    // Application du style au body
    body.className = `style-${style}`;
    
    // Mise à jour du contenu selon la page
    updatePageContent(style);
    
    // Mise à jour des graphiques
    updateCharts();
    
    // Réanimation des métriques
    animateMetrics();
  });
});

// ============================================
// ANIMATION DES MÉTRIQUES
// ============================================
function animateMetrics() {
  const metricBoxes = document.querySelectorAll('.metric-box');
  
  // Reset
  gsap.set(metricBoxes, { opacity: 0, y: 20 });
  
  // Animation selon le style
  gsap.to(metricBoxes, {
    opacity: 1,
    y: 0,
    duration: 0.4,
    stagger: 0.05,
    ease: 'power1.out'
  });
  
  // Animation des valeurs (compteur)
  metricBoxes.forEach(box => {
    const valueElement = box.querySelector('.metric-value');
    const valueText = valueElement.textContent;
    
    // Extraction du nombre
    const numberMatch = valueText.match(/[\d,]+/);
    if (numberMatch) {
      const targetValue = parseFloat(numberMatch[0].replace(/,/g, ''));
      const suffix = valueText.replace(/[\d,]+/, '').trim();
      
      // Animation du compteur
      gsap.fromTo(
        { value: 0 },
        {
          value: targetValue,
          duration: 1.5,
          ease: 'power2.out',
          onUpdate: function() {
            const currentValue = Math.floor(this.targets()[0].value);
            valueElement.textContent = formatNumber(currentValue) + (suffix ? ' ' + suffix : '');
          }
        }
      );
    }
  });
}

// Formatage des nombres
function formatNumber(num) {
  if (num >= 1000) {
    return num.toLocaleString('fr-FR');
  }
  return num.toString();
}

// ============================================
// GRAPHIQUES CHART.JS
// ============================================
let revenueChart = null;
let costsChart = null;

// Configuration des couleurs selon le style
function getChartColors() {
  switch (currentStyle) {
    case 'premium':
      return {
        primary: '#000000',
        secondary: '#666666',
        tertiary: '#CCCCCC',
        accent: '#F56A3B',
        grid: '#F5F5F5'
      };
    case 'cockpit':
      return {
        primary: '#000000',
        secondary: '#666666',
        tertiary: '#CCCCCC',
        accent: '#F56A3B',
        grid: '#F5F5F5'
      };
    case 'dynamic':
      return {
        primary: '#000000',
        secondary: '#666666',
        tertiary: '#CCCCCC',
        accent: '#F56A3B',
        grid: '#F5F5F5'
      };
    case 'institutionnel':
      return {
        primary: '#000000',
        secondary: '#666666',
        tertiary: '#999999',
        quaternary: '#CCCCCC',
        accent: '#F56A3B',
        grid: '#E2E2E2'
      };
    default:
      return {
        primary: '#000000',
        secondary: '#666666',
        tertiary: '#CCCCCC',
        accent: '#F56A3B',
        grid: '#F5F5F5'
      };
  }
}

// Données de test
function getRevenueData() {
  const labels = [];
  const data = [];
  const now = new Date();
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    labels.push(date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' }));
    data.push(Math.random() * 50000 + 100000);
  }
  
  return { labels, data };
}

function getCostsData() {
  return {
    labels: ['Énergie', 'Maintenance', 'Infrastructure', 'Personnel', 'Autres'],
    data: [45, 25, 15, 10, 5]
  };
}

// Configuration commune des graphiques
function getChartConfig(type, data, colors) {
  const commonConfig = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: type !== 'doughnut',
        position: 'top',
        labels: {
          font: {
            family: 'F37Gruffy',
            size: 12
          },
          color: colors.primary,
          padding: 15
        }
      },
      tooltip: {
        backgroundColor: currentStyle === 'institutionnel' ? '#FFFFFF' : 'rgba(0, 0, 0, 0.8)',
        titleColor: currentStyle === 'institutionnel' ? '#000000' : '#FFFFFF',
        bodyColor: currentStyle === 'institutionnel' ? '#333333' : '#FFFFFF',
        borderColor: currentStyle === 'institutionnel' ? '#E2E2E2' : 'transparent',
        borderWidth: currentStyle === 'institutionnel' ? 1 : 0,
        padding: 12,
        font: {
          family: 'F37Gruffy',
          size: 12
        }
      }
    },
    scales: type === 'line' ? {
      x: {
        grid: {
          color: colors.grid,
          lineWidth: 1
        },
        ticks: {
          color: colors.secondary,
          font: {
            family: 'F37Gruffy',
            size: 11
          }
        }
      },
      y: {
        grid: {
          color: colors.grid,
          lineWidth: 1
        },
        ticks: {
          color: colors.secondary,
          font: {
            family: 'F37Gruffy',
            size: 11
          }
        }
      }
    } : undefined
  };

  if (type === 'line') {
    return {
      ...commonConfig,
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Revenus',
          data: data.data,
          borderColor: '#F56A3B',
          backgroundColor: `rgba(245, 106, 59, 0.1)`,
          borderWidth: 2,
          fill: true,
          tension: 0,
          pointRadius: 4,
          pointHoverRadius: 7,
          pointBackgroundColor: '#F56A3B',
          pointBorderColor: '#FFFFFF',
          pointBorderWidth: 2
        }]
      },
      options: {
        ...commonConfig,
        animation: {
          duration: 1000,
          easing: 'easeOutQuart'
        }
      }
    };
  } else if (type === 'doughnut') {
    return {
      ...commonConfig,
      type: 'doughnut',
      data: {
        labels: data.labels,
        datasets: [{
          data: data.data,
          backgroundColor: [
            colors.primary,
            colors.secondary,
            colors.tertiary,
            colors.secondary,
            colors.accent
          ],
          borderWidth: currentStyle === 'institutionnel' ? 2 : 0,
          borderColor: '#FFFFFF'
        }]
      },
      options: {
        ...commonConfig,
        animation: {
          animateRotate: true,
          duration: 1000
        }
      }
    };
  }
}

// Création/Mise à jour des graphiques
function updateCharts() {
  const colors = getChartColors();
  
  // Graphique Revenus
  const revenueCtx = document.getElementById('revenue-chart');
  const revenueData = getRevenueData();
  
  if (revenueChart) {
    revenueChart.destroy();
  }
  
  revenueChart = new Chart(revenueCtx, getChartConfig('line', revenueData, colors));
  
  // Graphique Coûts
  const costsCtx = document.getElementById('costs-chart');
  const costsData = getCostsData();
  
  if (costsChart) {
    costsChart.destroy();
  }
  
  costsChart = new Chart(costsCtx, getChartConfig('doughnut', costsData, colors));
}

// ============================================
// GESTION DES PÉRIODES DE GRAPHIQUES
// ============================================
const periodButtons = document.querySelectorAll('.chart-period');
periodButtons.forEach(button => {
  button.addEventListener('click', () => {
    periodButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Mise à jour des données selon la période
    const period = button.dataset.period;
    updateChartsForPeriod(period);
  });
});

function updateChartsForPeriod(period) {
  // Logique pour changer les données selon la période
  // Pour l'instant, on recharge simplement les graphiques
  updateCharts();
}

// ============================================
// ANIMATIONS AU SCROLL
// ============================================
gsap.utils.toArray('.chart-container').forEach((container, i) => {
  gsap.from(container, {
    scrollTrigger: {
      trigger: container,
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    delay: i * 0.1,
    ease: 'power2.out'
  });
});

// ============================================
// DONNÉES PAR PAGE
// ============================================
const pageData = {
  premium: {
    name: 'Dashboard',
    metrics: [
      { label: 'REVENUS', value: '€125,430', change: '12.5%', positive: true },
      { label: 'HASHRATE', value: '2.45 TH/s', change: '8.3%', positive: true },
      { label: 'ACTIFS MINIERS', value: '1,247', change: '5.2%', positive: true },
      { label: 'EFFICACITÉ', value: '94.2%', change: '2.1%', positive: false }
    ],
    charts: {
      title1: 'Évolution des Revenus',
      title3: 'Répartition des Coûts'
    },
    table: {
      title: 'Activités Récentes',
      headers: ['Date', 'Type', 'Montant', 'Statut'],
      filters: ['Tous', 'Revenus', 'Dépenses', 'Maintenance'],
      data: [
        ['2025-01-15', 'Revenus', '€12,450', 'Complété'],
        ['2025-01-14', 'Maintenance', '€2,300', 'En cours'],
        ['2025-01-13', 'Revenus', '€11,890', 'Complété'],
        ['2025-01-12', 'Dépenses', '€4,200', 'Complété'],
        ['2025-01-11', 'Revenus', '€13,100', 'Complété']
      ]
    }
  },
  cockpit: {
    name: 'Cockpit',
    metrics: [
      { label: 'OPÉRATIONS ACTIVES', value: '156', change: '12.3%', positive: true },
      { label: 'HASHRATE GLOBAL', value: '342.8 TH/s', change: '18.7%', positive: true },
      { label: 'ALERTES EN COURS', value: '3', change: '25.0%', positive: false },
      { label: 'DISPONIBILITÉ', value: '99.2%', change: '0.5%', positive: true }
    ],
    charts: {
      title1: 'Vue d\'ensemble Opérationnelle',
      title3: 'Statut des Systèmes'
    },
    table: {
      title: 'Opérations en Temps Réel',
      headers: ['ID Opération', 'Type', 'Statut', 'Hashrate', 'Dernière MAJ'],
      filters: ['Tous', 'Actif', 'En pause', 'Erreur'],
      data: [
        ['OP-001', 'Mining', 'Actif', '12.5 TH/s', '2025-01-15 14:32'],
        ['OP-002', 'Maintenance', 'En pause', '0 TH/s', '2025-01-15 13:15'],
        ['OP-003', 'Mining', 'Actif', '8.3 TH/s', '2025-01-15 14:30'],
        ['OP-004', 'Test', 'Erreur', '0 TH/s', '2025-01-15 12:45'],
        ['OP-005', 'Mining', 'Actif', '15.2 TH/s', '2025-01-15 14:33']
      ]
    }
  },
  dynamic: {
    name: 'Profitability Index',
    metrics: [
      { label: 'INDICE RENTABILITÉ', value: '1.85', change: '15.2%', positive: true },
      { label: 'RETOUR SUR INVEST.', value: '€245,890', change: '22.1%', positive: true },
      { label: 'MARGES BRUTES', value: '68.5%', change: '8.7%', positive: true },
      { label: 'COÛT PAR TH/s', value: '€18,450', change: '3.2%', positive: false }
    ],
    charts: {
      title1: 'Évolution de la Rentabilité',
      title3: 'Analyse des Marges'
    },
    table: {
      title: 'Analyse de Rentabilité',
      headers: ['Période', 'Revenus', 'Coûts', 'Marge', 'Indice'],
      filters: ['Tous', 'Mensuel', 'Trimestriel', 'Annuel'],
      data: [
        ['Jan 2025', '€125,430', '€45,230', '€80,200', '1.85'],
        ['Déc 2024', '€118,200', '€48,100', '€70,100', '1.61'],
        ['Nov 2024', '€112,500', '€46,800', '€65,700', '1.52'],
        ['Oct 2024', '€108,900', '€47,200', '€61,700', '1.48'],
        ['Sep 2024', '€105,300', '€49,100', '€56,200', '1.42']
      ]
    }
  },
  institutionnel: {
    name: 'Mining Batches',
    metrics: [
      { label: 'BATCHES ACTIFS', value: '47', change: '12.8%', positive: true },
      { label: 'HASHRATE TOTAL', value: '115.2 TH/s', change: '18.5%', positive: true },
      { label: 'BATCHES EN COURS', value: '12', change: '5.0%', positive: true },
      { label: 'TAUX DE RÉUSSITE', value: '96.8%', change: '2.3%', positive: true }
    ],
    charts: {
      title1: 'Performance des Batches',
      title3: 'Statistiques de Production'
    },
    table: {
      title: 'Liste des Batches',
      headers: ['ID Batch', 'Type', 'Hashrate', 'Statut', 'Date Début'],
      filters: ['Tous', 'Actif', 'En cours', 'Terminé'],
      data: [
        ['BATCH-001', 'Bitcoin', '2.5 TH/s', 'Actif', '2025-01-10'],
        ['BATCH-002', 'Ethereum', '1.8 TH/s', 'Actif', '2025-01-08'],
        ['BATCH-003', 'Bitcoin', '3.2 TH/s', 'En cours', '2025-01-12'],
        ['BATCH-004', 'Litecoin', '1.2 TH/s', 'Terminé', '2024-12-28'],
        ['BATCH-005', 'Bitcoin', '2.8 TH/s', 'Actif', '2025-01-05']
      ]
    }
  },
  customers: {
    name: 'Customers',
    metrics: [
      { label: 'CLIENTS ACTIFS', value: '342', change: '18.5%', positive: true },
      { label: 'REVENUS CLIENTS', value: '€892,450', change: '24.3%', positive: true },
      { label: 'NOUVEAUX CLIENTS', value: '28', change: '15.0%', positive: true },
      { label: 'TAUX DE RÉTENTION', value: '94.2%', change: '3.1%', positive: true }
    ],
    charts: {
      title1: 'Évolution des Clients',
      title3: 'Analyse de Rétention'
    },
    table: {
      title: 'Liste des Clients',
      headers: ['Client', 'Type', 'Contrat', 'Revenus', 'Hashrate', 'Date Inscription', 'Statut'],
      filters: ['Tous', 'Premium', 'Standard', 'Enterprise', 'Actif', 'Inactif'],
      data: [
        ['TechCorp Inc.', 'Enterprise', 'Annuel', '€125,000', '45.2 TH/s', '2023-03-15', 'Actif'],
        ['CryptoMining Ltd', 'Premium', 'Mensuel', '€45,200', '18.5 TH/s', '2024-01-20', 'Actif'],
        ['BlockChain Pro', 'Standard', 'Mensuel', '€18,500', '8.3 TH/s', '2024-06-10', 'Actif'],
        ['Digital Assets', 'Premium', 'Trimestriel', '€38,900', '15.2 TH/s', '2023-11-05', 'Actif'],
        ['Mining Solutions', 'Enterprise', 'Annuel', '€98,300', '32.8 TH/s', '2022-09-12', 'Actif'],
        ['HashPower Global', 'Enterprise', 'Annuel', '€156,800', '58.4 TH/s', '2022-05-22', 'Actif'],
        ['Crypto Ventures', 'Premium', 'Mensuel', '€52,400', '22.1 TH/s', '2024-02-14', 'Actif'],
        ['BlockTech Systems', 'Standard', 'Mensuel', '€12,300', '5.8 TH/s', '2024-08-30', 'Actif'],
        ['Mining Corp', 'Enterprise', 'Annuel', '€187,500', '68.9 TH/s', '2021-12-08', 'Actif'],
        ['Digital Mining Co', 'Premium', 'Trimestriel', '€41,600', '16.7 TH/s', '2023-07-18', 'Actif'],
        ['Crypto Solutions', 'Standard', 'Mensuel', '€15,800', '7.2 TH/s', '2024-09-25', 'Actif'],
        ['BlockChain Mining', 'Premium', 'Mensuel', '€48,900', '19.4 TH/s', '2024-03-11', 'Actif'],
        ['HashRate Industries', 'Enterprise', 'Annuel', '€134,200', '49.6 TH/s', '2023-01-28', 'Actif'],
        ['Mining Partners', 'Premium', 'Trimestriel', '€35,700', '14.3 TH/s', '2023-10-15', 'Actif'],
        ['Crypto Assets Ltd', 'Standard', 'Mensuel', '€21,400', '9.8 TH/s', '2024-05-07', 'Actif'],
        ['Tech Mining Group', 'Enterprise', 'Annuel', '€112,600', '41.5 TH/s', '2022-11-20', 'Actif'],
        ['Block Mining Pro', 'Premium', 'Mensuel', '€44,300', '17.9 TH/s', '2024-01-08', 'Actif'],
        ['Digital Hash Power', 'Standard', 'Mensuel', '€19,200', '8.7 TH/s', '2024-07-22', 'Actif'],
        ['Crypto Mining Hub', 'Premium', 'Trimestriel', '€37,500', '15.1 TH/s', '2023-12-03', 'Actif'],
        ['Mining Technologies', 'Enterprise', 'Annuel', '€145,900', '53.8 TH/s', '2022-04-16', 'Actif'],
        ['Hash Solutions', 'Premium', 'Mensuel', '€50,100', '20.3 TH/s', '2024-02-28', 'Actif'],
        ['Block Assets', 'Standard', 'Mensuel', '€16,700', '7.6 TH/s', '2024-10-12', 'Actif'],
        ['Crypto Mining Pro', 'Premium', 'Mensuel', '€46,800', '18.9 TH/s', '2024-04-05', 'Actif'],
        ['Mining Enterprise', 'Enterprise', 'Annuel', '€168,400', '62.1 TH/s', '2021-08-30', 'Actif'],
        ['Digital Block Mining', 'Premium', 'Trimestriel', '€39,200', '15.8 TH/s', '2023-09-14', 'Actif']
      ]
    }
  }
};

// ============================================
// MISE À JOUR DU CONTENU DE LA PAGE
// ============================================
function updatePageContent(pageStyle) {
  const data = pageData[pageStyle] || pageData.premium;
  
  // Mise à jour des métriques
  updateMetrics(data.metrics);
  
  // Mise à jour des titres de graphiques
  updateChartTitles(data.charts);
  
  // Mise à jour du tableau
  updateTable(data.table);
}

// Mise à jour des métriques
function updateMetrics(metrics) {
  const metricBoxes = document.querySelectorAll('.metric-box');
  const metricTypes = ['revenue', 'hashrate', 'miners', 'efficiency'];
  
  metricBoxes.forEach((box, index) => {
    if (index < metrics.length) {
      const metric = metrics[index];
      box.querySelector('.metric-label').textContent = metric.label;
      box.querySelector('.metric-value').textContent = metric.value;
      
      const changeElement = box.querySelector('.metric-change');
      changeElement.className = `metric-change ${metric.positive ? 'positive' : 'negative'}`;
      changeElement.querySelector('.change-value').textContent = metric.change;
      
      // Mettre à jour l'attribut data-metric pour la barre colorée
      if (index < metricTypes.length) {
        box.setAttribute('data-metric', metricTypes[index]);
      }
    }
  });
}

// Mise à jour des titres de graphiques
function updateChartTitles(charts) {
  document.getElementById('chart-title-1').textContent = charts.title1;
  document.getElementById('chart-title-3').textContent = charts.title3;
}

// Mise à jour du tableau
let currentTableData = [];
let currentPage = 1;
const itemsPerPage = 10;

function updateTable(tableData) {
  currentTableData = tableData.data;
  currentPage = 1;
  
  // Mise à jour du titre
  const tableTitle = document.getElementById('table-title');
  tableTitle.textContent = tableData.title;
  
  // Les boutons d'ajout sont maintenant centralisés dans le menu Settings
  // Plus besoin de boutons individuels dans les tableaux
  
  // Mise à jour des headers
  const headersRow = document.getElementById('table-headers');
  headersRow.innerHTML = '';
  tableData.headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headersRow.appendChild(th);
  });
  
  // Ajouter colonne Actions pour toutes les pages avec tableaux
  const th = document.createElement('th');
  th.textContent = 'Actions';
  headersRow.appendChild(th);
  
  // Mise à jour des filtres
  const filterSelect = document.getElementById('filter-select');
  filterSelect.innerHTML = '';
  tableData.filters.forEach(filter => {
    const option = document.createElement('option');
    option.value = filter.toLowerCase();
    option.textContent = filter;
    if (filter === 'Tous') option.value = 'all';
    filterSelect.appendChild(option);
  });
  
  // Affichage des données
  renderTable();
}

// Rendu du tableau
function renderTable(filteredData = null) {
  const data = filteredData || currentTableData;
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = data.slice(startIndex, endIndex);
  
  pageData.forEach((row, rowIndex) => {
    const tr = document.createElement('tr');
    row.forEach(cell => {
      const td = document.createElement('td');
      td.textContent = cell;
      tr.appendChild(td);
    });
    
    // Ajouter bouton View pour toutes les pages
    const td = document.createElement('td');
    const viewBtn = document.createElement('button');
    viewBtn.className = 'view-btn';
    viewBtn.textContent = 'View';
    viewBtn.setAttribute('data-item', row[0]); // Premier élément de la ligne
    viewBtn.addEventListener('click', (e) => {
      const itemName = e.target.getAttribute('data-item');
      handleViewItem(currentStyle, itemName, row);
    });
    td.appendChild(viewBtn);
    tr.appendChild(td);
    
    tbody.appendChild(tr);
  });
  
  // Mise à jour de la pagination
  updatePagination(data.length);
}

// Mise à jour de la pagination
function updatePagination(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  document.getElementById('pagination-info').textContent = `Page ${currentPage} sur ${totalPages}`;
  document.getElementById('prev-page').disabled = currentPage === 1;
  document.getElementById('next-page').disabled = currentPage === totalPages || totalPages === 0;
}

// Filtrage
let filteredTableData = null;
let currentSearchTerm = '';
let currentFilterValue = 'all';

document.getElementById('search-input').addEventListener('input', (e) => {
  currentSearchTerm = e.target.value.toLowerCase();
  applyFilters();
});

document.getElementById('filter-select').addEventListener('change', (e) => {
  currentFilterValue = e.target.value;
  applyFilters();
});

function applyFilters() {
  let filtered = [...currentTableData];
  
  // Filtre par recherche
  if (currentSearchTerm) {
    filtered = filtered.filter(row => 
      row.some(cell => cell.toLowerCase().includes(currentSearchTerm))
    );
  }
  
  // Filtre par sélection
  if (currentFilterValue !== 'all') {
    filtered = filtered.filter(row => {
      const rowText = row.join(' ').toLowerCase();
      return rowText.includes(currentFilterValue);
    });
  }
  
  filteredTableData = filtered;
  currentPage = 1;
  renderTable(filtered);
}

// Réinitialisation des filtres
document.getElementById('reset-filters').addEventListener('click', () => {
  document.getElementById('search-input').value = '';
  document.getElementById('filter-select').value = 'all';
  currentSearchTerm = '';
  currentFilterValue = 'all';
  filteredTableData = null;
  currentPage = 1;
  renderTable();
});

// Pagination
document.getElementById('prev-page').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderTable(filteredTableData);
  }
});

document.getElementById('next-page').addEventListener('click', () => {
  const data = filteredTableData || currentTableData;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderTable(filteredTableData);
  }
});

// ============================================
// GESTION DU BOUTON VIEW - MODAL (Générique)
// ============================================
function handleViewItem(pageStyle, itemName, itemData) {
  switch(pageStyle) {
    case 'customers':
      handleViewClient(itemName, itemData);
      break;
    case 'premium':
      handleViewActivity(itemName, itemData);
      break;
    case 'cockpit':
      handleViewOperation(itemName, itemData);
      break;
    case 'dynamic':
      handleViewAnalysis(itemName, itemData);
      break;
    case 'institutionnel':
      handleViewBatch(itemName, itemData);
      break;
    default:
      handleViewGeneric(itemName, itemData);
  }
}

// Vue générique pour les pages sans handler spécifique
function handleViewGeneric(itemName, itemData) {
  const modal = document.getElementById('customer-modal');
  const modalTitle = document.getElementById('modal-customer-name');
  const modalBody = document.getElementById('modal-body');
  
  modalTitle.textContent = itemName;
  
  let html = '<div class="modal-details">';
  html += '<div class="modal-section">';
  html += '<h3 class="modal-section-title">Détails</h3>';
  html += '<div class="modal-info-grid">';
  
  itemData.forEach((value, index) => {
    html += `
      <div class="modal-info-item">
        <span class="modal-info-label">Colonne ${index + 1}</span>
        <span class="modal-info-value">${value}</span>
      </div>
    `;
  });
  
  html += '</div>';
  html += '</div>';
  html += '</div>';
  
  modalBody.innerHTML = html;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Vue pour les activités (Dashboard)
function handleViewActivity(activityName, activityData) {
  const modal = document.getElementById('customer-modal');
  const modalTitle = document.getElementById('modal-customer-name');
  const modalBody = document.getElementById('modal-body');
  
  modalTitle.textContent = activityName;
  
  const details = [
    { label: 'Date', value: activityData[0] },
    { label: 'Type', value: activityData[1] },
    { label: 'Montant', value: activityData[2] },
    { label: 'Statut', value: activityData[3] }
  ];
  
  let html = generateModalContent(details, activityName, 'activity');
  modalBody.innerHTML = html;
  attachActionListeners();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Vue pour les opérations (Cockpit)
function handleViewOperation(operationName, operationData) {
  const modal = document.getElementById('customer-modal');
  const modalTitle = document.getElementById('modal-customer-name');
  const modalBody = document.getElementById('modal-body');
  
  modalTitle.textContent = operationName;
  
  const details = [
    { label: 'ID Opération', value: operationData[0] },
    { label: 'Type', value: operationData[1] },
    { label: 'Statut', value: operationData[3] },
    { label: 'Hashrate', value: operationData[4] },
    { label: 'Dernière MAJ', value: operationData[5] }
  ];
  
  let html = generateModalContent(details, operationName, 'operation');
  modalBody.innerHTML = html;
  attachActionListeners();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Vue pour les analyses (Profitability Index)
function handleViewAnalysis(periodName, analysisData) {
  const modal = document.getElementById('customer-modal');
  const modalTitle = document.getElementById('modal-customer-name');
  const modalBody = document.getElementById('modal-body');
  
  modalTitle.textContent = periodName;
  
  const details = [
    { label: 'Période', value: analysisData[0] },
    { label: 'Revenus', value: analysisData[1] },
    { label: 'Coûts', value: analysisData[2] },
    { label: 'Marge', value: analysisData[3] },
    { label: 'Indice', value: analysisData[4] }
  ];
  
  let html = generateModalContent(details, periodName, 'analysis');
  modalBody.innerHTML = html;
  attachActionListeners();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Vue pour les batches (Mining Batches)
function handleViewBatch(batchName, batchData) {
  const modal = document.getElementById('customer-modal');
  const modalTitle = document.getElementById('modal-customer-name');
  const modalBody = document.getElementById('modal-body');
  
  modalTitle.textContent = batchName;
  
  const details = [
    { label: 'ID Batch', value: batchData[0] },
    { label: 'Type', value: batchData[1] },
    { label: 'Hashrate', value: batchData[2] },
    { label: 'Statut', value: batchData[3] },
    { label: 'Date Début', value: formatDate(batchData[4]) }
  ];
  
  let html = generateModalContent(details, batchName, 'batch');
  modalBody.innerHTML = html;
  attachActionListeners();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Fonction générique pour générer le contenu de la modal
function generateModalContent(details, itemName, type) {
  let html = '<div class="modal-details">';
  
  html += '<div class="modal-section">';
  html += '<h3 class="modal-section-title">Informations Principales</h3>';
  html += '<div class="modal-info-grid">';
  details.forEach(detail => {
    html += `
      <div class="modal-info-item">
        <span class="modal-info-label">${detail.label}</span>
        <span class="modal-info-value">${detail.value}</span>
      </div>
    `;
  });
  html += '</div>';
  html += '</div>';
  
  html += '<div class="modal-section">';
  html += '<h3 class="modal-section-title">Actions</h3>';
  html += '<div class="modal-actions">';
  html += `<button class="modal-action-btn primary" data-action="edit" data-item="${itemName}">Modifier</button>`;
  html += `<button class="modal-action-btn secondary" data-action="history" data-item="${itemName}">Historique</button>`;
  html += `<button class="modal-action-btn secondary" data-action="contact" data-item="${itemName}">Plus d\'infos</button>`;
  html += '</div>';
  html += '</div>';
  
  html += '</div>';
  return html;
}

// ============================================
// GESTION DU BOUTON VIEW - MODAL (Customers spécifique)
// ============================================
function handleViewClient(clientName, clientData) {
  const modal = document.getElementById('customer-modal');
  const modalTitle = document.getElementById('modal-customer-name');
  const modalBody = document.getElementById('modal-body');
  
  // Mise à jour du titre
  modalTitle.textContent = clientName;
  
  // Création du contenu de la modal
  const details = [
    { label: 'Type de Client', value: clientData[1] },
    { label: 'Type de Contrat', value: clientData[2] },
    { label: 'Revenus Mensuels', value: clientData[3] },
    { label: 'Hashrate Alloué', value: clientData[4] },
    { label: 'Date d\'Inscription', value: formatDate(clientData[5]) },
    { label: 'Statut', value: clientData[6] }
  ];
  
  // Calcul des statistiques supplémentaires
  const contractValue = parseFloat(clientData[3].replace(/[€,]/g, ''));
  const annualValue = clientData[2] === 'Annuel' ? contractValue : contractValue * 12;
  const monthlyValue = clientData[2] === 'Mensuel' ? contractValue : contractValue / (clientData[2] === 'Trimestriel' ? 3 : 12);
  
  // Génération du HTML
  let html = '<div class="modal-details">';
  
  // Informations principales
  html += '<div class="modal-section">';
  html += '<h3 class="modal-section-title">Informations Principales</h3>';
  html += '<div class="modal-info-grid">';
  details.forEach(detail => {
    html += `
      <div class="modal-info-item">
        <span class="modal-info-label">${detail.label}</span>
        <span class="modal-info-value">${detail.value}</span>
      </div>
    `;
  });
  html += '</div>';
  html += '</div>';
  
  // Statistiques financières
  html += '<div class="modal-section">';
  html += '<h3 class="modal-section-title">Statistiques Financières</h3>';
  html += '<div class="modal-info-grid">';
  html += `
    <div class="modal-info-item">
      <span class="modal-info-label">Valeur Mensuelle</span>
      <span class="modal-info-value">€${monthlyValue.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
    </div>
    <div class="modal-info-item">
      <span class="modal-info-label">Valeur Annuelle</span>
      <span class="modal-info-value">€${annualValue.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
    </div>
  `;
  html += '</div>';
  html += '</div>';
  
  // Actions
  html += '<div class="modal-section">';
  html += '<h3 class="modal-section-title">Actions</h3>';
  html += '<div class="modal-actions">';
  html += `<button class="modal-action-btn primary" data-action="edit" data-client="${clientName}">Modifier</button>`;
  html += `<button class="modal-action-btn secondary" data-action="history" data-client="${clientName}">Historique</button>`;
  html += `<button class="modal-action-btn secondary" data-action="contact" data-client="${clientName}">Contacter</button>`;
  html += '</div>';
  html += '</div>';
  
  html += '</div>';
  
  modalBody.innerHTML = html;
  
  // Ajouter les event listeners aux boutons d'action
  attachActionListeners();
  
  // Afficher la modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Attacher les listeners aux boutons d'action
function attachActionListeners() {
  const actionButtons = document.querySelectorAll('.modal-action-btn');
  actionButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const action = e.target.getAttribute('data-action');
      const itemName = e.target.getAttribute('data-item') || e.target.getAttribute('data-client');
      handleAction(action, itemName);
    });
  });
}

// Gestion des actions
function handleAction(action, itemName) {
  switch(action) {
    case 'edit':
      if (currentStyle === 'customers') {
        handleEditClient(itemName);
      } else {
        handleEditItem(itemName);
      }
      break;
    case 'history':
      if (currentStyle === 'customers') {
        handleViewHistory(itemName);
      } else {
        handleViewItemHistory(itemName);
      }
      break;
    case 'contact':
      if (currentStyle === 'customers') {
        handleContactClient(itemName);
      } else {
        handleItemInfo(itemName);
      }
      break;
  }
}

// Édition générique
function handleEditItem(itemName) {
  showNotification('Fonctionnalité d\'édition en cours de développement', 'info');
}

// Historique générique
function handleViewItemHistory(itemName) {
  showNotification('Historique non disponible pour cet élément', 'info');
}

// Plus d'infos générique
function handleItemInfo(itemName) {
  showNotification('Informations supplémentaires en cours de développement', 'info');
}

// Modifier un client
function handleEditClient(clientName) {
  // Trouver les données du client
  const clientData = currentTableData.find(row => row[0] === clientName);
  if (!clientData) return;
  
  // Créer un formulaire d'édition
  const modal = document.getElementById('customer-modal');
  const modalBody = document.getElementById('modal-body');
  
  let html = '<div class="modal-edit-form">';
  html += '<h3 class="modal-section-title">Modifier le Client</h3>';
  html += '<form id="edit-client-form">';
  
  html += '<div class="form-group">';
  html += '<label>Nom du Client</label>';
  html += `<input type="text" id="edit-name" value="${clientData[0]}" readonly>`;
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Type de Client</label>';
  html += `<select id="edit-type">`;
  html += `<option value="Enterprise" ${clientData[1] === 'Enterprise' ? 'selected' : ''}>Enterprise</option>`;
  html += `<option value="Premium" ${clientData[1] === 'Premium' ? 'selected' : ''}>Premium</option>`;
  html += `<option value="Standard" ${clientData[1] === 'Standard' ? 'selected' : ''}>Standard</option>`;
  html += `</select>`;
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Type de Contrat</label>';
  html += `<select id="edit-contract">`;
  html += `<option value="Annuel" ${clientData[2] === 'Annuel' ? 'selected' : ''}>Annuel</option>`;
  html += `<option value="Trimestriel" ${clientData[2] === 'Trimestriel' ? 'selected' : ''}>Trimestriel</option>`;
  html += `<option value="Mensuel" ${clientData[2] === 'Mensuel' ? 'selected' : ''}>Mensuel</option>`;
  html += `</select>`;
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Revenus</label>';
  html += `<input type="text" id="edit-revenue" value="${clientData[3]}">`;
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Hashrate</label>';
  html += `<input type="text" id="edit-hashrate" value="${clientData[4]}">`;
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Statut</label>';
  html += `<select id="edit-status">`;
  html += `<option value="Actif" ${clientData[6] === 'Actif' ? 'selected' : ''}>Actif</option>`;
  html += `<option value="Inactif" ${clientData[6] === 'Inactif' ? 'selected' : ''}>Inactif</option>`;
  html += `<option value="Suspendu" ${clientData[6] === 'Suspendu' ? 'selected' : ''}>Suspendu</option>`;
  html += `</select>`;
  html += '</div>';
  
  html += '<div class="form-actions">';
  html += '<button type="submit" class="modal-action-btn primary">Enregistrer</button>';
  html += `<button type="button" class="modal-action-btn secondary" data-back="true" data-client="${clientName}">Annuler</button>`;
  html += '</div>';
  
  html += '</form>';
  html += '</div>';
  
  modalBody.innerHTML = html;
  
  // Gestionnaire de soumission du formulaire
  document.getElementById('edit-client-form').addEventListener('submit', (e) => {
    e.preventDefault();
    saveClientChanges(clientName);
  });
  
  // Ajouter listener pour le bouton annuler
  const cancelBtn = modalBody.querySelector('[data-back="true"]');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      const clientData = currentTableData.find(row => row[0] === clientName);
      if (clientData) {
        handleViewClient(clientName, clientData);
      }
    });
  }
}

// Sauvegarder les modifications
function saveClientChanges(clientName) {
  const newData = [
    document.getElementById('edit-name').value,
    document.getElementById('edit-type').value,
    document.getElementById('edit-contract').value,
    document.getElementById('edit-revenue').value,
    document.getElementById('edit-hashrate').value,
    currentTableData.find(row => row[0] === clientName)[5], // Garder la date d'inscription
    document.getElementById('edit-status').value
  ];
  
  // Mettre à jour les données
  const index = currentTableData.findIndex(row => row[0] === clientName);
  if (index !== -1) {
    currentTableData[index] = newData;
    
    // Réafficher la vue détaillée avec les nouvelles données
    handleViewClient(clientName, newData);
    
    // Re-rendre le tableau
    renderTable(filteredTableData || null);
    
    // Afficher un message de succès
    showNotification('Modifications enregistrées avec succès', 'success');
  }
}

// Voir l'historique
function handleViewHistory(clientName) {
  const modal = document.getElementById('customer-modal');
  const modalBody = document.getElementById('modal-body');
  
  // Générer des données d'historique fictives
  const historyData = [
    { date: '2025-01-15', action: 'Paiement reçu', amount: '€12,500', status: 'Complété' },
    { date: '2025-01-10', action: 'Mise à jour contrat', amount: '-', status: 'Complété' },
    { date: '2025-01-05', action: 'Paiement reçu', amount: '€12,500', status: 'Complété' },
    { date: '2024-12-28', action: 'Renouvellement contrat', amount: '-', status: 'Complété' },
    { date: '2024-12-20', action: 'Paiement reçu', amount: '€12,500', status: 'Complété' }
  ];
  
  let html = '<div class="modal-history">';
  html += '<h3 class="modal-section-title">Historique - ' + clientName + '</h3>';
  html += '<div class="history-list">';
  
  historyData.forEach(item => {
    html += '<div class="history-item">';
    html += `<div class="history-date">${formatDate(item.date)}</div>`;
    html += `<div class="history-action">${item.action}</div>`;
    html += `<div class="history-amount">${item.amount}</div>`;
    html += `<div class="history-status ${item.status.toLowerCase()}">${item.status}</div>`;
    html += '</div>';
  });
  
  html += '</div>';
  html += '<div class="modal-actions">';
  html += `<button class="modal-action-btn secondary" data-back="true" data-client="${clientName}">Retour</button>`;
  html += '</div>';
  html += '</div>';
  
  modalBody.innerHTML = html;
  
  // Ajouter listener pour le bouton retour
  const backBtn = modalBody.querySelector('[data-back="true"]');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      const clientData = currentTableData.find(row => row[0] === clientName);
      if (clientData) {
        handleViewClient(clientName, clientData);
      }
    });
  }
}

// Contacter un client
function handleContactClient(clientName) {
  const modal = document.getElementById('customer-modal');
  const modalBody = document.getElementById('modal-body');
  
  let html = '<div class="modal-contact">';
  html += '<h3 class="modal-section-title">Contacter - ' + clientName + '</h3>';
  html += '<form id="contact-client-form">';
  
  html += '<div class="form-group">';
  html += '<label>Sujet</label>';
  html += '<input type="text" id="contact-subject" placeholder="Sujet du message" required>';
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Type de Contact</label>';
  html += '<select id="contact-type" required>';
  html += '<option value="">Sélectionner...</option>';
  html += '<option value="email">Email</option>';
  html += '<option value="phone">Téléphone</option>';
  html += '<option value="meeting">Réunion</option>';
  html += '</select>';
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Message</label>';
  html += '<textarea id="contact-message" rows="5" placeholder="Votre message..." required></textarea>';
  html += '</div>';
  
  html += '<div class="form-actions">';
  html += '<button type="submit" class="modal-action-btn primary">Envoyer</button>';
  html += `<button type="button" class="modal-action-btn secondary" data-back="true" data-client="${clientName}">Annuler</button>`;
  html += '</div>';
  
  html += '</form>';
  html += '</div>';
  
  modalBody.innerHTML = html;
  
  // Gestionnaire de soumission
  document.getElementById('contact-client-form').addEventListener('submit', (e) => {
    e.preventDefault();
    sendContactMessage(clientName);
  });
  
  // Ajouter listener pour le bouton annuler
  const cancelBtn = modalBody.querySelector('[data-back="true"]');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      const clientData = currentTableData.find(row => row[0] === clientName);
      if (clientData) {
        handleViewClient(clientName, clientData);
      }
    });
  }
}

// Envoyer le message de contact
function sendContactMessage(clientName) {
  const subject = document.getElementById('contact-subject').value;
  const type = document.getElementById('contact-type').value;
  const message = document.getElementById('contact-message').value;
  
  // Simuler l'envoi
  showNotification(`Message envoyé à ${clientName} (${type})`, 'success');
  
  // Fermer la modal après un délai
  setTimeout(() => {
    closeModal();
  }, 1500);
}

// Afficher une notification
function showNotification(message, type = 'info') {
  // Créer l'élément de notification
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Animation d'entrée
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  // Retirer après 3 secondes
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// ============================================
// AJOUTER UN ÉLÉMENT (Générique)
// ============================================
function handleAddItem(pageStyle) {
  switch(pageStyle) {
    case 'customers':
      handleAddCustomer();
      break;
    case 'premium':
      handleAddActivity();
      break;
    case 'cockpit':
      handleAddOperation();
      break;
    case 'dynamic':
      handleAddAnalysis();
      break;
    case 'institutionnel':
      handleAddBatch();
      break;
    default:
      showNotification('Fonctionnalité d\'ajout non disponible', 'info');
  }
}

// Ajouter une activité (Dashboard)
function handleAddActivity() {
  const modal = document.getElementById('customer-modal');
  const modalTitle = document.getElementById('modal-customer-name');
  const modalBody = document.getElementById('modal-body');
  
  modalTitle.textContent = 'Nouvelle Activité';
  
  let html = '<div class="modal-edit-form">';
  html += '<h3 class="modal-section-title">Informations de l\'Activité</h3>';
  html += '<form id="add-item-form">';
  
  html += '<div class="form-group">';
  html += '<label>Date <span class="required">*</span></label>';
  html += '<input type="date" id="add-date" required>';
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Type <span class="required">*</span></label>';
  html += '<select id="add-type" required>';
  html += '<option value="">Sélectionner...</option>';
  html += '<option value="Revenus">Revenus</option>';
  html += '<option value="Dépenses">Dépenses</option>';
  html += '<option value="Maintenance">Maintenance</option>';
  html += '</select>';
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Montant <span class="required">*</span></label>';
  html += '<input type="text" id="add-amount" placeholder="Ex: €12,450" required>';
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Statut <span class="required">*</span></label>';
  html += '<select id="add-status" required>';
  html += '<option value="Complété" selected>Complété</option>';
  html += '<option value="En cours">En cours</option>';
  html += '<option value="En attente">En attente</option>';
  html += '</select>';
  html += '</div>';
  
  html += '<div class="form-actions">';
  html += '<button type="submit" class="modal-action-btn primary">Créer l\'Activité</button>';
  html += '<button type="button" class="modal-action-btn secondary" id="cancel-add-btn">Annuler</button>';
  html += '</div>';
  html += '</form>';
  html += '</div>';
  
  modalBody.innerHTML = html;
  
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('add-date').value = today;
  
  document.getElementById('add-item-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newItem = [
      document.getElementById('add-date').value,
      document.getElementById('add-type').value,
      document.getElementById('add-amount').value,
      document.getElementById('add-status').value
    ];
    saveNewItem(newItem, 'premium');
  });
  
  document.getElementById('cancel-add-btn').addEventListener('click', closeModal);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Ajouter une opération (Cockpit)
function handleAddOperation() {
  const modal = document.getElementById('customer-modal');
  const modalTitle = document.getElementById('modal-customer-name');
  const modalBody = document.getElementById('modal-body');
  
  modalTitle.textContent = 'Nouvelle Opération';
  
  let html = '<div class="modal-edit-form">';
  html += '<h3 class="modal-section-title">Informations de l\'Opération</h3>';
  html += '<form id="add-item-form">';
  
  html += '<div class="form-group">';
  html += '<label>ID Opération <span class="required">*</span></label>';
  html += '<input type="text" id="add-id" placeholder="Ex: OP-001" required>';
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Type <span class="required">*</span></label>';
  html += '<select id="add-type" required>';
  html += '<option value="">Sélectionner...</option>';
  html += '<option value="Mining">Mining</option>';
  html += '<option value="Maintenance">Maintenance</option>';
  html += '<option value="Test">Test</option>';
  html += '</select>';
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Hashrate <span class="required">*</span></label>';
  html += '<input type="text" id="add-hashrate" placeholder="Ex: 12.5 TH/s" required>';
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Statut <span class="required">*</span></label>';
  html += '<select id="add-status" required>';
  html += '<option value="Actif" selected>Actif</option>';
  html += '<option value="En pause">En pause</option>';
  html += '<option value="Erreur">Erreur</option>';
  html += '</select>';
  html += '</div>';
  
  html += '<div class="form-actions">';
  html += '<button type="submit" class="modal-action-btn primary">Créer l\'Opération</button>';
  html += '<button type="button" class="modal-action-btn secondary" id="cancel-add-btn">Annuler</button>';
  html += '</div>';
  html += '</form>';
  html += '</div>';
  
  modalBody.innerHTML = html;
  
  document.getElementById('add-item-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0] + ' ' + now.toTimeString().split(' ')[0].substring(0, 5);
    const newItem = [
      document.getElementById('add-id').value,
      document.getElementById('add-type').value,
      document.getElementById('add-status').value,
      document.getElementById('add-hashrate').value,
      dateStr
    ];
    saveNewItem(newItem, 'cockpit');
  });
  
  document.getElementById('cancel-add-btn').addEventListener('click', closeModal);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Ajouter une analyse (Profitability Index)
function handleAddAnalysis() {
  const modal = document.getElementById('customer-modal');
  const modalTitle = document.getElementById('modal-customer-name');
  const modalBody = document.getElementById('modal-body');
  
  modalTitle.textContent = 'Nouvelle Analyse';
  
  let html = '<div class="modal-edit-form">';
  html += '<h3 class="modal-section-title">Informations de l\'Analyse</h3>';
  html += '<form id="add-item-form">';
  
  html += '<div class="form-group">';
  html += '<label>Période <span class="required">*</span></label>';
  html += '<input type="text" id="add-period" placeholder="Ex: Jan 2025" required>';
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Revenus <span class="required">*</span></label>';
  html += '<input type="text" id="add-revenue" placeholder="Ex: €125,430" required>';
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Coûts <span class="required">*</span></label>';
  html += '<input type="text" id="add-costs" placeholder="Ex: €45,230" required>';
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Marge <span class="required">*</span></label>';
  html += '<input type="text" id="add-margin" placeholder="Ex: €80,200" required>';
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Indice <span class="required">*</span></label>';
  html += '<input type="text" id="add-index" placeholder="Ex: 1.85" required>';
  html += '</div>';
  
  html += '<div class="form-actions">';
  html += '<button type="submit" class="modal-action-btn primary">Créer l\'Analyse</button>';
  html += '<button type="button" class="modal-action-btn secondary" id="cancel-add-btn">Annuler</button>';
  html += '</div>';
  html += '</form>';
  html += '</div>';
  
  modalBody.innerHTML = html;
  
  document.getElementById('add-item-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newItem = [
      document.getElementById('add-period').value,
      document.getElementById('add-revenue').value,
      document.getElementById('add-costs').value,
      document.getElementById('add-margin').value,
      document.getElementById('add-index').value
    ];
    saveNewItem(newItem, 'dynamic');
  });
  
  document.getElementById('cancel-add-btn').addEventListener('click', closeModal);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Ajouter un batch (Mining Batches)
function handleAddBatch() {
  const modal = document.getElementById('customer-modal');
  const modalTitle = document.getElementById('modal-customer-name');
  const modalBody = document.getElementById('modal-body');
  
  modalTitle.textContent = 'Nouveau Batch';
  
  let html = '<div class="modal-edit-form">';
  html += '<h3 class="modal-section-title">Informations du Batch</h3>';
  html += '<form id="add-item-form">';
  
  html += '<div class="form-group">';
  html += '<label>ID Batch <span class="required">*</span></label>';
  html += '<input type="text" id="add-id" placeholder="Ex: BATCH-001" required>';
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Type <span class="required">*</span></label>';
  html += '<select id="add-type" required>';
  html += '<option value="">Sélectionner...</option>';
  html += '<option value="Bitcoin">Bitcoin</option>';
  html += '<option value="Ethereum">Ethereum</option>';
  html += '<option value="Litecoin">Litecoin</option>';
  html += '</select>';
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Hashrate <span class="required">*</span></label>';
  html += '<input type="text" id="add-hashrate" placeholder="Ex: 2.5 TH/s" required>';
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Statut <span class="required">*</span></label>';
  html += '<select id="add-status" required>';
  html += '<option value="Actif" selected>Actif</option>';
  html += '<option value="En cours">En cours</option>';
  html += '<option value="Terminé">Terminé</option>';
  html += '</select>';
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Date Début <span class="required">*</span></label>';
  html += '<input type="date" id="add-date" required>';
  html += '</div>';
  
  html += '<div class="form-actions">';
  html += '<button type="submit" class="modal-action-btn primary">Créer le Batch</button>';
  html += '<button type="button" class="modal-action-btn secondary" id="cancel-add-btn">Annuler</button>';
  html += '</div>';
  html += '</form>';
  html += '</div>';
  
  modalBody.innerHTML = html;
  
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('add-date').value = today;
  
  document.getElementById('add-item-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newItem = [
      document.getElementById('add-id').value,
      document.getElementById('add-type').value,
      document.getElementById('add-hashrate').value,
      document.getElementById('add-status').value,
      document.getElementById('add-date').value
    ];
    saveNewItem(newItem, 'institutionnel');
  });
  
  document.getElementById('cancel-add-btn').addEventListener('click', closeModal);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ============================================
// AJOUTER UN CLIENT (Spécifique)
// ============================================
function handleAddCustomer() {
  const modal = document.getElementById('customer-modal');
  const modalTitle = document.getElementById('modal-customer-name');
  const modalBody = document.getElementById('modal-body');
  
  // Mise à jour du titre
  modalTitle.textContent = 'Nouveau Client';
  
  // Créer le formulaire d'ajout
  let html = '<div class="modal-edit-form">';
  html += '<h3 class="modal-section-title">Informations du Client</h3>';
  html += '<form id="add-client-form">';
  
  html += '<div class="form-group">';
  html += '<label>Nom du Client <span class="required">*</span></label>';
  html += '<input type="text" id="add-name" placeholder="Ex: TechCorp Inc." required>';
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Type de Client <span class="required">*</span></label>';
  html += '<select id="add-type" required>';
  html += '<option value="">Sélectionner...</option>';
  html += '<option value="Enterprise">Enterprise</option>';
  html += '<option value="Premium">Premium</option>';
  html += '<option value="Standard">Standard</option>';
  html += '</select>';
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Type de Contrat <span class="required">*</span></label>';
  html += '<select id="add-contract" required>';
  html += '<option value="">Sélectionner...</option>';
  html += '<option value="Annuel">Annuel</option>';
  html += '<option value="Trimestriel">Trimestriel</option>';
  html += '<option value="Mensuel">Mensuel</option>';
  html += '</select>';
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Revenus <span class="required">*</span></label>';
  html += '<input type="text" id="add-revenue" placeholder="Ex: €125,000" required>';
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Hashrate <span class="required">*</span></label>';
  html += '<input type="text" id="add-hashrate" placeholder="Ex: 45.2 TH/s" required>';
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Date d\'Inscription <span class="required">*</span></label>';
  html += '<input type="date" id="add-date" required>';
  html += '</div>';
  
  html += '<div class="form-group">';
  html += '<label>Statut <span class="required">*</span></label>';
  html += '<select id="add-status" required>';
  html += '<option value="Actif" selected>Actif</option>';
  html += '<option value="Inactif">Inactif</option>';
  html += '<option value="Suspendu">Suspendu</option>';
  html += '</select>';
  html += '</div>';
  
  html += '<div class="form-actions">';
  html += '<button type="submit" class="modal-action-btn primary">Créer le Client</button>';
  html += '<button type="button" class="modal-action-btn secondary" id="cancel-add-btn">Annuler</button>';
  html += '</div>';
  
  html += '</form>';
  html += '</div>';
  
  modalBody.innerHTML = html;
  
  // Définir la date d'aujourd'hui par défaut
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('add-date').value = today;
  
  // Gestionnaire de soumission du formulaire
  document.getElementById('add-client-form').addEventListener('submit', (e) => {
    e.preventDefault();
    saveNewClient();
  });
  
  // Gestionnaire d'annulation
  document.getElementById('cancel-add-btn').addEventListener('click', () => {
    closeModal();
  });
  
  // Afficher la modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Sauvegarder un nouvel élément (générique)
function saveNewItem(newItem, pageStyle) {
  // Ajouter à la liste
  currentTableData.push(newItem);
  
  // Mettre à jour les données de la page
  if (pageData[pageStyle] && pageData[pageStyle].table) {
    pageData[pageStyle].table.data = currentTableData;
  }
  
  // Réafficher le tableau
  renderTable(filteredTableData || null);
  
  // Fermer la modal
  closeModal();
  
  // Afficher notification de succès
  const itemNames = {
    'premium': 'Activité',
    'cockpit': 'Opération',
    'dynamic': 'Analyse',
    'institutionnel': 'Batch',
    'customers': 'Client'
  };
  showNotification(`${itemNames[pageStyle] || 'Élément'} ajouté avec succès`, 'success');
}

// Sauvegarder le nouveau client (spécifique)
function saveNewClient() {
  const name = document.getElementById('add-name').value.trim();
  const type = document.getElementById('add-type').value;
  const contract = document.getElementById('add-contract').value;
  const revenue = document.getElementById('add-revenue').value.trim();
  const hashrate = document.getElementById('add-hashrate').value.trim();
  const date = document.getElementById('add-date').value;
  const status = document.getElementById('add-status').value;
  
  // Validation
  if (!name || !type || !contract || !revenue || !hashrate || !date || !status) {
    showNotification('Veuillez remplir tous les champs obligatoires', 'error');
    return;
  }
  
  // Formater la date
  const formattedDate = formatDateForTable(date);
  
  // Créer le nouveau client
  const newClient = [name, type, contract, revenue, hashrate, formattedDate, status];
  
  // Ajouter à la liste
  currentTableData.push(newClient);
  
  // Mettre à jour les données de la page
  if (pageData.customers) {
    pageData.customers.table.data = currentTableData;
  }
  
  // Réafficher le tableau
  renderTable(filteredTableData || null);
  
  // Fermer la modal
  closeModal();
  
  // Afficher notification de succès
  showNotification(`Client "${name}" ajouté avec succès`, 'success');
}

// Formater la date pour le tableau (YYYY-MM-DD)
function formatDateForTable(dateString) {
  return dateString;
}

// Formatage de la date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

// Fermeture de la modal
function closeModal() {
  const modal = document.getElementById('customer-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Gestionnaires d'événements pour la modal
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('customer-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const overlay = modal.querySelector('.modal-overlay');
  
  // Fermeture au clic sur le bouton X
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  
  // Fermeture au clic sur l'overlay
  if (overlay) {
    overlay.addEventListener('click', closeModal);
  }
  
  // Fermeture avec la touche Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modal.classList.contains('active')) {
        closeModal();
      }
      // Fermer aussi le menu Settings si ouvert
      closeSettingsMenu();
    }
  });
});

// ============================================
// GESTION UTILISATEUR
// ============================================
let currentUser = {
  name: 'Adrien Debug',
  email: 'adrien@meeneo.io',
  initials: 'AD',
  status: 'active',
  premium: true
};

// Initialisation du menu utilisateur
function initUserMenu() {
  const userProfile = document.getElementById('user-profile');
  const userMenu = document.getElementById('user-menu');
  const userMenuToggle = document.getElementById('user-menu-toggle');
  
  if (userProfile && userMenu && userMenuToggle) {
    // Toggle du menu
    userProfile.addEventListener('click', (e) => {
      e.stopPropagation();
      userProfile.classList.toggle('active');
      userMenu.classList.toggle('active');
    });
    
    // Fermer le menu en cliquant ailleurs
    document.addEventListener('click', (e) => {
      if (!userProfile.contains(e.target) && !userMenu.contains(e.target)) {
        userProfile.classList.remove('active');
        userMenu.classList.remove('active');
      }
    });
    
    // Gestionnaires d'événements pour les items du menu
    document.getElementById('view-profile')?.addEventListener('click', (e) => {
      e.preventDefault();
      showUserProfile();
    });
    
    document.getElementById('open-settings-from-menu')?.addEventListener('click', (e) => {
      e.preventDefault();
      openSettingsMenu();
      closeUserMenu();
    });
    
    document.getElementById('subscription')?.addEventListener('click', (e) => {
      e.preventDefault();
      showSubscriptionInfo();
      closeUserMenu();
    });
    
    document.getElementById('logout')?.addEventListener('click', (e) => {
      e.preventDefault();
      handleLogout();
      closeUserMenu();
    });
  }
}

// Fermer le menu utilisateur
function closeUserMenu() {
  const userProfile = document.getElementById('user-profile');
  const userMenu = document.getElementById('user-menu');
  if (userProfile && userMenu) {
    userProfile.classList.remove('active');
    userMenu.classList.remove('active');
  }
}

// Afficher le profil utilisateur
function showUserProfile() {
  const modal = document.getElementById('customer-modal');
  const modalTitle = document.getElementById('modal-customer-name');
  const modalBody = document.getElementById('modal-body');
  
  modalTitle.textContent = 'Mon Profil';
  
  let html = '<div class="modal-details">';
  html += '<div class="modal-section">';
  html += '<h3 class="modal-section-title">Informations Personnelles</h3>';
  html += '<div class="modal-info-grid">';
  html += `
    <div class="modal-info-item">
      <span class="modal-info-label">Nom</span>
      <span class="modal-info-value">${currentUser.name}</span>
    </div>
    <div class="modal-info-item">
      <span class="modal-info-label">Email</span>
      <span class="modal-info-value">${currentUser.email}</span>
    </div>
    <div class="modal-info-item">
      <span class="modal-info-label">Statut</span>
      <span class="modal-info-value">
        <span class="status-badge status-active">Actif</span>
        ${currentUser.premium ? '<span class="status-badge status-premium">Premium</span>' : ''}
      </span>
    </div>
    <div class="modal-info-item">
      <span class="modal-info-label">Membre depuis</span>
      <span class="modal-info-value">Janvier 2024</span>
    </div>
  `;
  html += '</div>';
  html += '</div>';
  
  html += '<div class="modal-section">';
  html += '<h3 class="modal-section-title">Abonnement</h3>';
  html += '<div class="modal-info-grid">';
  html += `
    <div class="modal-info-item">
      <span class="modal-info-label">Type d\'abonnement</span>
      <span class="modal-info-value">${currentUser.premium ? 'Premium' : 'Standard'}</span>
    </div>
    <div class="modal-info-item">
      <span class="modal-info-label">Date d\'expiration</span>
      <span class="modal-info-value">31 Décembre 2025</span>
    </div>
    <div class="modal-info-item">
      <span class="modal-info-label">Fonctionnalités</span>
      <span class="modal-info-value">Accès complet</span>
    </div>
  `;
  html += '</div>';
  html += '</div>';
  
  html += '<div class="modal-section">';
  html += '<h3 class="modal-section-title">Actions</h3>';
  html += '<div class="modal-actions">';
  html += '<button class="modal-action-btn primary" id="edit-profile-btn">Modifier le Profil</button>';
  html += '<button class="modal-action-btn secondary" id="change-password-btn">Changer le Mot de Passe</button>';
  html += '</div>';
  html += '</div>';
  
  html += '</div>';
  
  modalBody.innerHTML = html;
  
  // Event listeners
  document.getElementById('edit-profile-btn')?.addEventListener('click', () => {
    showNotification('Édition du profil - Fonctionnalité à venir', 'info');
  });
  
  document.getElementById('change-password-btn')?.addEventListener('click', () => {
    showNotification('Changement de mot de passe - Fonctionnalité à venir', 'info');
  });
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  closeUserMenu();
}

// Afficher les informations d'abonnement
function showSubscriptionInfo() {
  const modal = document.getElementById('customer-modal');
  const modalTitle = document.getElementById('modal-customer-name');
  const modalBody = document.getElementById('modal-body');
  
  modalTitle.textContent = 'Abonnement Premium';
  
  let html = '<div class="modal-details">';
  html += '<div class="modal-section">';
  html += '<h3 class="modal-section-title">Votre Abonnement</h3>';
  html += '<div class="modal-info-grid">';
  html += `
    <div class="modal-info-item">
      <span class="modal-info-label">Statut</span>
      <span class="modal-info-value">
        <span class="status-badge status-premium">Premium Actif</span>
      </span>
    </div>
    <div class="modal-info-item">
      <span class="modal-info-label">Date d\'activation</span>
      <span class="modal-info-value">1 Janvier 2024</span>
    </div>
    <div class="modal-info-item">
      <span class="modal-info-label">Date d\'expiration</span>
      <span class="modal-info-value">31 Décembre 2025</span>
    </div>
    <div class="modal-info-item">
      <span class="modal-info-label">Prix mensuel</span>
      <span class="modal-info-value">€99/mois</span>
    </div>
  `;
  html += '</div>';
  html += '</div>';
  
  html += '<div class="modal-section">';
  html += '<h3 class="modal-section-title">Avantages Premium</h3>';
  html += '<div class="premium-features">';
  html += '<div class="premium-feature">✓ Accès à toutes les fonctionnalités</div>';
  html += '<div class="premium-feature">✓ Support prioritaire 24/7</div>';
  html += '<div class="premium-feature">✓ Analyses avancées</div>';
  html += '<div class="premium-feature">✓ Export de données illimité</div>';
  html += '<div class="premium-feature">✓ API access</div>';
  html += '</div>';
  html += '</div>';
  
  html += '<div class="modal-section">';
  html += '<h3 class="modal-section-title">Actions</h3>';
  html += '<div class="modal-actions">';
  html += '<button class="modal-action-btn primary" id="manage-subscription-btn">Gérer l\'Abonnement</button>';
  html += '<button class="modal-action-btn secondary" id="cancel-subscription-btn">Annuler l\'Abonnement</button>';
  html += '</div>';
  html += '</div>';
  
  html += '</div>';
  
  modalBody.innerHTML = html;
  
  document.getElementById('manage-subscription-btn')?.addEventListener('click', () => {
    showNotification('Gestion de l\'abonnement - Fonctionnalité à venir', 'info');
  });
  
  document.getElementById('cancel-subscription-btn')?.addEventListener('click', () => {
    if (confirm('Êtes-vous sûr de vouloir annuler votre abonnement Premium ?')) {
      showNotification('Abonnement annulé avec succès', 'success');
      setTimeout(() => closeModal(), 1500);
    }
  });
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Déconnexion
function handleLogout() {
  if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
    showNotification('Déconnexion en cours...', 'info');
    setTimeout(() => {
      showNotification('Vous avez été déconnecté', 'success');
    }, 1000);
  }
}

// Mise à jour de l'affichage utilisateur
function updateUserDisplay() {
  const userNameEl = document.querySelector('.user-name');
  const userMenuNameEl = document.querySelector('.user-menu-name');
  const userMenuEmailEl = document.querySelector('.user-menu-email');
  const userInitialsEls = document.querySelectorAll('.user-initials');
  
  if (userNameEl) userNameEl.textContent = currentUser.name;
  if (userMenuNameEl) userMenuNameEl.textContent = currentUser.name;
  if (userMenuEmailEl) userMenuEmailEl.textContent = currentUser.email;
  userInitialsEls.forEach(el => {
    el.textContent = currentUser.initials;
  });
  
  // Mettre à jour les badges de statut
  const statusBadges = document.querySelectorAll('.user-status, .user-menu-status');
  statusBadges.forEach(container => {
    container.innerHTML = `
      <span class="status-badge status-active">Actif</span>
      ${currentUser.premium ? '<span class="status-badge status-premium">Premium</span>' : ''}
    `;
  });
}

// ============================================
// GESTION DU MENU SETTINGS
// ============================================
function initSettingsMenu() {
  const settingsBtn = document.getElementById('settings-btn');
  const settingsMenu = document.getElementById('settings-menu');
  
  if (settingsBtn && settingsMenu) {
    // Toggle du menu au clic sur le bouton
    settingsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      settingsBtn.classList.toggle('active');
      settingsMenu.classList.toggle('active');
    });
    
    // Fermer le menu en cliquant ailleurs
    document.addEventListener('click', (e) => {
      if (!settingsBtn.contains(e.target) && !settingsMenu.contains(e.target)) {
        settingsBtn.classList.remove('active');
        settingsMenu.classList.remove('active');
      }
    });
    
    // Gestionnaires d'événements pour les actions d'ajout
    const actionButtons = settingsMenu.querySelectorAll('.settings-action-btn');
    actionButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const action = btn.getAttribute('data-action');
        handleSettingsAction(action);
      });
    });
  }
}

// Ouvrir le menu Settings
function openSettingsMenu() {
  const settingsBtn = document.getElementById('settings-btn');
  const settingsMenu = document.getElementById('settings-menu');
  
  if (settingsBtn && settingsMenu) {
    settingsBtn.classList.add('active');
    settingsMenu.classList.add('active');
  }
}

// Fermer le menu Settings
function closeSettingsMenu() {
  const settingsBtn = document.getElementById('settings-btn');
  const settingsMenu = document.getElementById('settings-menu');
  
  if (settingsBtn && settingsMenu) {
    settingsBtn.classList.remove('active');
    settingsMenu.classList.remove('active');
  }
}

// Gérer les actions du menu Settings
function handleSettingsAction(action) {
  closeSettingsMenu();
  
  switch(action) {
    case 'add-activity':
      handleAddActivity();
      break;
    case 'add-operation':
      handleAddOperation();
      break;
    case 'add-analysis':
      handleAddAnalysis();
      break;
    case 'add-batch':
      handleAddBatch();
      break;
    case 'add-customer':
      handleAddCustomer();
      break;
    default:
      showNotification('Action non reconnue', 'info');
  }
}

// ============================================
// INITIALISATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initStyle();
  initUserMenu();
  initSettingsMenu();
  updateUserDisplay();
  updatePageContent(currentStyle);
  updateCharts();
  animateMetrics();
});


