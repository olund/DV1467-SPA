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
            '#f2f2f2',
            '#4BBFC3',
            '#7BAABE',
            'whitesmoke',
            '#000'
        ],
    });
})();