var table = document.createElement("table");
for (i=0; i<8; i++) {
  var tr = document.createElement("tr");
  for (k=0; k<10; k++) {
    var td = document.createElement("td");
    if(i%2 == k%2) {
      td.className = "white";
    } else {
      td.className = "gray";
    }
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
document.body.appendChild(table);

// var td = document.getElementsByClassName("white");
// td.style.color="red";


// Получить элементы по имени тега
// var row1 = document.getElementsByTagName('tr')[0];
// console.log(row1);
var row1 = document.querySelector("table");
var newElement = document.createElement("tr");
table.insertBefore(newElement,table.children[0]);
var newElement = document.createElement("tr");
table.appendChild(newElement,table);
newElement = document.createElement("td")
newElement.className = "white";
// table.appendChild(newElement,table.children);
// row1.style.border="green";
