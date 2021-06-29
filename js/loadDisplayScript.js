class Vaccine {
	constructor (report_date, previous, administered, full_doses, total_full_doses) {
		this.report_date = report_date; 
		this.previous_day_doses_administered = previous;
		this.total_doses_administered = administered;
		this.total_doses_in_fully_vaccinated_individuals = full_doses;
		this.total_individuals_fully_vaccinated = total_full_doses;
	}

}

$(document).ready( () => {

	// Initial load
	$.ajax({
		type: "GET", 
		url: "../data/vaccine_doses.json",
		dataType: "json"	
	});	
	
});  

//When load data is clicked then store in local storage
$("#load").on("click", function() {
	localStorage.clear();
	$.getJSON("../data/vaccine_doses.json", function(data) {
		for (let v of data) {
			let vac = new Vaccine(v.report_date, v.previous_day_doses_administered, v.total_doses_administered
			, v.total_doses_in_fully_vaccinated_individuals, v.total_individuals_fully_vaccinated);
			
			localStorage.setItem(v.report_date, JSON.stringify(vac));	
		}
	});
	$("#message").html("Data loaded");
});




//When display data is click the print list of dates
$("#display").on("click", function() {
	$("#message").html("");
	let keyList = new Array();
	for (let i = 0; i < localStorage.length; i++){
		keyList.push(localStorage.key(i));
	}
	keyList.sort();
	$("#displayTitle").html("Summary of Total Vaccine Doses Administered in Ontario"); 
	$("#dateList").html("")
	$.each(keyList, function(index, value) {
		$("#dateList").append("<li>"+value);
	});

	//When user clicks one of the dates
	$("#dateList li").click(function(){
	
	let date = $(this);
	let details = JSON.parse(localStorage.getItem(date.text()));
	$("#contentTitle").html("Vaccine Doses Detail Information");
	$("#date").html("Report Date: "+details.report_date);
	$("#previous").html("Previous Day Doses Administered: "+details.previous_day_doses_administered);
	$("#administered").html("Total Doses Administered: "+details.total_doses_administered);
	$("#full_doses").html("Total Doses In Fully Vaccinated Individuals: "+details.total_doses_in_fully_vaccinated_individuals);
	$("#total_full_doses").html("Total Individuals Fully Vaccinated: "+details.total_individuals_fully_vaccinated);
	});
});