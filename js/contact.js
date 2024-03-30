document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const form = document.getElementById("form");

    let url = "https://wa.me/7038552848?text=";
    for (const element of form.elements) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        url += element.name + ": " + element.value + "%0a";
      }
    }
    window.open(url, "_blank");
  });
});
