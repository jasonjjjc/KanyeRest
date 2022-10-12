console.log("Oh dear, here comes Kanye");
let clicks = 0;
let history = [];
let duplicates = [];
let head = document.querySelector("#kanye-quote");

async function getQuote() {
  let response = await fetch(`https://api.kanye.rest/`);
  let data = await response.json();
  let quote = data.quote;
  clicks += 1
  if (history.includes(quote)) {
    duplicates.push(quote);
  } else if (clicks === 1) {
    head.textContent = quote; 
    history.push(quote);
  } else {    
    // if number of clicks > 1
    // take the text in the temp variable and put it in the list below
      let element = document.createElement("li");
      element.textContent = head.textContent;
      let orderedList = document.querySelector("#kanye-quote-history");
      orderedList.appendChild(element);
    // add the quote to history
    history.push(quote);
    // change text content of head  
    let newResponse = await fetch (`https://api.kanye.rest/`);
    quote = await newResponse.json();
    if (!history.includes(quote)) {head.textContent = data.quote}
  }
};  

// task 2
// 👉 Attach an event listener to the button already on the page with
// id `"new-quote-button"` to call `getQuote` when the user clicks.

let buttonQ = document.querySelector("#new-quote-button");

buttonQ.addEventListener("click", getQuote);

//Bonus task 1
// 👉 Change your code so that if a repeat quote is generated,
//  it will not be added again to the list of previous quotes.
// This means that your list should not contain any duplicates.
