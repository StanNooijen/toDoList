const items = [];
const txt = document.getElementById("itemMaker");
const listItems = document.getElementById("containerItems");



document.getElementById("itemMakerButton").addEventListener("click", function(){
    items.push(txt.value);
    printList();
    txt.value = "";
}
)

function printList(){
    listItems.value = "";
        items.forEach(function(I,R,E){
            listItems.innerHTML += "<div id='itemsMade'><div id='items'><div id='itemText'>"+I+"</div><button onclick='Edit("+E+")' id='itemEdit'>&#9998;</button><button onclick='Remove("+R+")' id='itemRemove'>&#10008;</button></div></div>";
        });
}

function Remove(R){
    items.splice(R,1);
    printList();
}

function Edit(I){
    I = "<input id='itemMaker' type='text'><button id='itemMakerButton'>&#10004;</button>"
    items.splice(R,1, Edit)
    printList();
}