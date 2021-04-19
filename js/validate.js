function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  //console.log('TODO - validate the longitude, latitude values before submitting');

  let latitude = document.getElementById("latitude");
  latitude.innerText = "*";
  let longitude = document.getElementById("longitude");
  longitude.innerText = "*";

  let x = document.forms["aForm"]["latitude"].value;
  let y = document.forms["aForm"]["longitude"].value;

  let flag = 0;

  if (!(x <= 90 && x >= -90)) {
    latitude.innerText += " must be a valid latitude (-90 to 90)";
    flag = 1;
  }

  if (!(y <= 180 && y >= -180)) {
    longitude.innerText += " must be a valid longitude (-180 to 180)";
    flag = 1;
  }

  if (flag == 1) return false;
  else return true;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
