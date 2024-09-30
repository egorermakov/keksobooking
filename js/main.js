function getRandomPositiveInteger(a, b = 1) {
    if (a === undefined) {
      throw new Error("Первый параметр должен быть число")
    }
  
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
  }

function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);

    return parseFloat(str);
}

getRandomPositiveInteger(10, 10);
getRandomFloat(10, 20, 3);