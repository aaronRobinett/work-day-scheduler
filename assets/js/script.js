

$(document).ready(function () {
    // uses moment.js to show current day
    $('#today').text(moment().format('dddd, MMMM Do'));

    function setHourClasses() {

        var currentHour = moment().hours();

        // goes through time blocks to check if before or after current hour
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
});

