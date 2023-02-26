//Объявим переменную
let navBar = document.querySelector('nav');
// navBar.offsetTop; имеет четкую позицию, 255px, это где изначально находится.
let sticky = navBar.offsetTop;


//  Если изменить window.pageYOffset >= sticky на window.pageYOffset <= sticky то navBar будет привязан к вверху, а потом дойдя до 255px - уйдёт за границу экрана

document.addEventListener('scroll', function(){
    if (window.pageYOffset >= sticky) {
        navBar.classList.add('sticky')
    } else {
        navBar.classList.remove('sticky')
    }
})
console.log(window.pageYOffset); // от 0 до 255px
console.log(sticky); // 255px