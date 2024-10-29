import { Provider } from 'react-redux';
import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
import Watch from './components/Watch';
import store from './utils/store'
import { useSelector } from 'react-redux';
import {createBrowserRouter, RouterProvider, Route, Link} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer/>,
      },
      { 
        // path: '/watch/:videoId',
        path: '/watch',
        element: <Watch />,
      }
    ]
  }
])


function App() {

  return (

    <Provider store={store}>

      <div className="App">
        
        <Head/>
        <RouterProvider router={router}/>

      </div>

    </Provider>


  );
}

export default App;
