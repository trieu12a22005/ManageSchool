import { Route, Routes } from 'react-router-dom'
import Login from 'pages/login/login'
import ProtectedRoute from 'routes/protectedRoute'
import Register from '@/pages/register/register'
import Home from './pages/home/home'
import Profile from './pages/profile/profile'

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <Login />
          }
        />
        <Route
          path="/register"
          element={

            <Register />
          }
        />
        <Route
          path="/"
          element={

            <Home />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
