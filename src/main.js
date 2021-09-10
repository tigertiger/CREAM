import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
import {BankService} from './js/convert.js';


function convert(dollas) {
  let promise = BankService.convertCash(dollas);
  promise.then(function(response) {
    const body = JSON.parse(response);
    $('.showConversion').text(`${body.conversion_rates.USD * dollas}`);
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error}`);
  });
}

$(document).ready(function() {
  $("#changeMoney").click(function() {
    let dollas = $('#yourCash').val();
    $('#yourCash').val("");
    convert(dollas);
  });
  console.log("what is life?");
});