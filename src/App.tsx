import { Route, Routes } from 'react-router-dom'
import Login from 'pages/login/login'
import ProtectedRoute from 'routes/protectedRoute'
import Register from 'pages/login/register/register'

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
      </Routes>
    </>
  )
}

export default App
