

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