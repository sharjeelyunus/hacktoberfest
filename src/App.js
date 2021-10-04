import './App.css';
import FetchUser from './components/FetchUser';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <header className="app__header">
        <h1>HacktoberFest 2021</h1>
      </header>
      <div className="users">
        <Users />
        <FetchUser />
      </div>
    </div>
  );
}

export default App;
