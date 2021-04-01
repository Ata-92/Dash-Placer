function dashPlacer(num) {
  let newNum = "";
  for (let i = 0; i < String(num).length; i++) {
    if (parseInt(String(num)[i]) % 2 === 0 && parseInt(String(num)[i + 1]) % 2 === 0) {
      newNum += String(num)[i] + "-";
    } else {
      newNum += String(num)[i];
    }
  }
  console.log(newNum);
}

dashPlacer(102045687801);
