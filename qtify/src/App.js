import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero text1=" 100 Thousand  Songs, ad-free" text2="Over thousand podcast episodes"/>
    </div>
  );
}

export default App;
