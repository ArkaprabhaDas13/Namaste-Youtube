import { Provider } from 'react-redux';
import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import store from './utils/store'
import { useSelector } from 'react-redux';

function App() {

  return (

    <Provider store={store}>

      <div className="App">
        
        <Head/>
        <Body/>

      </div>

    </Provider>


  );
}

export default App;
