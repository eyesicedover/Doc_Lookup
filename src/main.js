import { apiCallDocs, apiCallSearch } from './../src/apiCall';

import './styles.css';


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("ul").empty();
    let search = $("#search").val();
    let term = $("input#term").val();
    if (search == "name") {
      apiCallDocs(term);
    } else {
      apiCallSearch(term);
    }
    $("#answer").show(1000);
  });
});
