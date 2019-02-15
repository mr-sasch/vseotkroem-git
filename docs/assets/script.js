// Табы в шапке
(() => {
  var tabsBtns = document.querySelector('.tabs-btns');
  var tabsBtnsItem = document.querySelectorAll('.tabs-btns__item');
  var tabsBtnsItemLength = tabsBtnsItem.length;
  var tabsContentTab = document.querySelectorAll('.tabs-content__tab');

  if (tabsBtns) {
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
  }
})();
// /Табы в шапке

// Табы в шапке - мобильные
(() => {
var mainContainer = document.querySelector('.mobile-tabs-btns');
var tabsBtns = document.querySelectorAll('.mobile-tabs-btns__item');
var tabsBtnsTtl = document.querySelectorAll('.mobile-tabs-btns__item-ttl');
var wrappers = document.querySelectorAll('.mobile-tabs-content__tab-wrapper');
var listItems = document.querySelectorAll('.mobile-tabs-content__tab');
var tabsBtnsLength = tabsBtns.length;

if (mainContainer) {
  mainContainer.onclick = (e) => {
    var target = e.target;
    if (!target.classList.contains('mobile-tabs-btns__item-ttl')) return ;
    if (target.parentNode.classList.contains('active')) {
      console.log('active');
      for (var i = 0; i < tabsBtnsLength; i++) {
        if (target === tabsBtnsTtl[i]) {
          tabsBtns[i].classList.remove('active');
          wrappers[i].style.height = '0px';
          return ;
        }
      };
    };
    for (var i = 0; i < tabsBtnsLength; i++) {
      tabsBtns[i].classList.remove('active');
      wrappers[i].style.height = '0px';
    };
    for (var i = 0; i < tabsBtnsLength; i++) {
      if (target === tabsBtnsTtl[i]) {
        tabsBtns[i].classList.add('active');
        wrappers[i].style.height = listItems[i].offsetHeight + 'px';
      }
    };
  }
}
})();
// /Табы в шапке - мобильные

// Кнопка мобильного меню
(() => {
  var button = document.querySelector('.nav-mobile__label');
  var wrapper = document.querySelector('.nav-mobile-wrapper');
  button.onclick = () => {
    wrapper.classList.toggle('active');
    button.classList.toggle('active');
  };
})();

// /Кнопка мобильного меню
