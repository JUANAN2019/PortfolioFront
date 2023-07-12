
function cambiaEs(){

let balsa=document.getElementById('barco') 
console.log(balsa.position)
//balsa.getAttribute('position');
let posicion="5 0 100"
if(balsa===posicion){
    window.location.href="./playa";
}}
export default cambiaEs
