// Sortable
const area = document.getElementById("sortableArea");
const indicators = area.querySelectorAll(".indicator");

indicators.forEach(card => {
  card.addEventListener("click", () => {
    indicators.forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
  });
});

new Sortable(area, {
  animation: 150,
  ghostClass: "dragging",
});

// Gráfico de Vendas
const vendasCtx = document.getElementById('vendasChart').getContext('2d');
new Chart(vendasCtx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
      label: 'Vendas',
      data: [1200, 1400, 1800, 1500, 2000, 2300],
      backgroundColor: '#a2d2ff'
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } }
  }
});

// Gráfico de Leads
const leadsCtx = document.getElementById('leadsChart').getContext('2d');
new Chart(leadsCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
      label: 'Leads Tocados',
      data: [900, 1000, 1150, 1250, 1400, 1600],
      borderColor: '#2a9d8f',
      backgroundColor: 'rgba(42, 157, 143, 0.1)',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } }
  }
});

document.getElementById('toggleSidebar').addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed');
  sidebar.classList.toggle('expanded');

  const icon = document.querySelector('#toggleSidebar i');
  icon.classList.toggle('bi-chevron-left');
  icon.classList.toggle('bi-chevron-right');
});