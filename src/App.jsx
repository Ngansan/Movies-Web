import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/intro';
import Content from './components/Contents/Content'
import Menu from './components/Menu/Menu';
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Intro/>
       <Content/>
       <Menu/>
    </div>
  );
}

export default App;
