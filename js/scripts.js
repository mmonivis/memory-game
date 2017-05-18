$(document).ready(function(){
    // console.log("Test");

    var cards = [
        '<img src="images/monsters-01.png">',
        '<img src="images/monsters-02.png">',
        '<img src="images/monsters-03.png">',
        '<img src="images/monsters-04.png">'
    ];

    var gridSize = 8;
    var memoryGameHTML = '';
    for(let i = 0; i < gridSize; i++){
        if(i<2){
            card = cards[0];
        }else if(i<4){
            card = cards[1];
        }else if(i<6){
            card = cards[2];
        }else{
            card = cards[3];
        }

        memoryGameHTML += '<div class="card col-sm-3">';
            memoryGameHTML += '<div class="card-holder col-sm-3">';
                memoryGameHTML += `<div class="card-front">${card}</div>`;
                memoryGameHTML += `<div class="card-back"></div>`;
            memoryGameHTML += '</div>';
        memoryGameHTML += '</div>';
    }
    // console.log(memoryGameHTML);
    $('.mg-contents').html(memoryGameHTML);

    $('.card-holder').click(function(){
        $(this).toggleClass('flip');

        // User has flipped card. If there is another one turned over, see if they match.
        // If not, do nothing.
        // Set up an array called cardsUp that contains all elements
        // with a class of flip
        var cardsUp = $('.flip');
        if(cardsUp.length == 2){
            // Two cards have a flip class (face up) or we wouldn't be here
            // Check to see if they are the same
            var card1 = cardsUp[0].childNodes[0].children[0].src;
            var card2 = cardsUp[1].childNodes[0].children[0].src;

            // cardsUpImages = cardsUp.find('.card-front img'); -- This also works!

            if(card1 == card2){
                // They match! i.e. Images are exactly the same

            }else{
                // They are not the same. Flip back over
                setTimeout(function(){
                    cardsUp.removeClass('flip');
                },1000);
            }
        }

    });

});
