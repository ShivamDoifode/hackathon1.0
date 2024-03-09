function calculateTravelFootprint() {
  // Constants for emissions factors - illustrative examples
  const flightEmissionFactor = 0.134; // kg CO2 per mile
  const accommodationEmissionFactors = {
    hotel: 20, // kg CO2 per night
    hostel: 10, // kg CO2 per night
    bnb: 15, // kg CO2 per night
  };

  // Fetching user inputs
  const flightDistance = parseFloat(
    document.getElementById("flightDistance").value
  );
  const accommodationType = document.getElementById("accommodation").value;
  const daysStaying = parseInt(document.getElementById("days").value);

  // Calculating emissions
  const flightEmissions = flightDistance * flightEmissionFactor * 2; // Round trip
  const accommodationEmissions =
    daysStaying * accommodationEmissionFactors[accommodationType];

  // Total footprint
  const totalEmissions = flightEmissions + accommodationEmissions;

  // Displaying the result
  document.getElementById(
    "result"
  ).innerText = `Your trip's estimated carbon footprint is ${totalEmissions.toFixed(
    2
  )} kg CO2.`;
}
