import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'
import '@fortawesome/fontawesome-free/js/all.min.js'
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
