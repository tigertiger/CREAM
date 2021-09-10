import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
import {BankService} from './js/convert.js';

//   let promise = BankService.convertCash();
//   promise.then(function(response) {
//     const body = JSON.parse(response);
//     let currentRate = $('input#rate').val();
//       if (currentRate === "AED") {
//         let converter = `${body.conversion_rates.AED}`;
//         return converter;
//       } else if (currentRate === "AFN") {
//         let converter = `${body.conversion_rates.AFN}`;
//         return converter;
//       }
//   });

// }

$(document).ready(function() {
  $("#changeMoney").click(function() {
    let dollas = $('#yourCash').val();
    $('#yourCash').val("");
    convert(dollas);

  console.log("what is life?");
  function convert(dollas) {
    let promise = BankService.convertCash(dollas);
    promise.then(function(response) {
      const body = JSON.parse(response);
      // let currentRate = $('input#rate').val();
      // if (currentRate === "AED") {
      //   let converter = `${body.conversion_rates.AED}`;
      //   return converter;
      // } else if (currentRate === "AFN") {
      //   let converter = `${body.conversion_rates.AFN}`;
      //   return converter;
      // }
      let converter = `${body.conversion_rates.AED}`;
      console.log(converter);
      $('.showConversion').html(`${converter * dollas}`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  }
});
  // function findRate() {
});


//

// function findRate() {
//   let promise = BankService.convertCash();
//   promise.then(function(response) {
//     const body = JSON.parse(response);
//     let currentRate = $('input#rate').val();
//     let rateArray = ["AED", "AFN", "USD"];
//     for (let i=0; i<=rateArray.length; i++) {
//       if (currentRate === rateArray[i]) {
//         let converter1 = body.conversion_rates;
//         return converter1;
//       }
//     }
//   });