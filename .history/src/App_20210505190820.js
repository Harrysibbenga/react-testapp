import logo from './logo.svg';
import customLogo from './python-logo.jpg'
import './App.css';

function Main(props) {
  return <h1>Hello, {props.name}</h1>;
}

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Harry',
    avatarUrl: 'https://image.shutterstock.com/z/stock-photo-software-source-code-programming-code-programming-code-on-computer-screen-developer-working-on-634574354.jpg',
  },
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="d-flex flex-row">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={customLogo} className="App-logo" alt="Custom logo" />
        </div>
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author} >
        </Comment>
        <p>
          <Main name="Harry" />
          Welcome, is this your first time using React ?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
