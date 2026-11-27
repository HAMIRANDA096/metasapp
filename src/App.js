
import './App.css';
import Encabezamiento from './componentes/encabezamiento';
import Principal from './componentes/principal';
import Pie from './componentes/pie';


function App() {
  return (
    <div className="App">
      <Encabezamiento />
      <Principal />
      <Pie />
      
    </div>
  );
}

export default App;