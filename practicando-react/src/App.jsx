import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import NavBar from './components/NavBar';
import ItemListContainer from './conteiners/ItemListContainer';

function App() {
  //en base a este estado voy a definir si se ve o no mi ItemListContainer
  const [containerVisible, setContainerVisible] = useState(true)
  const onHideContainer = () => {
    setContainerVisible(false)
  }

  return (
    <div className="padre">
      
      <NavBar/>
      {containerVisible ?
        <ItemListContainer greeting="Hello Word"/>
        :
        null
      }
      <button onClick={onHideContainer} >Desmontar el ItemListContainer</button>
      <Input/>
    </div>
  );
}

export default App;
