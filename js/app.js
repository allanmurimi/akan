// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//     'use strict'

//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     let form = document.querySelector('.needs-validation')

//     // Loop over them and prevent submission
//     // Array.prototype.slice.call(form)
//     //   .forEach(function (form) {
//     //     form.addEventListener('submit', function (event) {
//     //       if (!form.checkValidity()) {
//     //         event.preventDefault()
//     //         event.stopPropagation()
//     //       }

//     //       form.classList.add('was-validated')
//     //     }, false)
//     //   })

//       form.addEventListener('submit', (event) => {
//         if (!form.checkValidity()) {
//             event.preventDefault()
//             event.stopPropagation()
//           }
//           form.classList.add('was-validated')
//       },false)

//   })()
let form = document.querySelector(".needs-validation");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();

  const dateInput = document.getElementById("date");
  const selectInput = document.getElementById("options");

  if (selectInput.value === "Male") {
    const CC = parseInt(dateInput.value.substring(0, 2));
    const YY = parseInt(dateInput.value.substring(2, 4));
    const MM = parseInt(dateInput.value.substring(5, 7));
    const DD = parseInt(dateInput.value.substring(8, 10));

    let d =
      (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
    
    const day = Math.ceil(d);
   
    let weekday = [
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame",
    ][day];

    const content = document.querySelector('#content');
    content.textContent = weekday;

  } else {
    const CC = parseInt(dateInput.value.substring(0, 2));
    const YY = parseInt(dateInput.value.substring(2, 4));
    const MM = parseInt(dateInput.value.substring(5, 7));
    const DD = parseInt(dateInput.value.substring(8, 10));

    let d =
      (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
    
    const day = Math.ceil(d);
   
    let weekday = [
      "Akosua",
      "Adwoa",
      "Abenaa",
      "Akua",
      "Yaa",
      "Afua",
      "Ama",
    ][day];

    const content = document.querySelector('#content');
    content.textContent = weekday;

  }
});
