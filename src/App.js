import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbarpage from './components/Navbarpage';
import VedioEditingHome from './components/VedioEditingHome';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbarpage />
      <VedioEditingHome />
      <Footer />
    </div>
  );
}

export default App;
