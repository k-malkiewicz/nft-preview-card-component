const allHrefs = document.querySelectorAll('a');

allHrefs.forEach(link => {
    link.addEventListener('click', (e) => e.preventDefault());
});