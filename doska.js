var table = document.createElement("table");
for (i=1; i<11; i++) {
  var tr = document.createElement("tr");
  for (k=1; k<11; k++) {
    var td = document.createElement("td");
    if(i%2 == k%2) {
      td.className = "white";
    } else {
      td.className = "black";
    }
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
document.body.appendChild(table);

var td = document.getElementsByClassName("white");
td.style.background="red";
