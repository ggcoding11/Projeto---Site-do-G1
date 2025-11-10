const canvas = document.getElementById("graficoEconomia").getContext("2d");

const dados = {
  labels: ["11h", "12h", "13h", "14h", "15h", "16h", "17h"],
  datasets: [
    {
      label: "IBOVESPA",
      data: [147.192, 147.05, 146.85, 149.7, 149.55, 146.4, 146.25],
      borderColor: "rgba(20, 197, 94, 0.81)",
      backgroundColor: "rgba(20, 197, 94, 0.81)",
      fill: true,
    },
  ],
};

const tabela = new Chart(canvas, {
  type: "line",
  data: dados,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "IBOVESPA (Variação em tempo real)",
        align: "start",
        font: {
          size: 14,
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
      legend: {
        display: false,
      },
    },
  },
});
