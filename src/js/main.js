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
  <td class="text-center">{{cijena}}</td>
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
    iznos: fCurrency(d.cijena * d.prodajno)
  })
).join(" ");
document.getElementById("stanovi-table-body").innerHTML = tableBody;

function fCurrency(num) {
  return num.toLocaleString('hr', { minimumFractionDigits:2 });
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

const modalTemplate = Handlebars.compile(`
      <div class="modal fade" tabindex="-1" id="modal-{{code}}" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{name}}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="images/stan-{{code}}.png" width="100%">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
          </div>
        </div>
      </div>
`);
const modals = data.map(d => modalTemplate({code: code(d.stan), name: d.stan})).join(" ");
document.getElementById("stanovi-modals").innerHTML = modals;



// const myModal = document.getElementById('modal')

// myModal.addEventListener('shown.bs.modal', (e) => {
//   console.log(this);
//   console.log(e.relatedTarget.innerHTML);
//   const stan = e.relatedTarget.innerHTML;
//   document.getElementById("modal-title").innerHTML = stan;
// })


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))
