const T = Array.from({length: 140 - 45 + 1}, (_, i) => i + 45).map(it => ((it * (it + 1)) / 2).toString());
const S = Array.from({length: 99 - 32 + 1}, (_, i) => i + 32).map(it => (it * it).toString());
const P = Array.from({length: 81 - 26 + 1}, (_, i) => i + 26).map(it => ((it * (3 * it - 1)) / 2).toString());
const Hex = Array.from({length: 70 - 23 + 1}, (_, i) => i + 23).map(it => (it * (2 * it - 1)).toString());
const Hep = Array.from({length: 63 - 21 + 1}, (_, i) => i + 21).map(it => ((it * (5 * it - 3)) / 2).toString());
const O = Array.from({length: 58 - 19 + 1}, (_, i) => i + 19).map(it => (it * (3 * it - 2)).toString());

function check_cyclic(a, fitOnly) {
  const m = {...{l:[], r:[]}}
  a.forEach((it) => {
    m.l.push(it.slice(0,2));
    m.r.push(it.slice(2));
  })

  m.l.forEach((it, index) => {
    const indexOf = m.r.indexOf(it);
    if(m.r.includes(it) && index !== indexOf) {
      m.l[index] = null
      m.r[indexOf] = null;
    }
  })
  return m.l.filter(it => !it).length === fitOnly;
}

function fn(arr, i, d, n) {
  if(i <= 0) return d;
  let m = []
  let k = 0;

  [...d].forEach((it1, index) => {
    if(it1 === null) return;
    arr[i - 1].forEach((it) => {
      const x = [...it1, it];
      if(check_cyclic(x, i == 1 ? n : n - i)) {
        m[k] = x;
        k++;
      }
    })
  });
  return fn(arr,i-1,[...m], n);
}

function cyclicalFigurateNums(n) {  
  const arr = [T,S,P,Hex,Hep,O].slice(0,n);
  const lastLevel = arr.length - 1;
  const res = fn(arr, lastLevel, arr[lastLevel].map(it => [it]), n);
  let sum = 0;
  res.forEach((it) => {
    sum += it.reduce((pr,cr) => Number(cr) + pr,0);
  })
  return sum;
}

cyclicalFigurateNums(3);