let hmenuicon = document.getElementById("hmenuicon");
let sidenav = document.getElementById("sidenav");
let sbclose = document.getElementById("sbclose");

hmenuicon.addEventListener("click", function () {
  sidenav.style.right = 0;
});

sbclose.addEventListener("click", function () {
  sidenav.style.right = "-80%";
});

// search option

let search = document.getElementById("search");
let container = document.getElementById("div-container");
let sel = container.querySelectorAll("div");
console.log(sel);
search.addEventListener("keyup", function (event) {
  let capturedvalue = event.target.value.toUpperCase();
  console.log(capturedvalue);
  for (i = 0; i < sel.length; i++) {
    let productname = sel[i].querySelector("h1").textContent;
    if (productname.toUpperCase().indexOf(capturedvalue) < 0) {
      sel[i].style.display = "none";
    } else {
      sel[i].style.display = "block";
    }
  }
});
