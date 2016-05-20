let a = 1;

export function detectTouchNow() {
  setTimeout(() => a += 1,0);
  return a;
}

export default detectTouchNow();
