export function apiCallDocs(location, doctor) {
  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?location=45.5230%2C-122.413%2C15&user_location=45.5230%2C-122.413&skip=0&limit=10&user_key=${process.env.exports.apiKey}`)
`)
}
