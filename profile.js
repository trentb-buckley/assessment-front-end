let favColorBtn = document.querySelector('#color')
let favPlaceBtn = document.querySelector('#place')
let favRitualBtn = document.querySelector('#ritual')

favColor = () => {
    alert('My favorite color is green')
}
favPlace = () => {
    alert('My favorite place is Utah')
}
favRitual = () => {
    alert('My favorite ritual is playing disc golf')
}

favColorBtn.addEventListener('click', favColor)
favPlaceBtn.addEventListener('click', favPlace)
favRitualBtn.addEventListener('click', favRitual)

