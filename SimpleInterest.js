function SimpleInterest(p, r, t, tc) {
  if (tc == "year") {
    let i = r / 100;
    let si = p * (i * t) + p;
    return si;
  } else if (tc == "month") {
    t = t / 12;
    let i = r / 100;
    let si = p * (i * t) + p;
    return si;
  }
}

let c = "month";

console.log(SimpleInterest(500, 5, 10, c));
