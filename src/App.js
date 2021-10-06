import './App.css';
import FetchUser from './components/FetchUser';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <header className="app__header">
        <h1>HacktoberFest 2021</h1>
      </header>
      <div className="app__desc">
        <p>Hacktoberfest, in its 8th year, is a month-long celebration of open source software run by DigitalOcean. During the month of October, we invite you to join open-source software enthusiasts, beginners, and the developer community by contributing to open-source projects.</p>
        <p><strong>Let's Contribute To open-source</strong></p>
        <p>Read the Contribution Guidelines from&nbsp;
          <strong><a href="https://github.com/sharjeelyunus/hacktoberfest/blob/master/README.md" alt="">here!</a></strong>
        </p>
        <h2>Open-Sourse Contributors Directory</h2>
      </div>
      <div className="users">
        <Users />
        <FetchUser />
      </div>
      <footer className="footer">
        Made with ❤ by&nbsp;
        <a href="https://github.com/sharjeelyunus">Sharjeel Yunus</a>
      </footer>
    </div>
  );
}

export default App;
