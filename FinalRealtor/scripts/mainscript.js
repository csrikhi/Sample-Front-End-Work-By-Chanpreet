$(document).ready(function(){
	
	$('.full-width ').fullWidth()
	.on('fws.start', function(e, data){
		/*console.log( 'Moving '+ data.direction +' from slide '+ data.status.previous +' to slide '+ data.status.current );*/
	})
	.on('fws.finish', function(e, data){
		/*console.log( 'Moved from slide ' + data.status.previous + ' to slide ' + data.status.current );*/
	});


});