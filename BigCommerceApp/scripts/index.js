/*
This is the external Javascript File where i am using OOJS based concepts without using any libraries.
I have implemented  Object property method call based approach where i am calling different functions based on the scenarios like Ajax call,Event Handling
,Form  Display,Menu Display 


*/
var pageDataDisplay = (function() {
    /*Variables have been declared*/
    var barClick = document.getElementById("barIconClick");
    var closeClick = document.getElementById("closeIconClick");
    var menuDisp = document.getElementById("menuDisplay");
    var formDisplayArea = document.getElementById("formDisplayArea");
    var conditionalYes = document.getElementById("showForm");
    var formClose = document.getElementById("formCloseIconAlign");
    
    /***********Ajax Call Being Made*************/
    var displayEvent = function() {
        /*Ajax Call Being Made*/
        function ajaxRequest() {
            var activexmodes = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"] //activeX versions to check for in IE
            if (window.ActiveXObject) { //Test for support for ActiveXObject in IE first (as XMLHttpRequest in IE7 is broken)
                for (var i = 0; i < activexmodes.length; i++) {
                    try {
                        return new ActiveXObject(activexmodes[i])
                    } catch (e) {
                        //suppress error
                    }
                }
            } else if (window.XMLHttpRequest) // if Mozilla, Safari etc
            return new XMLHttpRequest()
            else
                return false
        }

        var mygetrequest = new ajaxRequest()
        mygetrequest.onreadystatechange = function() {
            if (mygetrequest.readyState == 4) {
                if (mygetrequest.status == 200 || window.location.href.indexOf("http") == -1) {
                    var jsondata = JSON.parse(mygetrequest.responseText);
                    //retrieve result as an JavaScript object
                    console.log(jsondata);
                    console.log(typeof(jsondata));
                    var rssentries = jsondata;
                    console.log(rssentries);
                    var outputBook = "";
                    var outputAuthor = "";

                    var bookInfo = document.querySelectorAll(".bookInfo");
                    var authorInfo = document.querySelectorAll(".authorInfo");
                    var imageData = document.querySelectorAll(".specificBookImage");
                    for (var i = 0; i < rssentries.length; i++) {
                        var x1 = document.getElementById("image" + (i + 1));
                        var imgDog = new Image();
                        outputBook = rssentries[i].Title;
                        outputAuthor = rssentries[i].Author;
                        bookInfo[i].innerHTML = outputBook;
                        authorInfo[i].innerHTML = outputAuthor;
                        imgDog.src = rssentries[i].Image;
                        imgDog.style.width = "98px";
                        imgDog.style.height = "128px";
                        x1.appendChild(imgDog);
                    }
                } else {
                    alert("An error has occured making the request")
                }
            }
        }

        mygetrequest.open("GET", "scripts/indexData.json", true)
        mygetrequest.send(null)


    };

    /****************Menu Would Be Displayed through Event Handling Approach****************/
    var menuDisplay = function() {
        if (barClick) {
            barClick.addEventListener("click", function() {
                barClick.style.display = "none";
                closeClick.style.display = "block";
                menuDisp.style.display = "block";
            });
        }

        if (closeClick) {
            closeClick.addEventListener("click", function() {
                closeClick.style.display = "none";
                barClick.style.display = "block";
                menuDisp.style.display = "none";


            });
        }

    };

    /***************Form Would Be Displayed THrough Click Event  on "Yes " on Welcome Back template***********************/

    var formDisp = function() {
        if (conditionalYes)

            conditionalYes.addEventListener("click", function() {

                formDisplayArea.style.display = "block";


            });

        if (formClose)

            formClose.addEventListener("click", function() {

                formDisplayArea.style.display = "none";

            });


    };
    /*********************Form Validation and Display oF Dummy Data on Submit************************/
    var formValidation = function() {
        var bookValue = document.forms["bookAuthorForm"]["book"];
        var authorValue = document.forms["bookAuthorForm"]["author"];
        var submitData = document.getElementById("formSubmit");
        var formOutputDataA = document.getElementById("dataOutputA");
        var formOutputDataB = document.getElementById("dataOutputB");
        var inputError = document.getElementById("error");
        var formVisble = document.getElementById("newformData");
        if (submitData) {

            submitData.addEventListener("click", function(e) {
                e.preventDefault();
                if (bookValue.value == "" || bookValue.value == null) {

                    inputError.innerHTML = "Please fill in the Data";

                    return false;
                } else {
                    formOutputDataA.innerHTML = bookValue.value;
                    inputError.innerHTML = "Success";
                }

                if (authorValue.value == "" || authorValue.value == null) {

                    inputError.innerHTML = "Please fill in the Data";

                    return false;
                } else {
                    formOutputDataB.innerHTML = authorValue.value;
                    inputError.innerHTML = "Success";
                    formVisble.style.display = "block";
                }



            });


        }


    }

    return {
        displayEvent: displayEvent(),
        menuDisplay: menuDisplay(),
        formDisp: formDisp(),
        formValidation: formValidation()


    }

})();