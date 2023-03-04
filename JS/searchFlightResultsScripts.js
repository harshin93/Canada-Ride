function getQueryParam(name) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Retrieve query parameters
  var tripType = getQueryParam("tripType");
  var from = getQueryParam("from");
  var to = getQueryParam("to");
  var depart = getQueryParam("depart");
  var returnDate = getQueryParam("return");
  var travellers = getQueryParam("traveller");
  

  // Display the results
  document.getElementById("trip-type").textContent = tripType;
  document.getElementById("from").textContent = from;
  document.getElementById("to").textContent = to;
  document.getElementById("depart").textContent = depart;
  document.getElementById("return").textContent = returnDate;
  document.getElementById("traveller").textContent = travellers;
  var ff = from.substr(from.length-3);
  var tt = to.substr(to.length-3);
  var urlFetch = 'https://timetable-lookup.p.rapidapi.com/TimeTable/' + ff +'/' + tt + '/20230306/';
  
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'somekey',
		'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
	}
};

fetch(urlFetch, options)
    .then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

