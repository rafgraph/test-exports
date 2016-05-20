import touchDetected, { detectTouchNow } from './index.js';

console.log(touchDetected);

setTimeout(() => {
  console.log(detectTouchNow());
  console.log(touchDetected)
}, 100);
