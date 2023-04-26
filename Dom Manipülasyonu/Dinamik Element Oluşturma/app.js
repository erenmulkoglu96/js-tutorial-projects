// Yeni Element Oluşturma

<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taslakları Temizleyin</a>

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-dark";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";

newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));

cardbody.appendChild(newLink);

console.log(newLink);