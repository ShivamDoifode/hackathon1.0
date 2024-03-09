function calculateFootprint() {
  var transport = document.getElementById("transport").value;
  var distance = parseFloat(document.getElementById("distance").value);
  var duration = parseInt(document.getElementById("duration").value);
  var footprint;

  switch (transport) {
    case "car":
      footprint = distance * 0.4; // assuming 0.4 lbs of CO2 per mile for car
      break;
    case "bus":
      footprint = distance * 0.2; // assuming 0.2 lbs of CO2 per mile for bus
      break;
    case "train":
      footprint = distance * 0.1; // assuming 0.1 lbs of CO2 per mile for train
      break;
    case "plane":
      footprint = distance * 0.5; // assuming 0.5 lbs of CO2 per mile for plane
      break;
    default:
      break;
  }

  var totalFootprint = footprint * duration;
  document.getElementById("result").innerHTML =
    "Estimated carbon footprint for your vacation: " +
    totalFootprint.toFixed(2) +
    " lbs of CO2.";
}
