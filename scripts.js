let button = document.querySelector('.btn');
let quote = document.querySelector('#quote');
let writer = document.querySelector('.writer');

// Random quotes to be displayed
const quotelist = [{
    quote: 'The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.',
    writer: '—Henry Ford'
},
{
    quote: 'If you don’t value your time, neither will others. Stop giving away your time and talents–start charging for it.',
    writer: '—Kim Garst'
},
{
    quote: 'We cannot solve problems with the kind of thinking we employed when we came up with them.',
    writer: '—Albert Einstein'
},
{
    quote: 'The road to success and the road to failure are almost exactly the same.',
    writer: ' —Colin R. Davis'
},
{
    quote: 'There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.',
    writer: '—Mister Rogers'
},
{
    quote: 'Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.',
    writer: '—Dale Carnegie'
},
{
    quote: 'If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.',
    writer: '—Steve Jobs'
}
];

// Adding the event listener 
button.addEventListener('click', function() {
    let randomQuote = Math.floor(Math.random() * quotelist.length)

    quote.textContent = quotelist[randomQuote].quote
    writer.textContent = quotelist[randomQuote].writer
});