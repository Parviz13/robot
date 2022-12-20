// fetch('https://dummyjson.com/users')
// .then(res => res.json())
// .then(data => reload(data.users))

axios.get('https://dummyjson.com/users')
.then(res => reload(res.data.users))
.catch(err => console.log(err))

function showData(item) {
  return `
  <div class="item" id = "${item.id}">
  <div class="title">
    <h3>${item.firstName}</h3>
    <img src="${item.image}" alt="">
    </div>
    <div class="age">
        <p>Age</p>
        <p>${item.age}</p>
    </div>
 </div>
  `
  
}

function reload(data) {
  let under25 = document.querySelector('.under25')
  let under50 = document.querySelector('.under50')
  let others = document.querySelector('.others')
  
   under25.innerHTML = ''
   under50.innerHTML = ''
   others.innerHTML = ''

   for (let item of data)  {
    if (item.age <= 25) {
      under25.innerHTML += showData(item)
    } else if (item.age <= 50) {
      under50.innerHTML += showData(item)
    }else{
      others.innerHTML += showData(item)
    }

   }
}