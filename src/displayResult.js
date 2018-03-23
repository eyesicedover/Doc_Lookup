
export function displayResult(response) {
  if (response.data.length == 0) {
    $("#error").html("<h3>There are no doctors for your needs in your area.</h3>");
  } else {
    for (let i = 0; i < response.data.length; i++) {
      let prefix = response.data[i];
      for (let j = 0; j < prefix.practices.length; j++) {
        if (prefix.practices[j].within_search_area == true) {
          let docFirstName = prefix.profile.first_name;
          let docLastName = prefix.profile.last_name;
          let phone = "";
          let address = "";
          let newPatients = false;
          let website = "none";
          for (let k = 0; k < prefix.practices[j].phones.length; k++) {
            if (prefix.practices[j].phones[k].type == "landline") {
              phone = prefix.practices[j].phones[k].number;
            }
          }
          $("#results").append("<li><b>Name:</b> " + docFirstName + " " + docLastName + "</li>");
          address = prefix.practices[j].visit_address.street + ", " + prefix.practices[j].visit_address.city + ", " + prefix.practices[j].visit_address.state + " " + prefix.practices[j].visit_address.zip;
          newPatients = prefix.practices[j].accepts_new_patients;
          website = "none";
          if (prefix.practices[j].website != null) {
            website = prefix.practices[j].website;
            $("#results").append("<ul><li>Address: " + address + "</li><li>Website: <a href='" + website + "' target='_blank'>CLICK HERE</a></li><li>Accepting New Patients: " + newPatients + "</li><li>Phone: " + phone + "</li></ul>");
          } else {
            $("#results").append("<ul><li>Address: " + address + "</li><li>Website: None </li><li>Accepting New Patients: " + newPatients + "</li><li>Phone: " + phone + "</li></ul>");
          }
        }
      }
    }
  }
}