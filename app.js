var main = document.querySelector('.modal__background');
var left = document.querySelector('.left i')
var right = document.querySelector('.right i')
var closeBtn = document.querySelector('.close')
var imgChange = document.querySelectorAll('.image img')
var imgEx =document.querySelector('.img__ img')


closeBtn.addEventListener('click', function(){
    main.classList.toggle('show')
})
document.addEventListener('keydown', function(e){
    if(e.which == 27){
        main.classList.remove('show')
    }
})
var place = 0;
console.log(imgChange[place])
imgChange.forEach (function(item, index){
    item.addEventListener('click', function(){
        place = index;
        imgEx.src = imgChange[place].src;
        main.classList.add('show')
    })
})

right.addEventListener('click', function(){
    if(place < imgChange.length){
        main.classList.add('show')
        place++;
        imgEx.src = imgChange[place].src;
        if(place == imgChange.length - 1){
            right.classList.add('hide')
        }
        else{
            right.classList.remove('hide')
        }
    }
})
left.addEventListener('click', function(){
    if(place > 0){
        place--;
        imgEx.src = imgChange[place].src;
        main.classList.add('show')
        if(place == 0){
            left.classList.add('hide')
        }
        else{
            left.classList.remove('hide')
        }
    }
    
})