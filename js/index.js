var arrayOfQuotes=[
    {'author': 'Mahatma Gandhi', 
        'quote': 'Be the change that you wish to see in the world'
    },
    {'author': ' Albert Einstein', 
        'quote': 'Two things are infinite: the universe and human stupidity; and Iam not sure about the universe'
    },
    {'author': 'Frank Sinatra', 
        'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
        'quote': 'You miss 100% of the shots you don\'t take.'
    }, 
    {'author': ' Marcus Tullius Cicero', 
        'quote': 'A room without books is like a body without a soul.'
    },
    {'author': 'Elbert Hubbard', 
        'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {'author' : 'Robert Frost',
        'quote' : 'In three words I can sum up everything I have learned about life: it goes on.'
    }
];


function generateQuote() {
    var random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1 );
    document.querySelector("#quoteOutput").textContent=`\"${arrayOfQuotes[random].quote}\"`;  
    document.querySelector("#authorOutput").textContent=`--${arrayOfQuotes[random].author}--` ;    
}