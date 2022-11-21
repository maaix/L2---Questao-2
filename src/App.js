
import TopSection from './components/TopSection/TopSection';
import TitleSection from './components/TitleSection/TitleSection';
import './App.css';
import GetStartedSection from './components/GetStartedSection/GetStartedSection';
import NumberDashboard from './components/NumberDashboard/NumberDashboard';
import FinalSection from './components/FinalSection/FinalSection';
import Cards from './components/Carrosel/Cards';





function App() {
  return (
    <div className="App">
      <TopSection />
      <TitleSection />
      <Cards />
      <GetStartedSection />
      <NumberDashboard />
      <FinalSection />
    </div>
  );
}

export default App;
