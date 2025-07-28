import { Route, Routes } from 'react-router-dom'
import Login from 'pages/login/login'
import ProtectedRoute from 'routes/protectedRoute'
import Register from '@/pages/register/register'
import Home from './pages/home/home'

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute>
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
