import '@fortawesome/fontawesome-free/js/all.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.querySelectorAll('.add-to-cart-btn').forEach(item=>{
    item.addEventListener("click",()=>{
        alert("أضيف المنتج إلى عربة الشراء .")
    })
})
var d = new Date();
var year = d.getFullYear();
document.getElementById("year").innerHTML = year+"&copy;";

