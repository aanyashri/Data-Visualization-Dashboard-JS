
const barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [{
        label: "Sales (in USD)",
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: [650, 590, 800, 810, 560, 550]
    }]
};

const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [{
        label: "Users",
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        fill: false,
        data: [150, 200, 300, 250]
    }]
};

const pieData = {
    labels: ["Electronics", "Fashion", "Groceries", "Books"],
    datasets: [{
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        data: [35, 25, 20, 20]
    }]
};


const barChartCtx = document.getElementById("barChart").getContext("2d");
new Chart(barChartCtx, {
    type: "bar",
    data: barData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


const lineChartCtx = document.getElementById("lineChart").getContext("2d");
new Chart(lineChartCtx, {
    type: "line",
    data: lineData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})
const pieChartCtx = document.getElementById("pieChart").getContext("2d");
new Chart(pieChartCtx, {
    type: "pie",
    data: pieData,
    options: {
        responsive: true
    }
});
