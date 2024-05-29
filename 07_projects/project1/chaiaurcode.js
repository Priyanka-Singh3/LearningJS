const button = document.querySelectorAll('.button')
button.forEach(function(button) {
    button.addEventListener('click', function(e){
        document.querySelector('body').style.backgroundColor = e.target.id
    })
})