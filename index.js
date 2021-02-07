const phone = document.querySelector("#phone");
const isim = document.querySelector("#name");
const feedback = document.querySelector(".feedback");
const gender = document.getElementsByName("gender");
const products = document.querySelectorAll("#products");
const date = document.querySelector("#date");
const submit = document.querySelector("#submit");
const form = document.querySelector("#form");
//Name Validation**********************************************

isim.addEventListener("keyup", function () {
  const min_chars = 6;
  const max_chars = 12;
  if (/[^a-zA-Z\ö\ç\ş\ı\ğ\ü\Ö\Ç\Ş\İ\Ğ\Ü\ ]/.test(isim.value)) {
    feedback.innerHTML = "İsim özel karakter içermemelidir!";
    isim.value = isim.value.substring(0, isim.value.length -1);
  } else if (isim.value.length<min_chars) {
    feedback.innerHTML = "İsim uzunluğu en az 6 karakter olmalıdır!";
  } else if (isim.value.length>=max_chars) {
    feedback.innerHTML = "İsim uzunluğu en fazla 12 karakter olmalıdır!";
  } else {
    feedback.innerHTML = "";
  };
 });

 // Getting the value of the radio buttons and tweaking the select list********************************

gender.forEach(el => {
 el.addEventListener("change", function (ev) {
  genderType = ev.target.value;

  let items;

  if (genderType === "erkek") {
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
  const adSoyad = isim.value;
  const cinsiyet = genderType;
  const productType = products[0].options[products[0].selectedIndex].value;
  const tarih =  date.value.split('-').reverse().join('-');
  const telefon = phone.value;
  
  console.log(`Adı-Soyadı: ${adSoyad}`);
  console.log(`Cinsiyet: ${cinsiyet}`);
  console.log(`Ürün: ${productType}`);
  console.log(`Tarih: ${tarih}`);
  console.log(`Telefon: ${telefon}`);
});
