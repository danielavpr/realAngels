import { useAuth0 } from '@auth0/auth0-react'
import { LoginButton } from './Login'
import { Profile } from './Profile'
import { LogoutButton } from './Logout'
import './App.css'

function App() {
  const { isAuthenticated } = useAuth0()
  return (
    <div className="App">
      <header className="App-header">
        <h1>Real Angels</h1>
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  )
}

export default App
