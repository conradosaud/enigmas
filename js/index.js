$(document).ready(function(){

	$(".card-download").click(function(){
	
		var ref = $(this).attr("rel");
		
		window.location.href="data:application/octet-stream;base64,"+ref;
		
	});
	
});

