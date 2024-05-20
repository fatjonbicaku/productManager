import {BrowserRouter, Routes, Route} from "react-router-dom"
import CreateProducts from "./components/CreateProducts"
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/products" element={<CreateProducts/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
