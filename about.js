console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully');
}
function mouseOverPic() {
	alert("Give the user a compliment")
}
let catPic = document.querySelector('.cat-photo')
catPic.addEventListener('mouseover', mouseOverPic)


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
// form.addEventListener('mouseover', handleSubmit)