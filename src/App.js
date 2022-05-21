import './App.css';
import "./component/Utilities/utilities.css"
import NavBar from './component/Navigation/nav-bar';
import Footer  from './component/footer/footer';
import AllRoutes from './Routes/Routes';

function App() {
  return (
    <div className="App jstfy-spce-btwn  flex-column">
      <NavBar/>
        <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
