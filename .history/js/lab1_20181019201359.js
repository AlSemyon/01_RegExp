'use strict';

(function() {


    var reg = /((1{4})(\-1{3})?)|.+wow$/;

    var button = document.querySelector('.js-check-regex-btn');
    var input = document.querySelector('.js-check-regex-input');

    button.addEventListener('click', function(){
        var value = input.value;

        console.log(reg.test(value));
    })
})();
