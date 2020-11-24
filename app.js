$(document).ready(write);

function write() {
    if($('.line').length < 14){
        initializeLine();
        increment(); // Moved recursion inside of the increment method.
    }
    else {
        $('#aa').animate({
            top: '-700px'
        }, 2000, function(){
            $('.line').remove();
            $('#aa').css({top: '0px'});
            write();
        })
    }
}

function initializeLine() {
    const colors = [
    '#3FB8A5',// blue
    '#DE6257',//red
    '#D5A060',//orange
    '#E08B98',//rose gold
    '#9B40A2'//purple
    ];
    
    $('#aa').append('<div class=line></div>');
    $('.line').last().css({
        position: 'absolute',
        top: `${($('.line').length - 1) * 40 + 10}px`,
        left: '10px',
        backgroundColor: colors[Math.floor(Math.random() * 5)],
        maxWidth: `${Math.floor(Math.random() * 150) * 4}px`,
        width: '8px',
        height: '24px',
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
        borderTopRightRadius: '3px',
        borderBottomRightRadius: '3px',
        opacity: '0.4',
        zIndex: '1'
    });

    $('.line').last().append('<div id=cursor></div>');

    // Setting cursor properties
    $('#cursor').css({
        position: 'absolute',
        right : '-5px',
        backgroundColor: 'red',
        width: '3px',
        height: '24px',
        zIndex: '1'
    });
}

function increment() {
    if ($('.line').last().css('width') != $('.line').last().css('max-width')) {
        $('.line').last().animate({
            width: '+=24px'
        }, 50, function(){
            setTimeout(increment, 70);
        });
    }
    else {
        $('#cursor').remove();
        $('.line').last().css({
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px'
        })
        write();
    }
}