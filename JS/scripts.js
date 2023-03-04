function searchFlights() {
    // Get form elements
    var tripType = document.querySelector('input[name="radio"]:checked').value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var depart = document.getElementById("depart").value;
    var returnDate = document.getElementById("return").value;
    var travellers = document.getElementById("traveller").value;
  
    // Redirect to results page with query params
    var url = "searchFlightsResult.html" + "?tripType=" + tripType + "&from=" + from + "&to=" + to + "&depart=" + depart + "&return=" + returnDate + "&traveller=" + travellers;
    window.location.href = url;
  }

