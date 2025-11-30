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
    styleButtons.forEach(btn => btn.classList.remove('active'));
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
          borderColor: colors.primary,
          backgroundColor: `rgba(0, 0, 0, 0.05)`,
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 7,
          pointBackgroundColor: colors.primary,
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
      headers: ['Client', 'Type', 'Contrat', 'Revenus', 'Statut'],
      filters: ['Tous', 'Premium', 'Standard', 'Enterprise'],
      data: [
        ['TechCorp Inc.', 'Enterprise', 'Annuel', '€125,000', 'Actif'],
        ['CryptoMining Ltd', 'Premium', 'Mensuel', '€45,200', 'Actif'],
        ['BlockChain Pro', 'Standard', 'Mensuel', '€18,500', 'Actif'],
        ['Digital Assets', 'Premium', 'Trimestriel', '€38,900', 'Actif'],
        ['Mining Solutions', 'Enterprise', 'Annuel', '€98,300', 'Actif']
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
  metricBoxes.forEach((box, index) => {
    if (index < metrics.length) {
      const metric = metrics[index];
      box.querySelector('.metric-label').textContent = metric.label;
      box.querySelector('.metric-value').textContent = metric.value;
      
      const changeElement = box.querySelector('.metric-change');
      changeElement.className = `metric-change ${metric.positive ? 'positive' : 'negative'}`;
      changeElement.querySelector('.change-value').textContent = metric.change;
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
  document.getElementById('table-title').textContent = tableData.title;
  
  // Mise à jour des headers
  const headersRow = document.getElementById('table-headers');
  headersRow.innerHTML = '';
  tableData.headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headersRow.appendChild(th);
  });
  
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
  
  pageData.forEach(row => {
    const tr = document.createElement('tr');
    row.forEach(cell => {
      const td = document.createElement('td');
      td.textContent = cell;
      tr.appendChild(td);
    });
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
// INITIALISATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initStyle();
  updatePageContent(currentStyle);
  updateCharts();
  animateMetrics();
});


