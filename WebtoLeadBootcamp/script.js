function formsubmission(event) {
  let ouputDate = document.querySelector(".outputDate");
  let inputDate = document.querySelector(".inputDate");
  console.log("inputDate", inputDate.value); // string to Date form (en_IN)
  let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
  ouputDate.value = formattedDate;
}
