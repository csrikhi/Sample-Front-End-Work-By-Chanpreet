/*


**************************************************************************
*    This Javascipt file is invoking the Event Listners whih can be seen
     implemented in   Menu Button in Mobile Version Of the App and drop Down 
     Button for expansion of music list.Also in terms of displaying of data
     ,the Application is using the Ajax Request to the Json 
     Data to display the values                                                                         * 
*																		 *
*																	     *
**************************************************************************

*/

var pageDataDisplay = (function() {/*Menu Display Bar Button*/
	var barClick = document.getElementById("buttonEvent");
	var menuListDisp = document.getElementById("menuItemsDisp");
	var ajaxSongs = document.getElementById("ajaxSongs");
    //ajaxSongs.value="Error";
    /*Menu Display Function for Mobile Approach*/
    var menuDisplayData = function() {
    	if (barClick) {
    		barClick.addEventListener("click", function() {
    			menuListDisp.style.display == "block" ? menuListDisp.style.display = "none" :
    			menuListDisp.style.display = "block";

    		});

    	}

    };
    /*Expand Details Function For Mobile Approach*/
    var displayMore = function() {/*More Data Display Arrow Button*/

    	var MoredataDisp = document.getElementById("MoredataDisp"), floatButtonAlign = document.getElementById("floatButtonAlign"),floatButtonAlignTop = document.getElementById("floatButtonAlignTop");

        if (floatButtonAlign) {
        	floatButtonAlign.addEventListener("click", function() {
        		MoredataDisp.style.height = "auto";
                //console.log(glyp);
                floatButtonAlign.style.display = "none";
                floatButtonAlignTop.style.display = "block";
            });
        }
        if (floatButtonAlignTop) {
        	floatButtonAlignTop.addEventListener("click", function() {
        		MoredataDisp.style.height = "524px";
        		floatButtonAlignTop.style.display = "none";
        		floatButtonAlign.style.display = "block";
        		floatButtonAlign.style.top = "356px";
        	});


        }


    };
    /*Ajax  Javascript request for Mobile and Desktop Approach */
    var musicdataAjaxDisplay = function() {/*Ajax Request To Pull THe data*/
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

        var mygetrequest = new ajaxRequest();
        mygetrequest.open("GET", "scripts/musicData.json", true);
        mygetrequest.send(null);
        mygetrequest.onreadystatechange = function() {
        	if (mygetrequest.readyState == 4) {
        		if (mygetrequest.status == 200 || window.location.href.indexOf("http") == -1) {
        			var jsondata = JSON.parse(mygetrequest.responseText);
                    //retrieve result as an JavaScript object
                    //console.log(jsondata);
                    //console.log(typeof(jsondata));
                    var rssentries = jsondata;
                    for (var i = 0; i < rssentries.length; i++) {
                    	console.log(rssentries[i].Title);


                    }
                    var imageSet = "",path = "",author = "",song = "";
                    var ImageDisp = document.querySelectorAll(".bookInfo"),singerInfo = document.querySelectorAll(".singerInfo"),titleInfo = document.querySelectorAll(".titleInfo");

                    for (var x = 0; x < rssentries.length; x++) {
                    	path = rssentries[x].Image;
                        //author=rssentries[x].Author;
                        song = '<div class="songsInfoAlign">' + rssentries[x].Title + '<div>';
                        author = '<div class="singerInfoAlign">' + rssentries[x].Author + '<div>';
                        imageSet = '<img  class="songImageAlign" src="' + path + '" alt="some Img">';
                        //console.log(imageSet);
                        //ImageDisp[i].innerHTML=imageSet;   
                        ImageDisp[x].innerHTML = imageSet + song + author;
                        //singerInfo[x].innerHTML=author;
                        //titleInfo[x].innerHTML=song;

                    }

                } else {
                	alert("An error has occured making the request");
                	ajaxSongs.innerHTML = "Please Note!Data Error Has Occured";
                	ajaxSongs.style.background = "red";
                    //ajaxSongs.style
                    console.log("error");
                }
            }
        }




    };



    return {

    	menuDisplayData: menuDisplayData(),
    	musicdataAjaxDisplay: musicdataAjaxDisplay(),
    	displayMore: displayMore(),

    }


})();