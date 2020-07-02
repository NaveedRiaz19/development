

/******************* Add ELEMENT BY INPUT IN TODO LIST START ***************************/

function newElement() {
    var myinput = document.getElementById('myInput').value




    if (myinput === "") {
        alert("please add element")

    }

    else {
        var myelement = document.getElementById('myInput').value
        var mynewelement = document.createElement('li')
        mynewelement.innerHTML = myelement
        document.getElementById('myUL').appendChild(mynewelement)
        refreshArray()
    }



}


var items = document.querySelectorAll("#myUL li")
var tab = [];
console.log(tab)



// li data push in tab
for (var i = 0; i < items.length; i++) {
    tab.push(items[i].innerHTML);
}

// li index tab array
for (var i = 0; i < items.length; i++) {
    items[i].onclick = function () {
        liIndex = tab.indexOf(this.innerHTML);


        console.log(this.innerHTML + " INDEX = " + liIndex);


        /*  items.value = this.innerHTML;  */


    };
}

function removeline() {

    refreshArray()
    items[liIndex].parentNode.removeChild(items[liIndex]);
    items.value = "";
}



function refreshArray() {
    // clear array
    tab.length = 0;
    items = document.querySelectorAll("#myUL li");
    // fill array
    for (var i = 0; i < items.length; i++) {
        tab.push(items[i].innerHTML);
        
        document.getElementById('myInput').value = "";

    }


    for (var i = 0; i < items.length; i++) {
        items[i].onclick = function () {
            liIndex = tab.indexOf(this.innerHTML);
 
            console.log(this.innerHTML + " INDEX = " + liIndex);


            /* items.value = this.innerHTML; */


        }
    }

}



/******************* Add ELEMENT BY INPUT IN TODO LIST END ***************************/