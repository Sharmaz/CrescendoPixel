$(document).ready(menu);

function menu(){
	$('.navicon').click(function (){
		$('.Menu').slideToggle();
		return false;
	});
}
