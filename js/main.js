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

    // Date contact
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    // Chat modal
    $('.modal-trigger').leanModal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 200, // Transition out duration
        ready: function() { /*alert('Ready');*/ }, // Callback for Modal open
        complete: function() { /*alert('Closed');*/ } // Callback for Modal close
    });

});