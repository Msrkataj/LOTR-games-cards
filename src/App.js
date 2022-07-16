import './partials/App.scss';
import './partials/reset.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Game from './components/Game'
import Start from './components/Start';
import Center from './components/Center';



function App() {
  return (
      <>
    <BrowserRouter>
        <div className="background">
        </div>
      <div className="App">

          <Start/>
          <Center/>
      </div>
    </BrowserRouter>
      </>
  );
}

export default App;
