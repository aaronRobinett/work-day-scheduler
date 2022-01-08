$(document).ready(function () {
    // uses moment.js to show current day
    $('#today').text(moment().format('dddd, MMMM Do'));

    // goes through time blocks to check if before or after current hour
    // applies 'past', 'present', or 'future' class to change color
    function setHourClasses() {

        var currentHour = moment().hours();


        $('.time-block').each(function () {
            var blockHour = parseInt($(this).attr('id'));

            if (blockHour < currentHour) {
                $(this).addClass('past');
            } else if (blockHour === currentHour) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        });
    }

    setHourClasses();

    // listens for save button click and uses call back function to save the note
    $('.saveButton').on('click', function () {
        var note = $(this)
            .siblings('.note')
            .val();
        var hour = $(this)
            .parent()
            .attr('id');

        localStorage.setItem(hour, note);
    });

    // load schedule from localStorage
    $('#9 .note').val(localStorage.getItem('9'));
    $('#10 .note').val(localStorage.getItem('10'));
    $('#11 .note').val(localStorage.getItem('11'));
    $('#12 .note').val(localStorage.getItem('12'));
    $('#13 .note').val(localStorage.getItem('13'));
    $('#14 .note').val(localStorage.getItem('14'));
    $('#15 .note').val(localStorage.getItem('15'));
    $('#16 .note').val(localStorage.getItem('16'));
    $('#17 .note').val(localStorage.getItem('17'));
});

