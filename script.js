const button = document.querySelector('button');
/* this will track the count */
var count = 0;

/* add your event listener here */
button.addEventListener('click', () => {
  console.log('+1 clicked')
  var num = document.querySelector('h2').textContent = count
  count = count + 1

})


console.log(num)
