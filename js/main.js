(function () {
    console.log('Hello World');
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'Extra', 'Extra2', 'Extra3'],

         //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        scrollBar: false,
        easing: 'easeInQuart',
        easingcss3: 'ease',

        sectionsColor: [
            '#1976D2',
            '#4CAF50',
            '#C2185B',
            'whitesmoke',
            '#000'
        ],
    });
})();