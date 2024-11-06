// // Get all checkboxes with the class .toggleCheckbox
// const checkboxes = document.querySelectorAll(".day__checkbox");

// // Loop through each checkbox and add an event listener
// checkboxes.forEach((checkbox) => {
//   checkbox.addEventListener("change", () => {
//     // Find the parent container of the checkbox
//     const container = checkbox.closest(".day");

//     // Find the target element within the same container
//     const targetElement = container.querySelector(".day__content");

//     // Toggle the 'active' class on the target element based on checkbox status
//     if (checkbox.checked) {
//       targetElement.classList.add("active");
//     } else {
//       targetElement.classList.remove("active");
//     }
//   });
// });

// Get all checkboxes with the class .toggleCheckbox
const checkboxes = document.querySelectorAll(".day__checkbox");

// Loop through each checkbox and add an event listener
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    // Get the parent element of the checkbox
    const parent = checkbox.parentElement;

    // Toggle the 'active' class on the parent element based on checkbox status
    if (checkbox.checked) {
      parent.classList.add("active");
    } else {
      parent.classList.remove("active");
    }
  });
});
