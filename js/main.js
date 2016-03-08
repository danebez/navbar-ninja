$(document).ready(function() {

    // preload images

    function preload(arrayOfImages) {
        $(arrayOfImages).each(function(){
            (new Image()).src = this;
        });
    }

    preload([
        'img/pet_heaven_small.png',
        'img/pet_heaven_small_greyscale.png',
        'img/faithful_to_nature_small.png',
        'img/faithful_to_nature_small_greyscale.png',
        'img/cyber_cellar_small.png',
        'img/cyber_cellar_small_greyscale.png',
    ]);

    // get the current site and activate the relevant image

    //iframe = $('#embedded_iframe', window.parent.document);
    //site = iframe.attr('site');
    site = $.url().param('site');
    alert(site);

    if (site == 'pet_heaven') {
        $('img#pet_heaven').attr('src', 'img/pet_heaven_small.png');
    } else if (site == 'faithful_to_nature') {
        $('img#faithful_to_nature').attr('src', 'img/faithful_to_nature_small.png');
    } else if (site == 'cyber_cellar') {
        $('img#cyber_cellar').attr('src', 'img/cyber_cellar_small.png');
    } else {
        alert('Unknown parent page!');
    }

    // mouse over handlers

    $('img#pet_heaven').mouseover(function() {
        if (site != 'pet_heaven') {
            $(this).attr('src', 'img/pet_heaven_small.png');
        }
    });
    $('img#pet_heaven').mouseout(function() {
        if (site != 'pet_heaven') {
            $(this).attr('src', 'img/pet_heaven_small_greyscale.png');
        }
    });

    $('img#faithful_to_nature').mouseover(function() {
        if (site != 'faithful_to_nature') {
            $(this).attr('src', 'img/faithful_to_nature_small.png');
        }
    });
    $('img#faithful_to_nature').mouseout(function() {
        if (site != 'faithful_to_nature') {
            $(this).attr('src', 'img/faithful_to_nature_small_greyscale.png');
        }
    });

    $('img#cyber_cellar').mouseover(function() {
        if (site != 'cyber_cellar') {
            $(this).attr('src', 'img/cyber_cellar_small.png');
        }
    });
    $('img#cyber_cellar').mouseout(function() {
        if (site != 'cyber_cellar') {
            $(this).attr('src', 'img/cyber_cellar_small_greyscale.png');
        }
    });

});

// direct the browser to the site clicked on, not just the iframe

function loadSite(site) {
    parent.window.location.href = site;
}