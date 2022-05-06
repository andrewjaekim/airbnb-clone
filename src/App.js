import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (

    // BEM
    <div className="App">
      <Router>
        <Header />
        <Home /> 
        <Footer />

      </Router>
    </div>
  );
}

export default App;
