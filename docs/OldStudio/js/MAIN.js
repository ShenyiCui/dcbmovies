
function toggleMenu() {
    document.getElementById("myDropdown").classList.toggle("show");	
	goOut();
}

var imgInti = new Image();   // Create new image element
var dInti=new Date();
setInterval(function areULoggedIn()
{
	imgInti.src="https://myschool.dulwich-beijing.cn/pluginfile.php/1/theme_titus/pageheaderimage/1538197502/IMG_5399.JPG?"+dInti.getTime();
	imgInti.onerror = function(){
		location.href = "/index.html";
	};
},1000)