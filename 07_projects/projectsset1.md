# Projects related to DOM 

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

### solution code

## project 1
### colour changer

```javascript
const buttons = document.querySelectorAll('.button')
console.log(buttons)
const body = document.querySelector("body")

buttons.forEach(function (button) {
  console.log(button)
  button.addEventListener('click', function(e) {
    console.log(e)
    console.log(e.target)
    body.style.backgroundColor = e.target.id
  })
})
```

## project 2
### digital clock

```javascript

const clock = document.getElementById('clock')


setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)

```

## project 3
### bmi calculator
```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```

