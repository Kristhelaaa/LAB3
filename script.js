function sumar() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 + num2;
    document.getElementById("resultadoSuma").textContent = `Resultado: ${resultado}`;
  }
  
  function restar() {
    const num3 = parseFloat(document.getElementById("num3").value);
    const num4 = parseFloat(document.getElementById("num4").value);
    const resultado = num3 - num4;
    document.getElementById("resultadoResta").textContent = `Resultado: ${resultado}`;
  }
  
  function multiplicar() {
    const num5 = parseFloat(document.getElementById("num5").value);
    const num6 = parseFloat(document.getElementById("num6").value);
    const resultado = num5 * num6;
    document.getElementById("resultadoMultiplicacion").textContent = `Resultado: ${resultado}`;
  }
  
  function dividir() {
    const num7 = parseFloat(document.getElementById("num7").value);
    const num8 = parseFloat(document.getElementById("num8").value);
    const resultado = num7 / num8;
    document.getElementById("resultadoDivision").textContent = `Resultado: ${resultado}`;
  }

  
  function calcularPotencia() {
    const base = parseFloat(document.getElementById("base").value);
    const exponente = parseFloat(document.getElementById("exponente").value);
    const resultado = Math.pow(base, exponente);
    document.getElementById("resultadoPotencia").textContent = `Resultado: ${resultado}`;
  }

  function calcularRaizCuadrada() {
    const numero = parseFloat(document.getElementById("numero").value);
    if (numero >= 0) {
      const resultado = Math.sqrt(numero);
      document.getElementById("resultadoRaiz").textContent = `Raíz cuadrada: ${resultado.toFixed(2)}`;
    } else {
      document.getElementById("resultadoRaiz").textContent = "El número debe ser mayor o igual a 0";
    }
  }
  function calcularAreaTriangulo() {
    const base = parseFloat(document.getElementById("baseTriangulo").value);
    const altura = parseFloat(document.getElementById("alturaTriangulo").value);
    const area = (base * altura) / 2;
    document.getElementById("resultadoTriangulo").textContent = `Área: ${area.toFixed(2)}`;
  }
  
  function calcularAreaCirculo() {
    const radio = parseFloat(document.getElementById("radioCirculo").value);
    const area = Math.PI * Math.pow(radio, 2);
    document.getElementById("resultadoCirculo").textContent = `Área: ${area.toFixed(2)}`;
  }
  
  function calcularAreaRectangulo() {
    const base = parseFloat(document.getElementById("baseRectangulo").value);
    const altura = parseFloat(document.getElementById("alturaRectangulo").value);
    const area = base * altura;
    document.getElementById("resultadoRectangulo").textContent = `Área: ${area.toFixed(2)}`;
  }
  function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let result;
    
    if (inputUnit === 'kg' && outputUnit === 'g') {
            result = inputValue * 1000;
        } else if (inputUnit === 'g' && outputUnit === 'kg') {
            result = inputValue / 1000;
        }
        
        document.getElementById('result').innerText = `${inputValue} ${inputUnit} son ${result} ${outputUnit}`
    }

function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let result;

        if (inputUnit === 'liters' && outputUnit === 'milliliters') {
            result = inputValue * 1000;
        } else if (inputUnit === 'milliliters' && outputUnit === 'liters') {
            result = inputValue / 1000;
        } else if (inputUnit === 'liters' && outputUnit === 'cubic_meters') {
            result = inputValue / 1000;
        } else if (inputUnit === 'cubic_meters' && outputUnit === 'liters') {
            result = inputValue * 1000;
        } else if (inputUnit === 'liters' && outputUnit === 'gallons') {
            result = inputValue * 0.264172;
        } else if (inputUnit === 'gallons' && outputUnit === 'liters') {
            result = inputValue * 3.78541;
        } else if (inputUnit === 'milliliters' && outputUnit === 'cubic_meters') {
            result = inputValue / 1000000;
        } else if (inputUnit === 'cubic_meters' && outputUnit === 'milliliters') {
            result = inputValue * 1000000;
        } else if (inputUnit === 'milliliters' && outputUnit === 'gallons') {
            result = inputValue * 0.000264172;
        } else if (inputUnit === 'gallons' && outputUnit === 'milliliters') {
            result = inputValue * 3785.41;
        } else if (inputUnit === 'cubic_meters' && outputUnit === 'gallons') {
            result = inputValue * 264.172;
        } else if (inputUnit === 'gallons' && outputUnit === 'cubic_meters') {
            result = inputValue / 264.172;
        } else {
            result = inputValue; // Si las unidades son iguales, el resultado es el mismo valor.
        }

        document.getElementById('result').innerText = `${inputValue} ${inputUnit} son ${result.toFixed(2)} ${outputUnit}`;
    }

