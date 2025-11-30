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
  if (currentStyle === 'dynamic') {
    // Animation Dynamic avec stagger
    gsap.to(metricBoxes, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    });
  } else {
    // Animation Premium/Institutionnel plus subtile
    gsap.to(metricBoxes, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: 'power1.out'
    });
  }
  
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
let hashrateChart = null;
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
        primary: '#F56A3B',
        secondary: '#4A90E2',
        tertiary: '#50C878',
        quaternary: '#9B59B6',
        accent: '#F56A3B',
        grid: '#E8E8E8'
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

function getHashrateData() {
  const labels = [];
  const data = [];
  const now = new Date();
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    labels.push(date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' }));
    data.push(Math.random() * 0.5 + 2.0);
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
          backgroundColor: currentStyle === 'dynamic' 
            ? `rgba(245, 106, 59, 0.2)` 
            : `rgba(0, 0, 0, 0.05)`,
          borderWidth: currentStyle === 'dynamic' ? 3 : 2,
          fill: true,
          tension: 0.4,
          pointRadius: currentStyle === 'dynamic' ? 5 : 4,
          pointHoverRadius: 7,
          pointBackgroundColor: colors.primary,
          pointBorderColor: '#FFFFFF',
          pointBorderWidth: 2
        }]
      },
      options: {
        ...commonConfig,
        animation: {
          duration: currentStyle === 'dynamic' ? 1500 : 1000,
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
            currentStyle === 'dynamic' ? colors.quaternary : colors.secondary,
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
          duration: currentStyle === 'dynamic' ? 1500 : 1000
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
  
  // Graphique Hashrate
  const hashrateCtx = document.getElementById('hashrate-chart');
  const hashrateData = getHashrateData();
  
  if (hashrateChart) {
    hashrateChart.destroy();
  }
  
  hashrateChart = new Chart(hashrateCtx, {
    ...getChartConfig('line', hashrateData, colors),
    data: {
      labels: hashrateData.labels,
      datasets: [{
        label: 'Hashrate (TH/s)',
        data: hashrateData.data,
        borderColor: currentStyle === 'dynamic' ? colors.secondary : colors.primary,
        backgroundColor: currentStyle === 'dynamic' 
          ? `rgba(74, 144, 226, 0.15)` 
          : `rgba(0, 0, 0, 0.05)`,
        borderWidth: currentStyle === 'dynamic' ? 3 : 2,
        fill: true,
        tension: 0.4,
        pointRadius: currentStyle === 'dynamic' ? 5 : 4,
        pointHoverRadius: 7,
        pointBackgroundColor: currentStyle === 'dynamic' ? colors.secondary : colors.primary,
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 2
      }]
    }
  });
  
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
// INITIALISATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initStyle();
  updateCharts();
  animateMetrics();
});

