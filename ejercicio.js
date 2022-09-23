 function BusquedaIp(){
    const ip = document.getElementById('ipIntroducida').value;
    fetch("https://ipapi.co/" + ip + "/json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("textoIpDevuelto").innerHTML = JSON.stringify(data);
  });
 }