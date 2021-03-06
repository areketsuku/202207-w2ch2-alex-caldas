const strictEquals = function (a, b) {
  let result;
  if (Number.isNaN(a) && Number.isNaN(b)) {
    result = false;
  } else if (
    (Object.is(a, 0) && Object.is(-0, b)) ||
    (Object.is(a, -0) && Object.is(0, b))
  ) {
    result = true;
  } else {
    result = Object.is(a, b);
  }
  return result;
};
