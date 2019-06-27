// import { TellingTime } from './Time.js';
import './styles.css';

$(document).ready(function() {


  $("#sub").click(function(event) {
    event.preventDefault();
    var inputtedMonth = $("#choose").val();
    console.log(typeof inputtedMonth);
    console.log(inputtedMonth);

    var date = new Date(inputtedMonth);
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = days[date.getDay()];
    console.log(day);

    // var stringDate = new Date();

    $("#demo3").text(date);
  });
});
