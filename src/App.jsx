import CarListing from "./pages/CarListing"
import "./assets/global.css"
import { BrowserRouter } from "react-router-dom"


function App() {


  return (
    <BrowserRouter>
    <CarListing/>
    </BrowserRouter>
  )
}

export default App
