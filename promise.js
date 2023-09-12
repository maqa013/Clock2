











 const paraqraph = document.querySelector('.clock')




 setInterval(() =>{
    let date = new Date()
    
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()




seconds = seconds < 10 ? "0" + seconds : seconds;
minutes = minutes < 10 ? "0" + minutes : minutes;
hours = hours < 10 ? "0" + hours : hours;



     paraqraph.innerHTML = `${hours } : ${minutes } : ${seconds }`
    
 },1000)






