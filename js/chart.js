
 let peroid ="day"
 const day = document.getElementById("day")
  const month = document.getElementById("month")
   const year = document.getElementById("year")
const ctx = document.getElementById('myChart');

const myChart =new Chart(ctx, {
  type: "line",
  data: {
    labels: [],
    datasets: [{
      fill: true,
      tension: 0.4, 
      backgroundColor: "#d4af3722",
      borderColor: "#D4AF37",
      data: [],
      pointRadius: 0,
      pointHoverRadius: 0,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { 
      legend: { 
        display: false
      }
    },
    scales: {
      y: {                       
       
      }
    }
  }
});

function getdata(peroid){
  const chartdata = JSON.parse(localStorage.getItem("dates")) 
  let xValue=[];
 if(peroid==="day") {
 xValue=chartdata.map(item => {
      return `${item.hours.toString().padStart(2, '0')}:${item.minuts.toString().padStart(2, '0')}`;
  });
 }
 else if(peroid==="month"){
  xValue = chartdata.map(item => `${item.month}/${item.day}`);
 }
 else if(peroid==="year"){
  xValue=chartdata.map(item => {
      return `${item.year}`;})
 }
  
  
  const yValues = chartdata.map(value=>value.price)
  myChart.data.labels=xValue;
  myChart.data.datasets[0].data=yValues
  myChart.update();
}
day.addEventListener("click",()=>{
    peroid="day"
    day.className="selected"
    month.classList.remove('selected');
    year.classList.remove('selected');
    getdata(peroid)
   })
   month.addEventListener("click",()=>{
    peroid="month"
    month.className="selected"
    day.classList.remove('selected');
    year.classList.remove('selected');
    getdata(peroid)
   })
   year.addEventListener("click",()=>{
    peroid="year"
    year.className="selected"
    day.classList.remove('selected');
    month.classList.remove('selected');
    getdata(peroid)
   })
getdata(peroid)
setInterval(() => {getdata(peroid);}, 100)
