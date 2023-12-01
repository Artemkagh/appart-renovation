import Header from "./components/Header";
import Home from "./components/Home";
import {Routes, Route} from 'react-router-dom';
import PartPHP from "./components/PartPHP";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/php" element={<PartPHP />} />
      </Routes>
      
      
    </>
  );
}

export default App;
