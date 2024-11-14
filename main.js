const input = document.getElementById('input')
const ville = document.getElementById('ville')
const temp = document.getElementById('temp')
const max = document.getElementById('max')
const min = document.getElementById('min')
const wind = document.getElementById('wind')
const button = document.getElementById('button')
button.onclick = () =>{
const getData = async () => {
  const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=19ba8ab464ff4579d588462c639c781e`);
  const data = await response.json();
  console.log(data)
 if(data.cod == 200){
ville.innerText = input.value ;
temp.innerText = data.main.temp
max.innerText = data.main.temp_max
min.innerText = data.main.temp_min
wind.innerText = data.wind.speed 
 }
 else {
    ville.innerText = "city not found"
    temp.innerText = 0
max.innerText = 0
min.innerText = 0
wind.innerText = 0 
 }
 } 
 getData()
}
