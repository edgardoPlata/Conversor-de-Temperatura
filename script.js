document.getElementById("convertButton").addEventListener('click', () =>{

    let celsius = parseFloat(document.getElementById("celsius").value); 

    let fahrenheit = (celsius * 9) / 5 + 32;

    document.getElementById("result").innerText =
      celsius +
      " grados Celsius son " +
      fahrenheit.toFixed(2) +
      " grados Fahrenheit.";
})