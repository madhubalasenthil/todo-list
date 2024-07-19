 //  selecting Elements for show popupbox

 let clickbtn = document.getElementById("addbtn");
 let popupoverlay = document.querySelector(".popupoverlay");
 let popupbox = document.querySelector(".popupbox");
 clickbtn.addEventListener("click", () => {
     popupoverlay.style.display = "block";
     popupbox.style.display = "block";
 });

 //  selecting Elemnts for Cancel button

 let can = document.getElementById("cancel");
 can.addEventListener("click", (event) => {
     event.preventDefault();
     popupoverlay.style.display = "none";
     popupbox.style.display = "none";
 });

 // selecting Elements for Add button

 let bookname = document.getElementById("bookname");
 let authorname = document.getElementById("authorname");
 let description = document.getElementById("description");

 let container = document.querySelector(".container")
 let add = document.getElementById("add");
 add.addEventListener("click", (x) => {
     x.preventDefault()
     let div = document.createElement("div")
     div.setAttribute("class", "box");
     div.innerHTML = `<h2>${bookname.value}</h2>
     <h3>${authorname.value}</h3> 
     <p>${description.value}</p>
     <button onclick="deletebox(event)">Delete</button>`


     container.append(div)
     popupoverlay.style.display = "none";
     popupbox.style.display = "none";

     document.getElementById("bookname").value = " ";
     document.getElementById("authorname").value = " ";
     document.getElementById("description").value = " ";


 });

 function deletebox(event) {
     event.target.parentElement.remove();

 }