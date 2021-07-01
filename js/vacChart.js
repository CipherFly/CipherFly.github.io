$(document).ready( () => {

	// Initial load
	$.ajax({
		type: "GET", 
		url: "../data/vaccine_doses.json",
		dataType: "json",
		success: JSONchart,
	});		
});

var labels = [];
var previous = [];
var totalDoses = [];
var totalDosesFull = [];
var totalFull = [];

function JSONchart(data) {
	getData(data);
	Pctx = document.getElementById('previousChart');
	TDctx = document.getElementById('tDosesChart');
	TDFullctx = document.getElementById('tDosesFullChart');
	TFullctx = document.getElementById('tFullChart');
	
	previousChart = new Chart(Pctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Previous Day Doses Administered',
          data: previous,
          backgroundColor: "rgba(59, 40, 204, 0.2)",
          borderColor: "rgba(220, 15, 0, 1)",
          borderWidth: 1
        }]
      },
    });
	
	tDosesChart = new Chart(TDctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Total doses adminstered',
          data: totalDoses,
          backgroundColor: "rgba(59, 40, 204, 0.2)",
          borderColor: "rgba(220, 15, 0, 1)",
          borderWidth: 1
        }]
      },
    });
	tDosesFullChart = new Chart(TDFullctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Total Doses In Fully Vaccinated Individuals',
          data: totalDosesFull,
          backgroundColor: "rgba(59, 40, 204, 0.2)",
          borderColor: "rgba(220, 15, 0, 1)",
          borderWidth: 1
        }]
      },
    });
	
	tFullChart = new Chart(TFullctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Total Fully Vaccinated Individuals',
          data: totalFull,
          backgroundColor: "rgba(59, 40, 204, 0.2)",
          borderColor: "rgba(220, 15, 0, 1)",
          borderWidth: 1
        }]
      },
    });
	
}

function getData(data){
	for(let x of data){
		labels.push(x.report_date);
		previous.push(x.previous_day_doses_administered);
		totalDoses.push(x.total_doses_administered);
		totalDosesFull.push(x.total_doses_in_fully_vaccinated_individuals);
		totalFull.push(x.total_individuals_fully_vaccinated);
	}
}
