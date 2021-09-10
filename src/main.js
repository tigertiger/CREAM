import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {BankService} from './js/convert.js';
console.log("what is life?");
function convert(dollas) {
  let promise = BankService.convertCash(dollas);
  promise.then(function(response) {
    const body = JSON.parse(response);
    let currentRate = $('select#rate').val();
    let rateArray = [];
    if (currentRate === "AED") {
      rateArray.push(`${body.conversion_rates.AED}`, "UAE Dirham");
    } else if (currentRate === "AFN") {
      rateArray.push(`${body.conversion_rates.AFN}`, "Afghan Afghanis");
    }
    else if (currentRate === "BMD") {
      rateArray.push(`${body.conversion_rates.BMD}`, "Bermudian Dollars");
    }
    else if (currentRate === "BOB") {
      rateArray.push(`${body.conversion_rates.BOB}`, "Bolivian Boliviano");
    }
    else if (currentRate === "FKP") {
      rateArray.push(`${body.conversion_rates.FKP}`, "Falkland Islands Pounds");
    } 
    else {
      rateArray.push(NaN, "Your Requested Currency Doesn't Exist");
    }
    let converter = rateArray[0].toString();
    let currency = rateArray[1].toString();
    console.log(rateArray);
    $('.showConversion').html(`${(converter * dollas) + " " + currency }`);
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
});