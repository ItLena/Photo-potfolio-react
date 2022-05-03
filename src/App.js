import Cards from "./components/Cards";
import Landing from "./components/Landing";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return(
 <>
   <main>
   <div className="top-container">
      <Router>
        <Routes>
       <Route path="/" exact element = {<Landing /> } /> 
       <Route path="/cards" exact element = { <Cards />} />  
    
      </Routes>
    </Router>
    <Cards />
    </div>  
  </main>
  <footer>
    <p>&copy; Elena Bordinghaus</p>
    <p><a href="https://se.linkedin.com/in/elena-bordinghaus-71520043">Linkedin</a></p>
  </footer>
   </>
  )
   
}

export default App;
