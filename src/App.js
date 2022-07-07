import './partials/App.scss';
import './partials/reset.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import List from './components/List'
import Edit from './components/Edit';
import Nav from './components/Nav';
import Start from './components/Start';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Nav />
          <Start/>
          <Routes>
            <Route exact path="/" element={<List />} />
            <Route exact path="/edit/:id" element={<Edit />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
