export function currency(num, digits) {
  digits = digits === undefined ? 2 : digits;
  return num.toLocaleString('hr', { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

export function numeric(a, digits) {
  if (!a) {
    return "-";
  }
  if (!Array.isArray(a)) {
    return currency(a, digits);
  }
  if (a.length == 1) {
    return currency(a[0], digits);
  }
  return a.map(e => currency(e, digits)).join(" | ");
}

function parkingPrice(code, area) {
  if (code.startsWith("PGM")) {
    return currency(area * 1500, 0);
  }
  if (code.startsWith("GM")) {
    return currency(area * 1800, 0);
  }
  if (code.startsWith("PM")) {
    return currency(area * 1200, 0);
  }
  if (code.startsWith("SP")) {
    return currency(area * 1600, 0);
  }
  return "?";
}

function code(stan) {
  return stan.replace(" ", "-").toLowerCase()
}
