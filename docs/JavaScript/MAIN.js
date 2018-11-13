$( document ).ready(function() 
{
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
	
	ScrollReveal({ reset: false });
	ScrollReveal().reveal('.recentlyReleased', { delay: 500});
	
	$("#MainSearchBar").on("keyup", function() 
	{
		var value = $(this).val().toLowerCase();
		$("#movieData tr").filter(function() 
		{
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
  	});
})

var intervalTimer;
var homeIntervalTimer;
function loginInterval()
{
	intervalTimer = setInterval(function areULoggedIn()
	{
		var imgInti = new Image();   // Create new image element
		var dInti=new Date();
		imgInti.src="https://myschool.dulwich-beijing.cn/pluginfile.php/41814/course/section/5555/IMG230.jpg?"+dInti.getTime();
		imgInti.onload = function(){
		 	self.location = "Pages/Home.html"
		};
	},1000)
}
function loginInterval2()
{
	homeIntervalTimer = setInterval(function areULoggedIn()
	{
		var imgInti = new Image();   // Create new image element
		var dInti=new Date();
		imgInti.src="https://myschool.dulwich-beijing.cn/pluginfile.php/41814/course/section/5555/IMG230.jpg?"+dInti.getTime();
		imgInti.onerror = function(){
		 	self.location = "/dcbmovies/index.html"
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
var opened = false;
function searchNow()
{	
	if(opened==false)
	{
		$("#searchSquare").addClass("newSquareDimentions");
		$("#searchSquare").removeClass("oldSquareDimentions");
		$("body").addClass("noScroll");
		$("#MainSearchBar").addClass("show")
		$("#MainSearchBar").removeClass("hide")
		PopulateDatabase();
		opened = true;
		
	}
	else if(opened == true)
	{
		$("#searchSquare").addClass("oldSquareDimentions");
		$("#searchSquare").removeClass("newSquareDimentions");
		$("body").removeClass("noScroll");
		$("#MainSearchBar").addClass("hide")
		$("#MainSearchBar").removeClass("show")
		hideDatabase();
		opened=false;
	}
	
}
function openSearch()
{
	$("#searchSquare").addClass("newSquareDimentions");
		$("#searchSquare").removeClass("oldSquareDimentions");
		$("body").addClass("noScroll");
		$("#MainSearchBar").addClass("show")
		$("#MainSearchBar").removeClass("hide")
		PopulateDatabase();
		opened = true;
}

function PopulateDatabase()
{
	$("#MainSearchBar").val("");
	jQuery.get('/dcbmovies/Pages/MovieDatabase.csv', function(data) // getting the file
	{     
		var movie_data = data.split(/\r?\n|\r/);
		var table_data = '<table class="table table-bordered table-striped whiteColorTable table-hover">';
		console.log(movie_data)
		for(var count = 0; count<movie_data.length; count++)
		{
			var cell_data = movie_data[count].split(",");
			
			if(count == 1)
			{
				table_data += '<tbody id="movieData">'
			}
		 	table_data += '<tr>';
		 	for(var cell_count=0; cell_count<cell_data.length; cell_count++)
			{
				if(count === 0)
				{
					table_data += '<th>'+cell_data[cell_count]+'</th>';
				}
				else
				{
					if(cell_count===3)
					{
						table_data += '<td><a href='+cell_data[cell_count]+'>Go To Video</a></td>';
					}
					else
					{
						table_data += '<td>'+cell_data[cell_count]+'</td>';
					}
					
				}
			}
			table_data += '</tr>';
		}
		table_data += '</tbody>'
		table_data += '</table>';
		$('#movieTableDiv').html(table_data);
	}); 
	
}

function hideDatabase()
{
	$('#movieTableDiv').html("");
	$("#MainSearchBar").val("");
}

function categorySearch(category)
{
	openSearch()
	$("#MainSearchBar").val(category);
	window.setTimeout(function(){
		$("#movieData tr").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(category.toLowerCase()) > -1)
    	});
	},1000);
	
}

function minimizedCloseSearch()
{
	if(opened == true)
	{
		$("#searchSquare").addClass("oldSquareDimentions");
		$("#searchSquare").removeClass("newSquareDimentions");
		$("body").removeClass("noScroll");
		$("#MainSearchBar").addClass("hide")
		$("#MainSearchBar").removeClass("show")
		hideDatabase();
		opened=false;
	}
}