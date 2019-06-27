
export function TellingTime() {
  var d = new Date();
  var n = d.getHours();
  var stringDate = new Date();
  document.getElementById("demo").innerHTML = d;
  document.getElementById("demo2").innerHTML = n;

  // var inputDate = new Date(inputYear, inputMonth, inputDay, inputHour);
  document.getElementById("demo3").innerHTML = inputDate;


  document.getElementById("demo4").innerHTML = stringDate.toDateString();
  //var dob = $("#born").val();
}