function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let result;

        if (inputUnit === 'meters' && outputUnit === 'centimeters') {
            result = inputValue * 100;
        } else if (inputUnit === 'centimeters' && outputUnit === 'meters') {
            result = inputValue / 100;
        } else if (inputUnit === 'meters' && outputUnit === 'inches') {
            result = inputValue * 39.3701;
        } else if (inputUnit === 'inches' && outputUnit === 'meters') {
            result = inputValue / 39.3701;
        } else if (inputUnit === 'meters' && outputUnit === 'feet') {
            result = inputValue * 3.28084;
        } else if (inputUnit === 'feet' && outputUnit === 'meters') {
            result = inputValue / 3.28084;
        } else if (inputUnit === 'centimeters' && outputUnit === 'inches') {
            result = inputValue / 2.54;
        } else if (inputUnit === 'inches' && outputUnit === 'centimeters') {
            result = inputValue * 2.54;
        } else if (inputUnit === 'centimeters' && outputUnit === 'feet') {
            result = inputValue / 30.48;
        } else if (inputUnit === 'feet' && outputUnit === 'centimeters') {
            result = inputValue * 30.48;
        } else if (inputUnit === 'inches' && outputUnit === 'feet') {
            result = inputValue / 12;
        } else if (inputUnit === 'feet' && outputUnit === 'inches') {
            result = inputValue * 12;
        } else {
            result = inputValue; // Si las unidades son iguales, el resultado es el mismo valor.
        }

        document.getElementById('result').innerText = `${inputValue} ${inputUnit} son ${result.toFixed(2)} ${outputUnit}`;
    }

function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let result;

        if (inputUnit === 'kg/m3' && outputUnit === 'g/cm3') {
            result = inputValue * 0.001;
        } else if (inputUnit === 'g/cm3' && outputUnit === 'kg/m3') {
            result = inputValue * 1000;
        } else {
            // Agrega más conversiones según tus necesidades
        }

        document.getElementById('result').innerText = `${inputValue} ${inputUnit} son ${result.toFixed(4)} ${outputUnit}`;
    }
function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let result;

        if (inputUnit === 'bytes' && outputUnit === 'kilobytes') {
            result = inputValue / 1024;
        } else if (inputUnit === 'kilobytes' && outputUnit === 'bytes') {
            result = inputValue * 1024;
        } else if (inputUnit === 'kilobytes' && outputUnit === 'megabytes') {
            result = inputValue / 1024;
        } else if (inputUnit === 'megabytes' && outputUnit === 'kilobytes') {
            result = inputValue * 1024;
        } else if (inputUnit === 'megabytes' && outputUnit === 'gigabytes') {
            result = inputValue / 1024;
        } else if (inputUnit === 'gigabytes' && outputUnit === 'megabytes') {
            result = inputValue * 1024;
        } else {
            result = inputValue; // Si las unidades son iguales, el resultado es el mismo valor.
        }

        document.getElementById('result').innerText = `${inputValue} ${inputUnit} son ${result.toFixed(4)} ${outputUnit}`;
    }

    function convert() {
        const inputUnit = document.getElementById("inputUnit").value;
        const inputValue = parseFloat(document.getElementById("inputValue").value);
        const outputUnit = document.getElementById("outputUnit").value;
      
        const units = {
          bit: 1,
          byte: 8,
          kilobyte: 8 * 1024,
          megabyte: 8 * 1024 * 1024,
          gigabyte: 8 * 1024 * 1024 * 1024,
          terabyte: 8 * 1024 * 1024 * 1024 * 1024,
        };
      
        const result = inputValue * (units[inputUnit] / units[outputUnit]);
      
        document.getElementById("result").innerText = `${inputValue} ${inputUnit} es igual a ${result.toFixed(2)} ${outputUnit}`;
      }
      