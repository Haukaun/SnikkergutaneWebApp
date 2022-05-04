import {Routes, Route} from "react-router-dom"
import SignInForm from "./components/signin/SignInForm";
import "./styles/global.css"

function App() {


  return (
    <div>
        <Routes>
            <Route path="/signin" element={<SignInForm />}/>
        </Routes>
    </div>
  );
}

export default App;
