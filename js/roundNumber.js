function roundNumber() {
    let x_coord = document.getElementById("x");
    let number = Number(x_coord.innerText);
    let roundedNumber = (number % 1) === 0 ? number.toFixed(0) : number.toFixed(1);
    document.getElementById("x").innerText = roundedNumber;
    x_coord.dispatchEvent(new Event('change'));
}