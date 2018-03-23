export function apiCallDocs() {
  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?t&location=45.5230%2C-122.413%2C25&user_location=45.5230%2C-122.413&skip=0&limit=30&user_key=${process.env.exports.apiKey}`).then(function(response) {
    displayResult(response);
  })
    .fail(function(error) {
      $(".error").text("There was an error with your request. Error: ${error}");
    });
}
