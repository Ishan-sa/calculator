let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');
let evalBtn = document.querySelector('.eval');
let string = "";
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === "BS") {
            onPressBackspace();
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})

function onPressBackspace() {
    input.value = input.value.substring(0, input.value.length - 1);
}

function enterKey() {

}