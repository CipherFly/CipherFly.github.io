$(document).ready( () => {
	//Get form arrays and make an unordered list
	var bookingArr = JSON.parse(localStorage.getItem("booking"));
	//Each form array
	$.each(bookingArr, function(i) {
		$("#list").append("<ul>"); 
		//Each information in the form array
		$.each(bookingArr[i], function(j) {
			$("#list").append("<li>" + this.name + " " + this.value);
		})
	})
});
