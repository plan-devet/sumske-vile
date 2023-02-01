// Import our custom CSS
import '../scss/styles.scss';

// Import only the Bootstrap components we need
import { Util, Dropdown, Offcanvas, Popover } from 'bootstrap';

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
  <td class="text-nowrap">{{stan}}</td>
  <td class="text-center">{{kat}}</td>

  <td class="text-center">{{soba}}</td>
  <td class="text-center">{{prodajno}}</td>
  <td class="text-center">{{cijena}}</td>
  <td class="text-center">{{iznos}}</td>
  <td class="text-center">&nbsp</td>

  <td class="text-center">{{boravak}}</td>
  <td class="text-center">{{kuhinja}}</td>
  <td class="text-center">{{sobe}}</td>
  <td class="text-center">{{kupaonica}}</td>

  <td class="text-center">{{loggia}}</td>
  <td class="text-center">{{terasa}}</td>
  <td class="text-center">{{vrt}}</td>

  <td class="text-center">{{ukupno}}</td>
  <td class="text-center">{{prodajno}}</td>
</tr>
`);

const content = data.map(d =>
  rowTemplate({
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

document.getElementById("stanovi-table-body").innerHTML = content;

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
