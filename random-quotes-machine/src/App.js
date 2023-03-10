import './App.css';

// this VAr is for colors the quote machine
const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857',
  '#e7c142'
];

const QuoteMachine = ({ quote, handleNewQuote, bodyColor, buttonColor }) => (
    <div id='quote-box'>
      <p id='text'>{quote.text}</p>
      <h2 id='author'>{quote.author}</h2>
      <div class='actions'>
        <button id='new-quote' class='button' onClick={handleNewQuote} style={{backgroundColor: buttonColor}}>
          New Quotes
        </button>
        <a href='twitter.com/intent/tweet' target='_blank' id='tweet-quote' style={{backgroundColor: buttonColor}}>
        Twiter
        </a>
      </div>
    </div>
  );


const App = () => {
  return (
    <div className="App">
      <QuoteMachine />
    </div>
  );
}

export default App;
