const display = document.getElementById("display");

function appendToDisplay(value) {
	display.value += value;
}

function clearDisplay() {
    display.value = "";
}


function calculate() {
    try {
        display.value = new Function(`return ${display.value}`)();
    } catch (error) {
        display.value = "Error";
    }
}

document.querySelectorAll(".btn-num, .operator-btn").forEach(button => {
    button.addEventListener("click", function () {
        appendToDisplay(this.textContent);
    });
});
document.getElementById("btn-reset").addEventListener("click", clearDisplay);
document.getElementById("btn-icon").addEventListener("click", clearDisplay);
document.getElementById("btn-equals").addEventListener("click", calculate);
