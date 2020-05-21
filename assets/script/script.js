$(document).ready(function() {


let currentDay = document.getElementById("currentDay");
    currentDay.innerHTML = "Today is: " + moment().format("LLLL");
    currentDay.appendChild;

let currentHour = moment().format("HH");


  
for (var i = 9; i < 18; i++) {


    let whatTime = document.getElementById(JSON.stringify(i));
    console.log(whatTime);
    
    // hours
    let hourDiv = $("<div></div>");
    if (i < 12) {
        hourDiv.text(i + "AM")
    } else if (i === 12) {
        hourDiv.text(i + "PM")
    } else {
        hourDiv.text( (i-12) + "PM")
    }

    hourDiv.appendTo(whatTime);
    hourDiv.addClass("hour col-sm-2")


    // text area
    let textDiv = $("<textarea></textarea>");
    textDiv.appendTo(whatTime);
    // textDiv.val(localStorage.textDiv);
    // let textValue = $(".col-sm-9").val();
    // console.log(textValue);

    if (i < currentHour) {
        textDiv.addClass("past col-sm-9")
    } else if (i == currentHour) {
        textDiv.addClass("present col-sm-9")
    } else {
        textDiv.addClass("future col-sm-9")
    }


// save button
    let saveBtn = $("<button></button>");
    saveBtn.text("Save");
    saveBtn.appendTo(whatTime);
    saveBtn.addClass("saveBtn col-sm-1");
    
    saveBtn.on("mouseover", function() {
        saveBtn.removeClass("saveBtn");
        saveBtn.addClass("saveBtnHover");

    });   
    saveBtn.on("mouseout", function() {
       saveBtn.removeClass("saveBtnHover");
        saveBtn.addClass("saveBtn");
    });
    saveBtn.on("click", function() {
        
        console.log(textDiv.val());
        

    });

  
    
   

    





}


});

