$(".linkk-dash").click(function () {
    $(this).next('div').slideToggle(700)
})
$(".linkk-dassh").click(function () {
    $(this).next('ul').slideToggle(700)
})
$(".moon").click(function(){
    $(".moon").hide();
    $(".sun").show();
    $("body").addClass("dark")
})
$(".sun").click(function(){
    $(".moon").show();
    $(".sun").hide();
    $("body").removeClass("dark")
})



const hValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const zValues = [55, 49, 44, 24, 15];
const barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: hValues,
    datasets: [{
      backgroundColor: barColors,
      data: zValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});



const xValues = [50,60,70,80,90,100,110,120,130,140,150];
const yValues = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("myCharts", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});