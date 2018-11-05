$( document ).ready(function() {
    console.log( "ready!" );
	
	$("#enterSite").click(function() {
    $('html, body').animate({
			scrollTop: $("#frontPageLogin").offset().top
		}, 1000);
	});

	$("#backToTitle").click(function() {
    $('html, body').animate({
			scrollTop: $("#top").offset().top
		}, 500);
	});
	
	$(window).scroll(function(){
		$("#TitleCard").css("opacity", 1 - $(window).scrollTop() / 250);
	  });

	ScrollReveal({ reset: true });
	ScrollReveal().reveal('.login', { delay: 500});
})

var intervalTimer;
function loginInterval()
{
	intervalTimer = setInterval(function areULoggedIn()
	{
		var imgInti = new Image();   // Create new image element
		var dInti=new Date();
		imgInti.src="https://myschool.dulwich-beijing.cn/pluginfile.php/41814/course/section/5555/IMG230.jpg?"+dInti.getTime();
		imgInti.onload = function(){
		  console.log("logged in")	
		};
	},1000)
}
function stopTimer()
{
	clearInterval(intervalTimer);
}
function MySchool()
{
	window.open("https://myschool.dulwich-beijing.cn/login/index.php")
}