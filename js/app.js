let nav = document.querySelector("nav");
let burger = document.querySelector(".header__burger");
let close = document.querySelector(".close");
let blockBtn = document.querySelectorAll(".block__btn");
let blockText = document.querySelectorAll(".block__text");
let servisBlock = document.querySelectorAll(".servis__block");

burger.addEventListener("click", () => {
    nav.classList.toggle("open");
    close.style.display = "flex";
});
close.addEventListener("click", () => {
    nav.classList.toggle("open");
    close.style.display = "none";
});
console.log(blockBtn);

for (let i = 0; i < blockBtn.length; i++) {
    blockBtn[i].addEventListener("click", (event) => {
        blockBtn[i].classList.toggle('rotate');
        servisBlock[i].classList.toggle('service__open');



        // console.log(blockText[i].classList)
        event.target.closest('.servis__block').querySelector('.block__text').classList.toggle('visible');


    });

}
new Swiper('.gallery__slider', {
    //стрелки
    navigation: {
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev'
    },
    // Дотсы
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    //изменение  курсора
    grabCursor: true,

    //пеертаскивание с меньшим усилием
    tochRatio: 1,

    //скролл с помощью колеса  мыши
    mousewheel: {

        //чувствительность колеса мыши
        sensitivity: 1,
    },

    //автовысота (на случай текста разного объема)
    autoHeight: false,

    //колличество слайдов при показе
    slidesPerView: 3,

    //если слайдов меньше чем нужно, например только 1, то слайдер отключится и этот слайд будет оказыватсья просто ввиде контента
    watchOverflow: true,

    //отступ между слайдами
    spaceBetween: 20,

    //кол-во пролистываемых слайдов
    slidesPerGroup: 1,

    //активный слайд по центру 
    centeredSlides: true,

    //стартовый слайд 
    // initialSlide: 1,

    //бесконечная прокрутка
    loop: true,

    //свободный режим (нужен для плавного скрола и для плавного перемещения слайдов мышью)
    freeMode: true,


    speed: 800,
    //автопрокрутка  слайдов 
    // autoplay: {
    //пауза между прокруткой 
    // delay: 1000,

    //закончить на последнем слайде
    // stopOnLastSlide: true,

    //отключить после ручного переключения
    // disableOnInteraction: true,
    // }

    //сделать слайдер вертикальным
    // direction: 'vertical',

    breakpoints: {
        320: {
            //колличество слайдов при показе
            slidesPerView: 1,


        },
        480: {

        },
        992: {

        },
    }


})