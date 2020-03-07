function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  console.log('DOM ready');

  const burgerBtn = document.querySelector('.navbar-toggle');
  const menuWrap = document.querySelector('.menu-wrap');
  const mainMenu = document.querySelector('#main-menu');
  burgerBtn.addEventListener('click', showPhoneMenu);
  function showPhoneMenu() {
    menuWrap.classList.toggle('z-index');
    if (mainMenu.style.display === "none") {
      mainMenu.style.display = "block";
    }
    else mainMenu.style.display = "none"
  }

  // стилизация input'a загрузки файла на стр. study
  let myInput = document.querySelector('#offer-file');
  let myLabel = document.querySelector('#offer-file-info');
  if (myInput && myLabel) {
    myInput.addEventListener('change', function(e){
      var fileName = '';
      fileName = e.target.value.split( '\\' ).pop();
      if (fileName) {
        myLabel.textContent = fileName;
      }
    });
  };

});


