//Auto slideshow
var index = 0;
carousel();

function carousel() {
var i;
var x = document.getElementsByClassName("slides");

for (i = 0; i < x.length; i++) {
	x[i].style.display = "none";  
}
index++;
if (index > x.length) {index = 1}    
	x[index-1].style.display = "block";  
	setTimeout(carousel, 6000);
}



//Smooth scrolling anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener("click", function(e){
		e.preventDefault();
		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior : "smooth"
		});
	});
});


//Email sending
