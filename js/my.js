var i = 0
function catBtnDo() {
  var mobileMenu = document.getElementById('mobileMenu')
  var myBtn = document.getElementById('catBtn')

  if (i++ % 2 == 1) {
    mobileMenu.style.display = 'none';
    myBtn.classList.replace("collapse-cat", "collapse-cat-black")
    myBtn.focus();
  } else {
    mobileMenu.style.display = 'block'
    myBtn.classList.replace("collapse-cat-black", "collapse-cat");
    myBtn.focus();
  }
}
