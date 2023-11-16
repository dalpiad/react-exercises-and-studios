import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD:part1/exercises/src/App.js
import MovieList from './components/MovieList.js';
import ChoresList from './components/ChoresList.js';
import BookList from './components/BookList.js';
import HobbyLinks from './components/HobbyLinks.js';
=======
import MovieList from './components/MovieList.jsx';
import ChoresList from './components/ChoresList.jsx';
import BookList from './components/BookList.jsx';
>>>>>>> upstream/main:part1/exercises/src/App.jsx

function App() {
  return (
    <div className="App" style={{margin: "25px"}}>
      <ChoresList />
      <div className="similarComponents">
        <MovieList />
        <BookList />
        <HobbyLinks />
      </div>
    </div>
  );
}

export default App;
