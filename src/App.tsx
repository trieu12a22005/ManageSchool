import { Route, Routes } from 'react-router-dom'
import Login from 'pages/login/login'
import ProtectedRoute from 'routes/protectedRoute'

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
      </Routes>
    </>
  )
}

export default App
