// The example of changing the page content 
// Query selector by class - .class, by id - #my_id, tag - span

const hack_the_world = document.querySelector('.main-paragraph');

function send_fake_message(selector = hack_the_world) {
    selector.innerHTML = 'Boom, now you reading fake info!';
}

// The example of changing the style of the page

function send_hacking_status(selector = hack_the_world) {
    selector.innerHTML = 'You are hacked!';
    selector.style.color = 'red';
}

send_fake_message()
send_hacking_status()

// The example of changing the nested elements
// getting the first element from the list

document.querySelector('li').style.color = 'green';

// getting the last element of the list

document.querySelector('li:last-child').style.color = 'yellow';

// getting the nested element from the list 

document.querySelector('ul li').style.color = 'pink'

// getting the n-th element from the page

document.querySelector('li:nth-child(2)').style.color = 'green'