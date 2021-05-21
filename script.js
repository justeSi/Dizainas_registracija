var suma;
suma = 5;
console.log('labas');
console.log('%c%s', 'color: #f200e2', suma);
document.addEventListener('DOMContentLoaded',function() {
    if (document.querySelector('#login .or')){
        document.querySelector('#login .or').classList.add('login');
    }

    if (document.querySelector('#forgot .or')){
        document.querySelector('#forgot .or').classList.add('login');
    }
});

