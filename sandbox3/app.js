const userInput = document.querySelector('input');

userInput.addEventListener('input', get_input_event);


function get_input_event(e) {
    let data1 = e.target.value;
    console.log(data1)
}
