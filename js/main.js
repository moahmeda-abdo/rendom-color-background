let arrcolor = [1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9, 'a', 'b', 'c', 'd', 'e', 'f']

let color = []


document.getElementById('change').onclick = function (){

  for(let i = 0 ; i < 6 ; i++) {
  color.push(arrcolor[Math.floor(Math.random() * arrcolor.length)])
  }
  let finalcolor = ` #${color.join("")}`
  
  console.log(finalcolor)
  document.body.style.backgroundColor = finalcolor
  color =[]
}