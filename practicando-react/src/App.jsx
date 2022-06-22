import './App.css';
import Input from './components/Input';
import NavBar from './components/NavBar';
import ItemListContainer from './conteiners/ItemListContainer';

function App() {
  
  return (
    <div className="padre">
      
      <NavBar/>
      <ItemListContainer greeting="Hello Word"/>
      <Input/>
    </div>
  );
}

export default App;
