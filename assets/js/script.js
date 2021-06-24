$(document).ready(function(){

    var nav = document.querySelector('nav');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 200) {
            nav.classList.add('bg-dark', 'shadow');
        } else {
            nav.classList.remove('bg-dark', 'shadow');
        }
    });

    $("#navbarNav").click(function () {
        $("#navbarNav").toggleClass("navcolor");
    });

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="collapse"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    const navLinks = document.querySelectorAll('.nav-item')
    const menuToggle = document.getElementById('navbarNav')
    const bsCollapse = new bootstrap.Collapse(menuToggle)
    navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})
});