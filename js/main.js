"use Strict"
const numbers = [...document.querySelectorAll(".number")]
function counter(number)
{
    const value = parseInt(number.dataset.value);
    const increment = Math.ceil(value / 1000)
    let iterationValue = 0;
    const changeCounter = setInterval(() =>{
        iterationValue += increment;
        if(iterationValue >value)
        {
            number.innerHTML = `${value}+` 
            clearInterval(changeCounter);
return
        }
        number.innerHTML = `${iterationValue}+` 
    },1)
}
numbers.forEach((number) => {
    counter(number);
  });
  