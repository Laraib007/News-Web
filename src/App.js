import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import NewsComponent from './component/NewsComponent';

function App() {
  return (
    <div className="App">
     <Navbar />
     <NewsComponent pageSize={4} country="us" category="science" />
    </div>
  );
}

export default App;
