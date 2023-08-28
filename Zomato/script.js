const togglebtn = document.querySelector('.header_bar');
const dropdownMenu = document.querySelector('.dropdown_menu');

togglebtn.onclick = function(){
    dropdownMenu.classList.toggle('open');
}