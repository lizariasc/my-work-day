$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

// display today's date in the header
var today = moment().format('dddd, MMM Do YYYY');
$("#currentDate").html(today);

// Make save button work and save event in localStorage
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
   
    // Audit the event's time to start color-coding
    function AuditEvent() {
        // get the present time
        var presentTime = moment().hour();

        // get the time for each event
        $(".time-block").each(function () {
            var eventTime = parseInt($(this).attr("id").split("hour")[1]);

           // add color-code for present events 
            if (eventTime === presentTime) {
                $(this).addClass("present");
            }
             // add color-code for past events 
            else if  (eventTime < presentTime) {
                $(this).addClass("past");
                
            }
             // add color-code for future events
            else if (eventTime > presentTime) {
                $(this).addClass("future");

            }
        })
    }

AuditEvent();
 })