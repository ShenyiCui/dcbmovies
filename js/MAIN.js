

function toggleMenu() {
    document.getElementById("myDropdown").classList.toggle("show");	
	goOut();
}

function goOut()
{
	$("#myDropdown").animate({left: '0%'},500);
}
function goBack()
{
	$("#myDropdown").animate({left: '-300%'},500);
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-content') && !event.target.matches('.dontClose')) {
    goBack()
	setTimeout(hideMenu,500);
  }
}

function hideMenu()
{
	var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
		  openDropdown.classList.toggle('show');	
      }
    }
}
setInterval(function areULoggedIn()
		{
			var img = new Image();   // Create new image element
			var d=new Date();
			img.src="https://myschool.dulwich-beijing.cn/pluginfile.php/41814/course/section/5555/IMG_4742%255b2%255d.jpg?"+d.getTime();

			img.onError = function(){
			  location.href = "/index.html";
			};
		},1000)