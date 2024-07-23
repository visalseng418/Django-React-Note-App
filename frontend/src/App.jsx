import react from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { useHistory} from "react"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Register from "./pages/Register"
import ProtectedRoute from "./components/ProtectedRoute"



function Logout() {
  localStorage.clear()
  return <Navigate to="/Login"/>
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register/>
}

function App() {
 return (
  
   <BrowserRouter>
    <Routes>
      <Route path="/" element={
      <ProtectedRoute>
        <Home/>
        </ProtectedRoute>
        }/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/register" element={<RegisterAndLogout/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
   </BrowserRouter>
  
 
  )
}

export default App
