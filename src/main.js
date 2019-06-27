// import { TellingTime } from './Time.js';
import './styles.css';

$(document).ready(function() {


  // $("#sub").click(function(event) {
  //   event.preventDefault();
    // console.log(typeof inputtedMonth);
    // console.log(inputtedMonth);
    $("#submit").click(function(event) {
      event.preventDefault();
      // debugger;
    var date = new Date(inputtedMonth);
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = days[date.getDay()];
    console.log(day);
    var inputtedMonth = $("#month").val();
    var inputtedDay = $("#day").val();
    var inputtedYear = $("#year").val();
    console.log("inputtedday " + inputtedDay);
    var userDateString = (inputtedMonth + inputtedDay + inputtedYear).toString();
    userDateString = new Date(inputtedYear, inputtedMonth, inputtedDay);
    console.log("user date string " + userDateString);

    // var newDate = new Date(userDateString);
    // var stringDate = new Date();

    $("#demo4").text(userDateString);
  });
});
