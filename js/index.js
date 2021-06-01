const body = document.getElementsByTagName('BODY')[0],
  header = body.querySelector('.header'),
  main = body.querySelector('.main');


if (header) {

  const burger = header.querySelector('.burger'),
    span1 = header.querySelector('.burger-span1'),
    span2 = header.querySelector('.burger-span2'),
    span3 = header.querySelector('.burger-span3'),
    navi = header.querySelector('.navigation__list');



  burger.addEventListener('click', () => {
    span1.classList.toggle('active');
    span2.classList.toggle('active');
    span3.classList.toggle('active');
    navi.classList.toggle('active');
    body.classList.toggle('hidden');
  })

  main.addEventListener('click', () => {
    span1.classList.remove('active');
    span2.classList.remove('active');
    span3.classList.remove('active');
    navi.classList.remove('active');
    body.classList.remove('hidden');
  })


  function app() {
    const buttons = document.querySelectorAll('.button')
    const cards = document.querySelectorAll('.card')

    function filter(category, items) {
      items.forEach((item) => {
        const isItemFiltered = !item.classList.contains(category)
        const isShowAll = category.toLowerCase() === 'all'
        if (isItemFiltered && !isShowAll) {
          item.classList.add('anime')
          item.classList.remove('show')
          item.ontransitionend = function () {
            if (item.classList.contains('anime')) {
              item.classList.add('hide')
            }
          }
        } else {
          item.classList.remove('hide')
          item.classList.remove('anime')
          item.classList.add('show')
        }
      })
    }

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const currentCategory = button.dataset.filter
        filter(currentCategory, cards)
      })
    })


  }

  app()

  const container = document.querySelector('.navf')

  container.addEventListener('click', function (e) {
    const items = document.querySelectorAll('.button')
    const target = e.target
    Array.from(items).forEach(item => {
      item.classList.remove('active')
    })
    target.classList.add('active')
  })



}

var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});