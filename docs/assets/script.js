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

// Линии между кругами
// var drawLine = (a, b) => {
//   var parent = document.querySelector('.why-us__item');
//   var parentCoords = parent.getBoundingClientRect();
//   var parentTop = parentCoords.top;
//   var parentLeft = parentCoords.left;
//
//   var pointAll = document.querySelectorAll('.why-us__item-number');
//   var point1 = pointAll[a];
//   var point1coords = point1.getBoundingClientRect();
//   var point1top = point1coords.top;
//   var point1left = point1coords.left;
//
//   var point2 = pointAll[b];
//   var point2coords = point2.getBoundingClientRect();
//   var point2top = point2coords.top;
//   var point2left = point2coords.left;
//   var point2height = point2coords.height;
//   var point2width = point2coords.width;
//
//   var svg = document.querySelectorAll('.line');
//   svg[0].style.top = point1top + (point2height/2) - parentTop + 'px';
//   svg[0].style.left = point1left + (point2width/2) - parentLeft + 'px';
//
//   var svgWidth = point2left - point1left;
//   var svgHeight = point2top - point1top;
//   svg[0].style.width = svgWidth + 'px';
//   svg[0].style.height = svgHeight + 'px';
//
//   var line = document.querySelector('.line__stroke');
//   line.setAttribute('x2', svgWidth);
//   line.setAttribute('y2', svgHeight);
// };
// drawLine(0, 1);

var drawLine = () => {
  var blocksContainer = document.querySelector('.why-us__item');
  var blocks = document.querySelectorAll('.why-us__item-article');
  var blocksQuantity = blocks.length;
  var linesQuantity = blocksQuantity - 1;

  var createSvgBlock = () => { // Функция создания контейнера с полосами
    var svg = document.createElement('svg');
    svg.classList.add('line');
    var line = document.createElement('line');
    line.classList.add('line__stroke');
    line.setAttribute('x1', '0');
    line.setAttribute('y1', '0');
    line.setAttribute('style', 'stroke:rgb(0,0,0); stroke-width:2');
    svg.appendChild(line);
    blocksContainer.appendChild(svg);
    console.log(svg);
  }

  for (var i = 0; i < linesQuantity; i++) { // Создаем контейнеры с полосами
    createSvgBlock();
    var svg = document.querySelectorAll('.line');
    var number = i + 1;
    svg[i].classList.add('line-' + number);
  }




};

drawLine();
// /Линии между кругами
