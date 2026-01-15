import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./layout/Layout"
import Login from "./auth/ui/pages/Login"
import { Toaster } from "sonner"
import Register from "./auth/ui/pages/Register"

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App