

function prev(){
		document.getElementById('slider-container').scrollLeft -= 1530;
}

function next()
{
		document.getElementById('slider-container').scrollLeft += 1530;
}


$(".slide img").on("click" , function(){
	$(this).toggleClass('zoomed');
	$(".overlay").toggleClass('active');
})
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '10';
    e.target.elements.email.value = '10';
    e.target.elements.message.value = '10';
  });
