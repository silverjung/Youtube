const moreBtn = document.querySelector('.info .titleButton .moreBtn');
const title = document.querySelector('.info .titleButton .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});
