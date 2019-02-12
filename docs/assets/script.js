// Табы в шапке
(function(){
  var tabsBtns = document.querySelector('.tabs-btns');
  var tabsBtnsItem = document.querySelectorAll('.tabs-btns__item');
  var tabsBtnsItemLength = tabsBtnsItem.length;
  var tabsContentTab = document.querySelectorAll('.tabs-content__tab');

  tabsBtns.onclick = (e) => {
    var target = e.target;
    if (!target.classList.contains('tabs-btns__item')) return ;
    for (var i = 0; i < tabsBtnsItemLength; i++) {
      tabsBtnsItem[i].classList.remove('active');
      tabsContentTab[i].classList.remove('active');
    }
    for (var i = 0; i < tabsBtnsItemLength; i++) {
      if (tabsBtnsItem[i] == target) {
        tabsBtnsItem[i].classList.add('active');
        tabsContentTab[i].classList.add('active');
      }
    }
  }
}());
// /Табы в шапке

// Табы в шапке - мобильные
(function(){
var mobileTabsBtns = ... !!!



}());
// /Табы в шапке - мобильные
