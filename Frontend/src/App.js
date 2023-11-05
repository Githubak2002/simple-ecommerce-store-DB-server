import Nav from './components/Nav';
import Home from './components/Home'
import Cart from './components/Cart'
// import Temp from './components/Temp';
import Errorpg from './components/Errorpg';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Favourite from './components/WatchList';
import store from './Store/store';
import { Provider } from 'react-redux';
import WatchList from './components/WatchList'

function App() {
  return (
    <>
    <Provider store = {store}> 

      <Router>
        <Nav />
        {/* <Temp /> */}
        <Routes>
        {/* <Route path='/' element={<Temp />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/watchList' element={<WatchList />} />
        <Route path='*' element={<Errorpg />} />
        </Routes>
      </Router>

      </Provider>
    </>
  );
}

export default App;
