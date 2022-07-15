import './partials/App.scss';
import './partials/reset.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Game from './components/Game'
import Edit from './components/Edit';
import Nav from './components/Nav';
import Start from './components/Start';
import Center from './components/Center';



function App() {
  return (
      <>
    <BrowserRouter>
        <div className="background">
        </div>
      <div className="App">
          <Nav />
          <Start/>
          <Center/>
          {/*<Routes>*/}
          {/*  <Route exact path="/" element={<Game />} />*/}
          {/*</Routes>*/}
      </div>
    </BrowserRouter>
      </>
  );
}

export default App;
