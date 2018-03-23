const displayResult = function(response) {
  if (response.practices.length == 0) {
    $(".results").text("There are no doctors for your needs in your area.")
  } else {
    for (let i = 0; i < response.practices.length)
  }
}
