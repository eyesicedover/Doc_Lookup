const displayResult = function(response) {
  if (response.length == 0) {
    $(".error").text("There are no doctors for your needs in your area.")
  } else {
    for (let i = 0; i < response.data.length; i++) {
      let prefix = response.data[i];
      let docFirstName = prefix.profile.first_name;
      let docLastName = prefix.profile.last_name;
      let website = "none";
      let address = ""
      let phone = ""
      let newPatients =
      for (let j = 0; j < prefix.practices.length; j++) {
        if (prefix.practices[j].within_search_area == true) {
          address = prefix.practices[j].visit_address.street + ", " + prefix.practices[j].visit_address.city + ", " + prefix.practices[j].visit_address.state + " " +prefix.practices[j].visit_address.zip;
        }
        for (let k = 0; k < prefix.practices[j].phones.length) {
          if (prefix.practices[j].phones[k].type == "landline") {
            phone =
          }
        }

      }
    }
  }
}
