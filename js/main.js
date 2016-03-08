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

// see: http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// direct the browser to the site clicked on, not just the iframe
function loadSite(site) {
    parent.window.location.href = site;
}

// jQuery

$(document).ready(function() {

    // get the current site and activate the relevant image

    site = getParameterByName('site');

    if (site == 'pet_heaven') {
        $('img#pet_heaven').attr('src', 'img/pet_heaven_small.png');
    } else if (site == 'faithful_to_nature') {
        $('img#faithful_to_nature').attr('src', 'img/faithful_to_nature_small.png');
    } else if (site == 'cyber_cellar') {
        $('img#cyber_cellar').attr('src', 'img/cyber_cellar_small.png');
    } else {
        alert('Unknown site: ' + site);
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