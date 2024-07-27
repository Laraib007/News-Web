import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import NewsComponent from './component/NewsComponent';

function App() {
  return (
    <div className="App">
     <Navbar />
     <NewsComponent pageSize={8} />
    </div>
  );
}

export default App;
