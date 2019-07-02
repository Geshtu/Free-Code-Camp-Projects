$(document).ready(function() {

    var myQuotes = [{
            quote: "We always pay dearly for chasing after what is cheap.",
            quotee: "Aleksandr Solzhenitsyn"
        },
        {
            quote: "Have the courage to use your own reason.",
            quotee: "Immanuel Kant"
        },
        {
            quote: "You have to learn the rules of the game. And then you have to play better than anyone else.",
            quotee: "Albert Einstein"
        },
        {
            quote: "Without training, they lacked knowledge. Without knowledge, they lacked confidence. Without confidence, they lacked victory.",
            quotee: "Gaius Julius Caesar"
        },
        {
            quote: "I find that the harder I work, the more luck I seem to have.",
            quotee: "Thomas Jefferson"
        },
        {
            quote: "Change before you have to.",
            quotee: "Jack Welch"
        },
        {
            quote: "I never did give anybody hell. I just told the truth and they thought it was hell.",
            quotee: "Harry Truman"
        },
        {
            quote: "The secret of getting ahead is getting started.",
            quotee: "Mark Twain"
        },
        {
            quote: "Inaction breeds doubt and fear. Action breeds confidence and courage. If you want to conquer fear, do not sit home and think about it. Go out and get busy.",
            quotee: "Dale Carnegie"
        },
        {
            quote: "Not being able to do everything is no excuse for not doing everything you can.",
            quotee: "Ashleigh Brilliant"
        },
        {
            quote: "Being aware of your fear is smart. Overcoming it is the mark of a successful person.",
            quotee: "Seth Godin"
        },
        {
            quote: "Do ALL of the things!",
            quotee: "Allie Brosh"
        },
        {
            quote: "Being realistic is the most commonly traveled road to mediocrity.",
            quotee: "Will Smith"
        },
        {
            quote: "If you're bored, you havent been looking at life closely enough.",
            quotee: "Lea Babauta"
        },
        {
            quote: "If you cannot do great things, do small things in a great way.",
            quotee: "Napoleon Hill"
        },
        {
            quote: "What we fear doing is usually what we most need to do.",
            quotee: "Tim Ferris"
        },
        {
            quote: "It does not matter how slowly you go as long as you do not stop.",
            quotee: "Confucius"
        },
        {
            quote: "Freedom: To ask nothing. To expect nothing. To depend on nothing.",
            quotee: "Ayn Rand"
        },
        {
            quote: "He who has a 'Why' can bear any 'How'",
            quotee: "Nietzche"
        }
    ];

    function generateQuote(){

        var randomNum = myQuotes[Math.floor(Math.random() * myQuotes.length)];  
        // var lq = '<span class="left quote">&ldquo;</span>'
        // var rq = '<span class="right quote">&rdquo;</span>'

    	$("#current-quote").html(randomNum.quote);
    	$("#current-quotee").html('- ' + randomNum.quotee);

    	$("#twitter-link-button").attr("href", "https://twitter.com/intent/tweet?text=" + randomNum.quote + "%0a-" + randomNum.quotee);

    	console.log(randomNum);

    }

    $("#main-quote-button").click(generateQuote);

    $(document).ready(generateQuote);

    });


/*

    var quoteButton = document.querySelector('button.main-quote-button');
    var quoteContainer = document.querySelector('.current-quote');
    var quoteQuotee = document.querySelector('.current-quotee');

    newQuotes(myQuotes, quoteElement, quoteeElement);

    quoteButton.addEventListener('click', function() {
        newQuotes(myQuotes, quoteContainer, quoteQuotee);
    });

    function newQuotes(myQuotes, quoteElement, quoteeElement) {

        var newQuote = myQuotesArray[randomGen(0, myQuotesArray.length - 1)];


        document.getElementById('current-quote').innerText = newQuote.quote;
        document.getElementById('current-quotee').innerText = newQuote.quotee;

        
        quoteContainer.innerText = newQuote.quote;
        quoteeQuotee.innerText = newQuote.quotee;
		

        function randomGen(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

    }
})();
*/