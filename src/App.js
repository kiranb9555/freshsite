import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';

import Carousell from './components/Carousell/Carousell';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <div className="App">
<Header className="header" />
<Carousell className="carousel" style={{}} />
<MainContent />
    </div>
  );
}

export default App;
