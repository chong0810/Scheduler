// This will run after all the HTML elements are finished rendering
$(document).ready(function() {

// Get Today's Date
    let currentDay = document.getElementById("currentDay");
        currentDay.innerHTML = "Today is: " + moment().format("LLLL");
        currentDay.appendChild;
// Get current hour as 24H format
    let currentHour = moment().format("HH");
    
    
    //   render scheduler 
    for (var i = 9; i < 18; i++) {
    
    
        // let whatTime = document.getElementById(JSON.stringify(i));
        let whatTime = $(`#${i}`);
        console.log(whatTime);
        
        // render hours divs
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
    
    
        // text area divs for users
        let textDiv = $("<textarea></textarea>");
        textDiv.appendTo(whatTime);
        textDiv.attr("value", i);
        // textDiv.data(i);
        // textDiv.val(localStorage.textDiv);
        // let textValue = $(".col-sm-9").val();
        // console.log(textValue);
        
        // grab item from local storage
        $(`[value=${i}]`).text(localStorage.getItem(i));
    
        // $("textarea").data(whatTime, textDiv.val());
        
        
        //  localStorage.getItem(i);
        // textarea CSS to distinguish hours
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
        saveBtn.attr("value", i);
    
    // hover animation
        saveBtn.on("mouseover", function() {
            saveBtn.removeClass("saveBtn");
            saveBtn.addClass("saveBtnHover");
    
        });   

    // going back normal
        saveBtn.on("mouseout", function() {
           saveBtn.removeClass("saveBtnHover");
            saveBtn.addClass("saveBtn");
        });

    // Save button functionality
        saveBtn.on("click", function () {
        
           let time =  $(this).val();
           console.log(this);
            
          let saveText = ($(`[value= ${time}]`).val());
            localStorage.setItem(time, saveText);
        });
    
    
    }
    
    
    });
    
    