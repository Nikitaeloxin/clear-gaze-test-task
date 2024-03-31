document.getElementById('calculatorForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);

    // Perform calculation
    let rootValue = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
    if (isNaN(rootValue)) {
        alert('Под корнем стоит отрицательное значение!Попробуйте еще раз!');
        let inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.value = '';
        });
    } else {
        let result = (b + rootValue)/(2*a);
        document.getElementById('a_res').innerText = a;
        document.getElementById('b_res').innerText = b;
        document.getElementById('c_res').innerText = c;
        document.getElementById('root_res').innerText = rootValue;
        document.getElementById('x').innerText = result;

        x_coord = document.getElementById("x");
        y_coord = document.getElementById("y");
    }
    

    // Display result
    // document.getElementById('result').innerText = 'Result: ' + result;
});