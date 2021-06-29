$(document).ready( () => {
	//When submit is clicked convert form to an array and append it to the local storage
	$('#bookingForm').submit(function() {
		var bForm = $(this).serializeArray();
		var bForm2 = JSON.parse(localStorage.getItem("booking")) || [];
		bForm2.push(bForm);
		localStorage.setItem("booking",JSON.stringify(bForm2));
	});
});