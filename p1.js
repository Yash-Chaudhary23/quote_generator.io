//variables

let btn= document.querySelector('#cbtn');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes=[{
    quote:`"The purpose of our lives is to be happy."` ,
    person: `— Dalai Lama`
}, {
    quote:`Life is what happens when you're busy making other plans."`,
    person: `— John Lennon`  
},{
    quote: `"Get busy living or get busy dying." `,
    person:`— Stephen King`
}, {
    quote:`"Many of life is failures are people who did not realize how close they were to success when they gave up."`,
    person:`– Thomas A. Edison`
}, {
    quote:`"If you want to live a happy life, tie it to a goal, not to people or things." `,
    person: `– Albert Einstein`
}, {
    quote:` "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma 
    – which is living with the results of other people’s thinking."`,
    person:` – Steve Jobs `
}];

btn.addEventListener('click',function(){
    let random=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
});