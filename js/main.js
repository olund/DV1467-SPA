$(document).ready(function () {

    // Set the "current-txt" to 100 characters, so they are equal in height.
    $('.current-txt').each(function (index, element) {
        $(this).text($(this).text().substr(0, 100) + '...');
    });


    $(".dropdown-button").dropdown({
        hover: false,
        constrain_width: false,
        alignment: 'left',
        belowOrigin: true
    });

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
});