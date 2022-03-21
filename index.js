// grabs the element by id
var menuIcon = document.getElementById('menu-icon')

// grabs the element by id
var navigate = document.getElementById('navigate')

// attaches a listener to menuIcon
menuIcon.addEventListener('click', function () {

    navigate.classList.toggle('show')
})