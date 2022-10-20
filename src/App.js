import SignInForm from "./components/SignInForm"
import RegistrationForm from "./components/RegistrationForm";
import { BrowserRouter as Router, Routes, Route} from  "react-router-dom"
import MainPage from "./components/MainPage";


function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path = "/" element = {<MainPage/>}/>
          <Route path = "/login" element = {<SignInForm/>}/>
          <Route path = "/registration" element = {<RegistrationForm/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
