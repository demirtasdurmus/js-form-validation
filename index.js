const phone = document.querySelector("#phone");
const userName = document.querySelector("#name");
const feedback = document.querySelector(".feedback");
const gender = document.getElementsByName("gender");
const products = document.querySelectorAll("#products");
const date = document.querySelector("#date");
const submit = document.querySelector("#submit");
const form = document.querySelector("#form");
//Name Validation**********************************************

userName.addEventListener("keyup", function () {
  const min_chars = 6;
  const max_chars = 12;
  if (/[^a-zA-Z\ö\ç\ş\ı\ğ\ü\Ö\Ç\Ş\İ\Ğ\Ü\ ]/.test(userName.value)) {
    feedback.innerHTML = "Should'nt include speacial characters!";
    userName.value = userName.value.substring(0, userName.value.length -1);
  } else if (userName.value.length<min_chars) {
    feedback.innerHTML = "Should have a min length of 6 characters!";
  } else if (userName.value.length>=max_chars) {
    feedback.innerHTML = "Should have a max length of 12 characters!";
  } else {
    feedback.innerHTML = "";
  };
 });

 // Getting the value of the radio buttons and tweaking the select list********************************

gender.forEach(el => {
 el.addEventListener("change", function (ev) {
  genderType = ev.target.value;

  let items;

  if (genderType === "male") {
    products[0].options.length = 0;
    items= ["Coat", "Belt", "Pants", "Tie"];

  } else {
    products[0].options.length = 0;
    items = ["Blouse", "Tweezers", "Scissors", "Bag"];

  };

  for (var i = 0; i < items.length; i++){
    let item = items[i];
    let element = document.createElement("option");
    element.innerText = item;
    products[0].append(element);
  }
 })
});

// Date validation*****************************************



//Phone Validation***(X XXX XXX XX XX)*************************************

phone.addEventListener('input', function (e) {

  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

  e.target.value = !x[2] ? x[1] : ' ' + x[1] + ' ' + x[2] + (x[3] ? ' ' + x[3] : '') + (x[4] ? ' ' + x[4] : '') + (x[5] ? ' ' + x[5] : '');

});

//Getting and storing values*********************************************

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const userName = userName.value;
  const gender = genderType;
  const productType = products[0].options[products[0].selectedIndex].value;
  const date =  date.value.split('-').reverse().join('-');
  const phone = phone.value;
  
  console.log(`Adı-Soyadı: ${userName}`);
  console.log(`Cinsiyet: ${gender}`);
  console.log(`Ürün: ${productType}`);
  console.log(`Tarih: ${date}`);
  console.log(`Telefon: ${phone}`);
});
