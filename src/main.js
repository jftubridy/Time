import { TellingTime } from './Time.js';
import './styles.css';

//front-end
$(document).ready(function() {


  // $("#sub").click(function(event) {
  //   event.preventDefault();
    // console.log(typeof inputtedMonth);
    // console.log(inputtedMonth);
    $("#submit").click(function(event) {
      event.preventDefault();
      // debugger;
    // let date = new Date(inputtedMonth);
    // const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // let day = days[date.getDay()];
    // console.log(day);
    let inputtedMonth = $("#month").val();
    let inputtedDay = $("#day").val();
    let inputtedYear = $("#year").val();

    // TellingTime(inputtedYear, inputtedMonth, inputtedDay);
    // console.log("inputtedday " + inputtedDay);
    // let userDateString = (inputtedMonth + inputtedDay + inputtedYear).toString();
    // userDateString = new Date(inputtedYear, inputtedMonth, inputtedDay);
    // console.log("user date string " + userDateString);


    // var newDate = new Date(userDateString);
    // var stringDate = new Date();

    //TellingTime();
    // $("#demo4").text(userDateString);
    $("#demo4").text(TellingTime(inputtedYear, inputtedMonth, inputtedDay));
  });
});
