// Import our custom CSS
import '../scss/styles.scss';


// Import only the Bootstrap components we need
import { Util, Dropdown, Offcanvas, Popover, Tooltip } from 'bootstrap';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })


const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));


import data from "./apartments.js"



const rowTemplate = Handlebars.compile(`
<tr>
  <td class="text-nowrap">
    <a href="#" cla ss="link-danger" data-bs-toggle="modal" data-bs-target="#modal-{{code}}">
      {{stan}}
    </a>
  </td>
  <td class="text-center">{{kat}}</td>

  <td class="text-center">{{soba}}</td>
  <td class="text-center">{{prodajno}}</td>
  <td class="text-center">{{iznos}}</td>
  <td class="text-center">&nbsp</td>

  <td class="text-center">{{sobe}}</td>
  <td class="text-center">{{boravak}}</td>
  <td class="text-center">{{kuhinja}}</td>
  <td class="text-center">{{kupaonica}}</td>

  <td class="text-center">{{loggia}}</td>
  <td class="text-center">{{terasa}}</td>
  <td class="text-center">{{vrt}}</td>

  <td class="text-center">{{ukupno}}</td>
  <td class="text-center">{{prodajno}}</td>
</tr>
`);

const tableBody = data.map(d =>
  rowTemplate({
    code: code(d.stan),
    stan: d.stan,
    kat: d.kat == 0 ? "PR" : d.kat,
    ulaz: d.ulaz,
    soba: d.soba.length,
    boravak: fCurrency(d.boravak),
    kuhinja: fCurrency(d.kuhinja),
    sobe: fAreas(d.soba),
    kupaonica: fAreas(d.kupaonica),
    prodajno: fCurrency(d.prodajno),
    loggia: fAreas(d.loggia),
    terasa: fAreas(d.terasa),
    vrt: fAreas(d.vrt),
    ukupno: fCurrency(d.ukupno),
    cijena: fCurrency(d.cijena),
    iznos: fCurrency(d.cijena * d.prodajno, 0)
  })
).join(" ");
document.getElementById("stanovi-table-body").innerHTML = tableBody;

function fCurrency(num, digits) {
  digits = digits === undefined ? 2 : digits;
  return num.toLocaleString('hr', { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

function fAreas(a) {
  if (!a) {
    return "-";
  }
  if (!Array.isArray(a)) {
    return fCurrency(a);
  }
  if (a.length == 1) {
    return fCurrency(a[0]);
  }
  return a.map(e => fCurrency(e)).join(" | ");
}

function code(stan) {
  return stan.replace(" ", "-").toLowerCase()
}


const modalTemplate = require("./apartment.hbs");

const modals = data.map(d => modalTemplate({
  code: code(d.stan),
  name: d.stan,
  kat: d.kat == 0 ? "PRIZEMLJE" : d.kat + ". KAT",
  povrsina: fCurrency(d.prodajno),
})).join(" ");
document.getElementById("stanovi-modals").innerHTML = modals;


// init tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))
