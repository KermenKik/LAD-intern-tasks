/* исправить код таким образом, чтобы при фокусе у инпутов добавлялась красная рамка. Обработка событий должна происходить на formElement. */

var formElement = document.forms['formElement'];

formElement.onfocus = function(evt) {
    var activeElement = formElement.querySelector('.focused');
	if (activeElement) {
	    activeElement.classList.remove('focused');
    }
    evt.target.classList.add('focused');
};

formElement.onblur = function(evt) {
	var activeElement = formElement.querySelector('.focused');
    if (activeElement) {
     	activeElement.classList.remove('focused');   
    }
};