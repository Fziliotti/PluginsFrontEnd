 window.onload = function () {

// PRIMEIRO GRAFICO

var chart1 = new CanvasJS.Chart("chartContainer1", {
  animationEnabled: true,
  theme: "light2", // "light1", "light2", "dark1", "dark2"
  title:{
    text: "Grafico de colunas"
  },
  data: [{        
    type: "column",  
    showInLegend: true, 
    legendMarkerColor: "grey",
    legendText: "MMbbl = one million barrels",
    dataPoints: [      
    { y: 300878, label: "Venezuela" },
    { y: 266455,  label: "Saudi" },
    { y: 169709,  label: "Canada" },
    { y: 158400,  label: "Iran" },
    { y: 142503,  label: "Iraq" },
    { y: 101500, label: "Kuwait" },
    { y: 97800,  label: "UAE" },
    { y: 80000,  label: "Russia" }
    ]
  }]
});
chart1.render();




// SEGUNDO GRAFICO
var chart2 = new CanvasJS.Chart("chartContainer2", {
  animationEnabled: true,
  title:{
    text: "Despesas do Mês"
  },
  axisY :{
    includeZero: false,
    prefix: "$"
  },
  toolTip: {
    shared: true
  },
  legend: {
    fontSize: 13
  },
  data: [{
    type: "splineArea",
    showInLegend: true,
    name: "Salaries",
    yValueFormatString: "$#,##0",
    xValueFormatString: "MMM YYYY",
    dataPoints: [
    { x: new Date(2018, 2), y: 30000 },
    { x: new Date(2018, 3), y: 35000 },
    { x: new Date(2018, 4), y: 30000 },
    { x: new Date(2018, 5), y: 30400 },
    { x: new Date(2018, 6), y: 20900 },
    { x: new Date(2018, 7), y: 31000 },
    { x: new Date(2018, 8), y: 30200 },
    { x: new Date(2018, 9), y: 30000 },
    { x: new Date(2018, 10), y: 33000 },
    { x: new Date(2018, 11), y: 38000 },
    { x: new Date(2019, 0),  y: 38900 },
    { x: new Date(2019, 1),  y: 39000 }
    ]
  },
  {
    type: "splineArea", 
    showInLegend: true,
    name: "Office Cost",
    yValueFormatString: "$#,##0",
    dataPoints: [
    { x: new Date(2018, 2), y: 20100 },
    { x: new Date(2018, 3), y: 16000 },
    { x: new Date(2018, 4), y: 14000 },
    { x: new Date(2018, 5), y: 18000 },
    { x: new Date(2018, 6), y: 18000 },
    { x: new Date(2018, 7), y: 21000 },
    { x: new Date(2018, 8), y: 22000 },
    { x: new Date(2018, 9), y: 25000 },
    { x: new Date(2018, 10), y: 23000 },
    { x: new Date(2018, 11), y: 25000 },
    { x: new Date(2019, 0), y: 26000 },
    { x: new Date(2019, 1), y: 25000 }
    ]
  },
  {
    type: "splineArea", 
    showInLegend: true,
    name: "Entertainment",
    yValueFormatString: "$#,##0",     
    dataPoints: [
    { x: new Date(2018, 2), y: 10100 },
    { x: new Date(2018, 3), y: 6000 },
    { x: new Date(2018, 4), y: 3400 },
    { x: new Date(2018, 5), y: 4000 },
    { x: new Date(2018, 6), y: 9000 },
    { x: new Date(2018, 7), y: 3900 },
    { x: new Date(2018, 8), y: 4200 },
    { x: new Date(2018, 9), y: 5000 },
    { x: new Date(2018, 10), y: 14300 },
    { x: new Date(2018, 11), y: 12300 },
    { x: new Date(2019, 0), y: 8300 },
    { x: new Date(2019, 1), y: 6300 }
    ]
  },
  {
    type: "splineArea", 
    showInLegend: true,
    yValueFormatString: "$#,##0",      
    name: "Maintenance",
    dataPoints: [
    { x: new Date(2018, 2), y: 1700 },
    { x: new Date(2018, 3), y: 2600 },
    { x: new Date(2018, 4), y: 1000 },
    { x: new Date(2018, 5), y: 1400 },
    { x: new Date(2018, 6), y: 900 },
    { x: new Date(2018, 7), y: 1000 },
    { x: new Date(2018, 8), y: 1200 },
    { x: new Date(2018, 9), y: 5000 },
    { x: new Date(2018, 10), y: 1300 },
    { x: new Date(2018, 11), y: 2300 },
    { x: new Date(2019, 0), y: 2800 },
    { x: new Date(2019, 1), y: 1300 }
    ]
  }]
});
chart2.render();

}