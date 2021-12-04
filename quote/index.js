const quotes = [
    {
        name: 'Matt Cameron',
        quote: 'Live life to the fullest, and focus on the positive.'
    },

    {
        name: ' Aristotle Onassis',
        quote: 'It is during our darkest moments that we must focus to see the light.'
    },

    {
        name: ' David Cameron',
        quote: 'I believe that in life, you have to give things your best shot, do your best. You have to focus on what needs to be done, do the right thing, not the popular thing.'
    },

    {
        name: 'Jen Sincero',
        quote: 'Gratitude is one of the strongest and most transformative states of being. It shifts your perspective from lack to abundance and allows you to focus on the good in your life, which in turn pulls more goodness into your reality.'
    },

    {
        name: 'Thich Nhat Hanh',
        quote: "It's very important that we re-learn the art of resting and relaxing. Not only does it help prevent the onset of many illnesses that develop through chronic tension and worrying; it allows us to clear our minds, focus, and find creative solutions to problems."
    },

    {
        name: 'Jack Canfield',
        quote: 'Successful people maintain a positive focus in life no matter what is going on around them. They stay focused on their past successes rather than their past failures, and on the next action steps they need to take to get them closer to the fulfillment of their goals rather than all the other distractions that life presents to them.'
    },

    {
        name: 'Dustin Poirier',
        quote: "I need to celebrate life because I'm in a good spot, I work hard, and I am happy with who I am and happy with what I do for a living, and sometimes I just focus and overwhelm myself so much with the fights and getting better, that I just need to slow it down and enjoy life and enjoy training."
    },

    {
        name: 'Wayne Dyer',
        quote: 'Give yourself a gift of five minutes of contemplation in awe of everything you see around you. Go outside and turn your attention to the many miracles around you. This five-minute-a-day regimen of appreciation and gratitude will help you to focus your life in awe.'
    },

    {
        name: 'Karen Salmansohn',
        quote: 'Choose to focus your time, energy and conversation around people who inspire you, support you and help you to grow you into your happiest, strongest, wisest self.'
    },
]


const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote

}






















