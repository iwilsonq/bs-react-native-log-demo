'use strict';


function $$float(value) {
  var t = (/[0-9]*\.?[0-9]*/);
  return t.test(value);
}

function $$int(value) {
  var t = (/^[0-9]+$/);
  return t.test(value);
}

exports.$$float = $$float;
exports.$$int = $$int;
/* No side effect */
