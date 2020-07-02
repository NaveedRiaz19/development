/* Button Script Start */


function div1() {
    document.getElementById("formate0").style.display = "none";
    document.getElementById("formate1").style.display = "block";
    document.getElementById("formate2").style.display = "none";
    document.getElementById("formate3").style.display = "none";

};


function div2() {
    document.getElementById("formate0").style.display = "none";
    document.getElementById("formate1").style.display = "none";
    document.getElementById("formate2").style.display = "block";
    document.getElementById("formate3").style.display = "none";

};

function div3() {
    document.getElementById("formate0").style.display = "none";
    document.getElementById("formate1").style.display = "none";
    document.getElementById("formate2").style.display = "none";
    document.getElementById("formate3").style.display = "block";

};



/* Button Script End */




/*******************  FORM FUNCTION START ********************/

function ans() {

    var fname = document.getElementById('fname').value
    var lname = document.getElementById('lname').value
    var email = document.getElementById('email').value
    var phone = document.getElementById('phone').value

    document.myform.reset();

    /*******************  FORM FUNCTION ALERT CONDITION START ********************/

    /*  if (fname, lname, email, phone == ""){
     alert("please fill all fields");
     }
     else{
         alert("successfull submited");
     } */

    /*******************  FORM FUNCTION ALERT CONDITION END ********************/



    /*******************  FORM FUNCTION innerHTML CONDITION START ********************/


    if (fname, lname, email, phone == "") {
        document.getElementById("alerttext").innerHTML = "* Please fill all fields";
    }
    else {

        document.getElementById("success").innerHTML = "Successfully Submitted";
        document.getElementById("alerttext").style.display = "none";

        var btnn = document.createElement('div');
        btnn.className = "column";
        btnn.style = "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); padding: 15px; margin: 10px; height: auto; text-align: left; background-color: #f1f1f1;"
        btnn.id = 'column';
        btnn.innerHTML = "First Name: " + fname + "<br><br>" + "Last Name: " + lname + "<br><br>" + "Email: " + email + "<br><br>" + "Phone no: " + phone;
        document.getElementById('row').appendChild(btnn);

        /*  var btnn2 = document.createElement('div');
         btnn2.className = "card";
         btnn2.id = 'card';
         btnn2.innerHTML = "First Name: " + fname + "<br>" + "Last Name: " + lname + "<br>" + "Email: " + email + "<br>" + "Phone no: " + phone;  
         document.getElementById('column').appendChild(btnn2); */


    };


    /*******************  FORM FUNCTION innerHTML CONDITION END ********************/

}

/*******************  FORM FUNCTION END ********************/








/******************* Model Javascript Start ***************/

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/******************* Model Javascript End ***************/

