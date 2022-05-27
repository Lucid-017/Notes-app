import {
  BrowserRouter as Router,
  Route,
  Routes
  
} from "react-router-dom";

import './App.css';
import Header from './components/header'
import Notelistpage from './pages/notelistpage'
import Notepage from './pages/notePage'
import NotePage from "./pages/notePage";


function App() {
  return (
    <Router>
      <div className="container dark">
        <div className='app'>
          <Header/>
          
          <Route path="/" exact component={Notelistpage}/>
          <Route path="/note/:id"  component={NotePage} />
        </div>  
      </div>
    </Router>
    
  ); 
}
export default App;
