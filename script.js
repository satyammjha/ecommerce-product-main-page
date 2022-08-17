let cartlogo = document.getElementById("cart");
let cartitem = document.getElementById("clickoncart");
let cartcontent = document.getElementById("cartcontent");
let btn = document.getElementById("btn");
let emptycartmsg = document.getElementById("emptycartmsg");
let deletelogo = document.getElementById("delete");
let reducequan = document.getElementById("reducequan");
let productquantity = document.getElementById("productquantity");
let addquan = document.getElementById("addquan");
let orderlimit = document.getElementById("orderlimit");
let finalpricecalc = document.getElementById("finalpricecalc");
let finalcartprice = document.getElementById("finalcartprice");
let mainimg = document.getElementById("mainimg");
let smallimg1 = document.getElementById("smallimg1");
let smallimg2 = document.getElementById("smallimg2");
let smallimg3 = document.getElementById("smallimg3");
let smallimg4 = document.getElementById("smallimg4");
let cross = document.getElementById("cross");
let dotcontainer = document.getElementById("dotcontainer");
let checkout = document.getElementById("checkout");

smallimg1.addEventListener("click", changeimg1);
smallimg2.addEventListener("click", changeimg2);
smallimg3.addEventListener("click", changeimg3);
smallimg4.addEventListener("click", changeimg4);
cartlogo.addEventListener("click", displaycart);
btn.addEventListener("click", displaycartcontent);
deletelogo.addEventListener("click", deletecartitem);
addquan.addEventListener("click", increasequant);
reducequan.addEventListener("click", decreasequant);
mainimg.addEventListener("click", displayslideshow);
cross.addEventListener("click", hideslideshow);

function displaycart() {
  if (cartitem.style.display != "block") {
    cartitem.style.display = "block";
  } else {
    cartitem.style.display = "none";
  }
}

function displaycartcontent() {
  if (productquantity.innerHTML == 0) {
    orderlimit.innerHTML = "Add minimum 1 quantity";
    orderlimit.style.display = "block";
  } else {
    emptycartmsg.style.display = "none";
    cartcontent.style.display = "flex";
    finalpricecalc.innerHTML = `$125.00✕${finalquantity} = `;
    finalcartprice.innerHTML = `$${finalquantity * 125.0}`;
    checkout.style.display = "block";
  }
}

function deletecartitem() {
  emptycartmsg.style.display = "block";
  cartcontent.style.display = "none";
  orderlimit.style.display = "none";
  productquantity.innerHTML = "0";
  checkout.style.display = "none";
}
function increasequant() {
  if (parseInt(productquantity.innerHTML) < 10) {
    productquantity.innerHTML = parseInt(productquantity.innerHTML) + 1;
    orderlimit.style.display = "none";
    finalquantity = productquantity.innerHTML;
    finalpricecalc.innerHTML = `$125.00✕${finalquantity} = `;
    finalcartprice.innerHTML = `$${finalquantity * 125.0}`;
  } else {
    orderlimit.innerHTML = "Max 10 quantities";
    orderlimit.style.display = "block";
  }
}

function decreasequant() {
  if (parseInt(productquantity.innerHTML) > 0) {
    productquantity.innerHTML = parseInt(productquantity.innerHTML) - 1;
    finalquantity = productquantity.innerHTML;
    orderlimit.style.display = "none";
    finalpricecalc.innerHTML = `$125.00✕${finalquantity} = `;
    finalcartprice.innerHTML = `$${finalquantity * 125.0}`;
  } else {
    orderlimit.innerHTML = "Minimum 1 quantity";
    orderlimit.style.display = "block";
    cartcontent.style.display = "none";
    emptycartmsg.style.display = "block";
  }
}
function changeimg1() {
  mainimg.src = "./Images/image-product-1.jpg";
  smallimg1.classList.add("activeimg");
  smallimg2.classList.remove("activeimg");
  smallimg3.classList.remove("activeimg");
  smallimg4.classList.remove("activeimg");
}
function changeimg2() {
  mainimg.src = "./Images/image-product-2.jpg";
  smallimg1.classList.remove("activeimg");
  smallimg2.classList.add("activeimg");
  smallimg3.classList.remove("activeimg");
  smallimg4.classList.remove("activeimg");
}
function changeimg3() {
  mainimg.src = "./Images/image-product-3.jpg";
  smallimg1.classList.remove("activeimg");
  smallimg2.classList.remove("activeimg");
  smallimg3.classList.add("activeimg");
  smallimg4.classList.remove("activeimg");
}
function changeimg4() {
  mainimg.src = "./Images/image-product-4.jpg";
  smallimg1.classList.remove("activeimg");
  smallimg2.classList.remove("activeimg");
  smallimg3.classList.remove("activeimg");
  smallimg4.classList.add("activeimg");
}

function displayslideshow() {
  document.getElementById("slideshow-container").style.visibility = "visible";
  cross.style.display = "block";
  dotcontainer.style.visibility = "visible";
}

function hideslideshow() {
  document.getElementById("slideshow-container").style.visibility = "hidden";
  cross.style.display = "none";
  dotcontainer.style.visibility = "hidden";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function myFunction(x) {
  x.classList.toggle("change");
}
