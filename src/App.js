import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <MovieForm />
      <div>
        <Search />
        <MovieList />
      </div>
      
    </div>
  );
}

export default App;
