import Header from './components/header';
import Sidebar from './components/sidebar';
import MainContent from './components/mainContent';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="main-section">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
