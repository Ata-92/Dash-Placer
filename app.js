function dashPlacer(num) {
  if (isNaN(String(num))) {
    console.log(`Your input ${num} is not a number.
                Please try again.`);
  } else {
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
}

dashPlacer(0204568780);
