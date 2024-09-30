const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')
toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isopen = dropDownMenu.classList.contains('open')
    toggleBtnIcon.classList = isopen? 'fa-solid fa-xmark': 'fa-solid fa-bars'
}
