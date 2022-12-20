const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const message = document.getElementById('message');

yesButton.addEventListener('click', () => {

    message.innerHTML = '<img class="tym-gif" src="images/luvutoo.gif" alt=""><div>I like you too<3</div>';
});

noButton.addEventListener('mouseover', () => {
    const x = Math.floor(Math.random() * 80) + 1;
    const y = Math.floor(Math.random() * 90) + 1;
    noButton.setAttribute("style", `position: absolute; top:${x}%;left: ${y}%;`)
});


