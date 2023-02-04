const stanovi = [
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
    ukupno: 100.6,
    cijena: 3500
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
    ukupno: 132.95,
    cijena: 3500
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
    ukupno: 95,
    cijena: 3500
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
    ukupno: 120.35,
    cijena: 3500
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
    ukupno: 100,
    cijena: 3500
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
    ukupno: 95.90,
    cijena: 3500
  },

  {
    stan: "A 2-1",
    kat: 1,
    ulaz: "A",
    kuhinja: 7.4,
    boravak: 20,
    soba: [8.1, 12.7],
    kupaonica: 4.5,
    loggia: 6.5,
    prodajno: 61.18,
    ukupno: 62.80,
    cijena: 3500
  },

  {
    stan: "A 2-2",
    kat: 1,
    ulaz: "A",
    kuhinja: 6.5 ,
    boravak: 24.8,
    soba: [9.2, 12.3],
    kupaonica: 4.4,
    loggia: 7.1,
    prodajno: 67.68,
    ukupno: 69.45,
    cijena: 3500
  },

  {
    stan: "B 2-1",
    kat: 1,
    ulaz: "B",
    kuhinja: 6.5,
    boravak: 24.8,
    soba: [9.2, 11.4],
    kupaonica: 4.4,
    loggia: 7.1,
    prodajno: 66.78,
    ukupno: 68.55,
    cijena: 3500
  },

  {
    stan: "B 2-2",
    kat: 1,
    ulaz: "B",
    kuhinja: 6.5,
    boravak: 24.8,
    soba: [9.2, 11.4],
    kupaonica: 4.5,
    loggia: 7.1,
    prodajno: 66.88,
    ukupno: 68.65,
    cijena: 3500
  },

  {
    stan: "C 2-1",
    kat: 1,
    ulaz: "C",
    kuhinja: 7.4,
    boravak: 20,
    soba: [8.1, 12.7],
    kupaonica: 4.5,
    terasa: 6.5,
    prodajno: 57.93,
    ukupno: 62.8,
    cijena: 3500
  },

  {
    stan: "C 2-2",
    kat: 1,
    ulaz: "C",
    kuhinja: 6.5,
    boravak: 24.8,
    soba: [9.2, 12.3],
    kupaonica: 4.4,
    loggia: 7.1,
    prodajno: 67.68,
    ukupno: 69.45,
    cijena: 3500
  },

  {
    stan: "A 3-1",
    kat: 2,
    ulaz: "A",
    kuhinja: 8.8 ,
    boravak: 38.7,
    soba: [11.8, 11.2, 9.6],
    kupaonica: [5.2, 5.1],
    terasa: [22.4, 21.3],
    prodajno: 108.63,
    ukupno: 139.9,
    cijena: 3800
  },

  {
    stan: "B 3-1",
    kat: 2,
    ulaz: "B",
    kuhinja: 8.6,
    boravak: 24.6,
    soba: [10.5, 11.8, 11.2, 10.6],
    kupaonica: [5.2, 5.1, 2.1],
    terasa: [19.3, 19.3],
    prodajno: 115.75,
    ukupno: 144.7,
    cijena: 3800
  },

  {
    stan: "C 3-1",
    kat: 2,
    ulaz: "C",
    kuhinja: 8.3,
    boravak: 23.8,
    soba: [17.8, 14.2, 10.5],
    kupaonica: [8.4, 2.1],
    terasa: [21.3, 20.4],
    prodajno: 109.03,
    ukupno: 140.3,
    cijena: 3800
  }

];

const parkings = [
  { code: "PGM 01", type: "parkirno garažno mjesto", area: 12.90 },
  { code: "PGM 02", type: "parkirno garažno mjesto", area: 13.40 },
  { code: "PGM 03", type: "parkirno garažno mjesto", area: 25.10 },
  { code: "GM 04", type: "garažno mjesto", area: 27.90 },
  { code: "GM 05", type: "garažno mjesto", area: 20.40 },
  { code: "PGM 06", type: "parkirno garažno mjesto", area: 12.90 },
  { code: "PGM 07", type: "parkirno garažno mjesto", area: 13.00 },
  { code: "PGM 08", type: "parkirno garažno mjesto", area: 12.20 },
  { code: "PGM 09", type: "parkirno garažno mjesto", area: 12.90 },
  { code: "PGM 10", type: "parkirno garažno mjesto", area: 13.00 },
  { code: "PGM 11", type: "parkirno garažno mjesto", area: 22.90 },
  { code: "GM 12", type: "garažno mjesto", area: 14.90 },
  { code: "GM 13", type: "garažno mjesto", area: 19.20 },
  { code: "PGM 14", type: "parkirno garažno mjesto", area: 12.90 },
  { code: "PGM 15", type: "parkirno garažno mjesto", area: 13.50 },
  { code: "PGM 16", type: "parkirno garažno mjesto", area: 13.00 },

  { code: "PM 17", type: "parkirno mjesto", area:  12.50 },
  { code: "PM 18", type: "parkirno mjesto", area:  12.50 },
];

const spremista = [
  { code: "SP 01", area: 6.80 },
  { code: "SP 02", area: 7.30 },
  { code: "SP 03", area: 7.30 },
  { code: "SP 04", area: 7.30 },
  { code: "SP 05", area: 6.80 },
  { code: "SP 06", area: 6.80 },
  { code: "SP 07", area: 6.80 },
  { code: "SP 08", area: 7.30 },
  { code: "SP 09", area: 7.30 },
  { code: "SP 10", area: 7.00 },
  { code: "SP 11", area: 6.80 },
  { code: "SP 12", area: 6.40 },
];

exports.stanoviModals = (stanovi.map(d => ({
  code: code(d.stan),
  name: d.stan,
  kat: d.kat == 0 ? "PRIZEMLJE" : d.kat + ". KAT",
  povrsina: fCurrency(d.prodajno),
})));

exports.spremistaRows = spremista.map(d => ({
  code: d.code,
  area: fCurrency(d.area),
  price: parkingPrice(d.code, d.area),
}));

exports.stanoviRows = (stanovi.map(d =>
  ({
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
));

exports.parkirnaMjestaRows = parkings.map(d => ({
  modal: d.code.startsWith("PM") ? "modal-parkings" : "modal-warehouses",
  code: d.code,
  type: d.type,
  area: fCurrency(d.area),
  iznos: parkingPrice(d.code, d.area),
}));

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

function parkingPrice(code, area) {
  if (code.startsWith("PGM")) {
    return fCurrency(area * 1500, 0);
  }
  if (code.startsWith("GM")) {
    return fCurrency(area * 1800, 0);
  }
  if (code.startsWith("PM")) {
    return fCurrency(area * 1200, 0);
  }
  if (code.startsWith("SP")) {
    return fCurrency(area * 1600, 0);
  }
  return "?";
}
