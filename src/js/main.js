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



const data = [
  {
    stan: "A 1-1",
    kat: 0,
    ulaz: "A",
    kuhinja: 8,
    boravak: 26.7,
    soba: [7.8, 12.7],
    kupaonica: [4.30],
    terasa: [37.8],
    vrt: [32.60],
    prodajno: 75.51,
    ukupno: 100.6
  },

  {
    stan: "A 1-2",
    kat: 0,
    ulaz: "A",
    kuhinja: 6.5,
    boravak: 31,
    soba: [9.2, 12.3],
    kupaonica: [4.4],
    terasa: [41.60],
    vrt: [22.6],
    prodajno: 81.23,
    ukupno: 132.95
  },

  {
    stan: "B 1-1",
    kat: 0,
    ulaz: "B",
    kuhinja: 7.4,
    boravak: 23.4,
    soba: [9.2, 11.4],
    kupaonica: [4.4],
    loggia: [7.1],
    terasa: [17.1],
    vrt: [9.4],
    prodajno: 71.94,
    ukupno: 95
  },

  {
    stan: "B 1-2",
    kat: 0,
    ulaz: "B",
    kuhinja: 6.5,
    boravak: 31.4,
    soba: [9.2, 11.4],
    kupaonica: [4.5],
    terasa: [41.6],
    vrt: [11],
    prodajno: 79.25,
    ukupno: 120.35
  },

  {
    stan: "C 1-1",
    kat: 0,
    ulaz: "C",
    kuhinja: 8,
    boravak: 26.7,
    soba: [7.8, 12.7],
    kupaonica: [4.5],
    terasa: [26.2],
    vrt: [10.8],
    prodajno: 70.63,
    ukupno: 100
  },

  {
    stan: "C 1-2",
    kat: 0,
    ulaz: "C",
    kuhinja: 6.8,
    boravak: 24.4,
    soba: [9.2, 12.3],
    kupaonica: [4.4],
    terasa: [20.9],
    vrt: [5.5],
    prodajno: 73.50,
    ukupno: 95.90
  },

];



const rowTemplate = Handlebars.compile(`
<tr>
  <td class="text-nowrap">{{stan}}</td>
  <td class="text-center">{{kat}}</td>
  <td class="text-center">{{ulaz}}</td>
  <td class="text-center">{{soba}}</td>
  <td class="text-end">{{prodajno}}</td>

  <td class="text-end">{{boravak}}</td>
  <td class="text-end">{{kuhinja}}</td>
  <td class="text-end">{{sobe}}</td>
  <td class="text-end">{{kupaonica}}</td>

  <td class="text-end">{{loggia}}</td>
  <td class="text-end">{{terasa}}</td>
  <td class="text-end">{{vrt}}</td>

  <td class="text-end">{{ukupno}}</td>
</tr>
`);

const content = data.map(d =>
  rowTemplate({
    stan: d.stan,
    kat: d.kat,
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
  if (a.length == 1) {
    return fCurrency(a[0]);
  }
  return a.map(e => fCurrency(e)).join(" | ");
}
