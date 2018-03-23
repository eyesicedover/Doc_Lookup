import { displayResult } from './../src/displayResult';

export function apiCallDocs(name) {
  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.5230%2C-122.413%2C25&user_location=45.5230%2C-122.413&skip=0&limit=20&user_key=${process.env.exports.apiKey}`).then(function(response) {
    displayResult(response);
  })
    .fail(function() {
      $(".error").text("There was an error with your request.");
    });
}

export function apiCallSearch(term) {
  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${term}&location=45.5230%2C-122.413%2C25&user_location=45.5230%2C-122.413&skip=0&limit=20&user_key=${process.env.exports.apiKey}`).then(function(response) {
    displayResult(response);
  })
    .fail(function() {
      $(".error").text("There was an error with your request.");
    });
}
