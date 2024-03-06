import { Routes, Route, BrowserRouter } from "react-router-dom"
import  {Home}  from "./pages/Home/index.jsx"
import  {Footer}  from "./Componentes/footer/index.jsx"

import  BarLocation  from "./Componentes/localizacao/index.jsx"




function App() {

  return (
    <BrowserRouter>
      <Routes>
      
        <Route index element={<Home />} />
        

        

      </Routes>

    </BrowserRouter>
  )
}

export default App
