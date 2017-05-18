$(document).ready(function(){
    // console.log("Test");

    var cards = [
        '<img src="images/monsters-01.png">',
        '<img src="images/monsters-02.png">',
        '<img src="images/monsters-03.png">',
        '<img src="images/monsters-04.png">',
        '<img src="images/monsters-05.png">',
        '<img src="images/monsters-06.png">',
        '<img src="images/monsters-07.png">',
        '<img src="images/monsters-08.png">',
        '<img src="images/monsters-01.png">',
        '<img src="images/monsters-02.png">',
        '<img src="images/monsters-03.png">',
        '<img src="images/monsters-04.png">',
        '<img src="images/monsters-05.png">',
        '<img src="images/monsters-06.png">',
        '<img src="images/monsters-07.png">',
        '<img src="images/monsters-08.png">'
    ];

    var copyCards = cards.slice();
    var randomCards = [];

    shuffleCards();

    var gridSize = 16;
    var memoryGameHTML = '';
    for(let i = 0; i < gridSize; i++){
        var card = randomCards[i];

        memoryGameHTML += '<div class="card col-sm-3">';
            memoryGameHTML += '<div class="card-holder col-sm-3">';
                memoryGameHTML += `<div class="card-front">${card}</div>`;
                memoryGameHTML += `<div class="card-back"></div>`;
            memoryGameHTML += '</div>';
        memoryGameHTML += '</div>';
    }
    // console.log(memoryGameHTML);
    $('.mg-contents').html(memoryGameHTML);

    $('.card-holder').addClass('flip');

    var allCardHolders = $('.card-holder');
    for(let i = 0; i < allCardHolders.length; i++){
        var randFlipBack = 500 + Math.floor(Math.random() * 2000);
        setTimeout(()=>{
            $(allCardHolders[i]).removeClass('flip');
        },randFlipBack)
        console.log(randFlipBack);
    }


    $('.card-holder').click(function(){
        $(this).toggleClass('flip');

        // User has flipped card. If there is another one turned over, see if they match.
        // If not, do nothing.
        // Set up an array called cardsUp that contains all elements
        // with a class of flip
        var cardsUp = $('.flip');
        if(cardsUp.length >= 2){
            // Two cards have a flip class (face up) or we wouldn't be here
            // Check to see if they are the same
            var card1 = cardsUp[0].childNodes[0].children[0].src;
            var card2 = cardsUp[1].childNodes[0].children[0].src;

            // cardsUpImages = cardsUp.find('.card-front img'); -- This also works!

            if(card1 == card2){
                // They match! i.e. Images are exactly the same
                cardsUp.removeClass('flip');
                cardsUp.addClass('matched');
                var matchedCards = $('.matched');
                if(matchedCards.length == gridSize){
                    // Then every card has been matched, game won!
                    $('.message-box').html("You have won the game!");
                    $('.reset-button').css({
                        'visibility': 'visible'
                    });
                }
            }else{
                // They are not the same. Flip back over
                setTimeout(()=>{
                    cardsUp.removeClass('flip');
                },1000);
            }
        }

    });

    function shuffleCards(){
        for(let i = 0; i < cards.length; i++){
            var randNum = Math.floor(Math.random() * copyCards.length);
            randomCards.push(copyCards.splice(randNum,1)[0]);
            // randNum = where to start
            // 1 = how many items to remove
            // [0] is the 0th element in the individual array, moved to the bigger array
        };
        // console.log(randomCards);
    };

    $('.reset-button').click(function(){
        copyCards = cards.slice();
        randomCards = [];
        shuffleCards();
        $('.message-box').html('&nbsp;');
        $('.reset-button').css({
            'visibility': 'hidden'
        });
        $('.card-holder').removeClass('flip matched');
    });

});
