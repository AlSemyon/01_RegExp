'use strict';

(function() {


    var reg = /^((1{4})(\-1{3})?)$|.+wow$/;

    var button = document.querySelector('.js-check-regex-btn');
    var input = document.querySelector('.js-check-regex-input');
    var out = document.querySelector('#out');

    button.addEventListener('click', function(e){
        e.preventDefault();
        var value = input.value;


        
        console.log(reg.exec(value));
    })
})();
