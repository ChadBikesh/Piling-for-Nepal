const iframe = document.getElementById('my-iframe');
const links = iframe.contentDocument.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const url = event.target.href;
    fetch(url).then(response => response.text()).then(data => {
      iframe.contentDocument.documentElement.innerHTML = data;
    });
  });
});



const responsiveTitle = document.querySelector('.responsivetitle');
const responsive = document.querySelector('.responsive');

responsiveTitle.addEventListener('click', () => {
  responsive.classList.toggle('show');
});