import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {BankService} from './js/convert.js';


// function convert(dollas) {
//   let promise = BankService.convertCash(dollas);
//   promise.then(function(response) {
//     const body = JSON.parse(response);
//     let currentRate = $('select#rate').val();
//     let rateArray = [];
//     if (currentRate === "AED") {
//       rateArray.push(`${body.conversion_rates.AED}`, "UAE Dirham");
//     } else if (currentRate === "AFN") {
//       rateArray.push(`${body.conversion_rates.AFN}`, "Afghan Afghanis");
//     }
//     else if (currentRate === "BMD") {
//       rateArray.push(`${body.conversion_rates.BMD}`, "Bermudian Dollars");
//     }
//     else if (currentRate === "BOB") {
//       rateArray.push(`${body.conversion_rates.BOB}`, "Bolivian Boliviano");
//     }
//     else if (currentRate === "FKP") {
//       rateArray.push(`${body.conversion_rates.FKP}`, "Falkland Islands Pounds");
//     } 
//     else {
//       rateArray.push(NaN, "Your Requested Currency Doesn't Exist");
//     }
//     let converter = rateArray[0].toString();
//     let currency = rateArray[1].toString();
//     $('.showConversion').html(`${(converter * dollas).toFixed(2) + " " + currency }`);
//   }, function(error) {
//     $('.showErrors').text(`There was an error processing your request: ${error}`);
//   });
// }

// $(document).ready(function() {
//   $("#changeMoney").click(function() {
//     let dollas = $('#yourCash').val();
//     $('#yourCash').val("");
//     $("#showOriginal").show();
//     $("#showOriginal").prepend(dollas + " ");
//     convert(dollas);
//   });
// });


function convert(dollas) {
  let promise = BankService.convertCash(dollas);
  promise.then(function(response) {
    const body = JSON.parse(response);
    let currentRate = $('select#rate').val();
    let rateArray = [];
    let startCurr = $('select#curr').val();
    let currArray = [];
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
    // start currency array builder
    if (startCurr === "AED") {
      currArray.push(`${body.conversion_rates.AED}`, "UAE Dirham");
    } else if (startCurr === "AFN") {
      currArray.push(`${body.conversion_rates.AFN}`, "Afghan Afghanis");
    }
    else if (startCurr === "BMD") {
      currArray.push(`${body.conversion_rates.BMD}`, "Bermudian Dollars");
    }
    else if (startCurr === "BOB") {
      currArray.push(`${body.conversion_rates.BOB}`, "Bolivian Boliviano");
    }
    else if (startCurr === "FKP") {
      currArray.push(`${body.conversion_rates.FKP}`, "Falkland Islands Pounds");
    } 
    else if (startCurr === "USD") {
      currArray.push(`${body.conversion_rates.USD}`, "United States Dollars");
    }
    // end currency array builder
    let converter = rateArray[0].toString();
    let convertible = currArray[0].toString();
    let startCurrency = currArray[1].toString();
    let newCurrency = rateArray[1].toString();
    $('.showConversion').html(`${(converter * (dollas * convertible)).toFixed(2) + " " + newCurrency}`);
    $("#showOriginal").text(dollas + " " + startCurrency + " is");
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error}`);
  });
}

$(document).ready(function() {
  $("#changeMoney").click(function() {
    location.reload;
    $("#showBlock").show();
    let dollas = $('#yourCash').val();
    $('#yourCash').val("");
    convert(dollas);
  });
});