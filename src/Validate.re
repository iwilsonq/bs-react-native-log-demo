let float = value => {
  let t = [%bs.re "/[0-9]*\.?[0-9]*/"];
  Js.Re.test(value, t);
};

let int = value => {
  let t = [%bs.re "/^[0-9]+$/"];
  Js.Re.test(value, t);
};