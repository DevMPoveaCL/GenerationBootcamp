let reloj = () => {
    let fecha = new Date();//trae la feccha actual 
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}
setInterval(reloj,1000);