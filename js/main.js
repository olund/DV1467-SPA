$(document).ready(function () {
    /*$('#fullpage').fullpage({
        //navigation: true,
       // navigationPosition: 'left',
        anchors:['hem', 'information', 'kontakta', 'om'],
        menu: '#menu',
        //navigationTooltips: ['Home', 'Extra', 'Extra2', 'Extra3'],
        slidesNavigation: true,

        //Scrolling
        css3: true,
        scrollingSpeed: 550,
        autoScrolling: true,
        scrollBar: false,
        easing: 'easeInQuart',
        easingcss3: 'ease',

        sectionsColor: [
            '#03A9F4',
            '#FF5252',
            '#1BBC9B',
            '#FF5722',
        ],

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });*/

    $(".dropdown-button").dropdown({
        hover: false,
        constrain_width: false,
        alignment: 'left',
        belowOrigin: true
    });
});