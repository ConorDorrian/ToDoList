//JQuery
//check off(line through for text)
$('ul').on('click', 'li', function(){

	$(this).toggleClass('complete')//getting this from css file
});

//**************************************************************************************
//click X button to remove item

$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(600, function(){//.parent removes the line that the span is in.so li is deleted

		$(this).remove();
	})	
	event.stopPropagation(); //stops bubbling of elements, selects span and not li
})


//**************************************************************************************
//Creating a new Todo item

$("input[type = 'text']").keypress(function(event){

	if(event.which === 13){
		//grabbing text from input
		var text = $(this).val();
		//then makes text empty
		$(this).val('');

		//creates new li and adds it to <ul>
		$('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + text +'</li>');
	}
})


//**************************************************************************************
//Show and hide input through + sign

$('.fa-plus').click(function(){
	$("input[type = 'text']").fadeToggle();
})




