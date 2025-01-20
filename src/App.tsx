import NavBar from "./components/navbar"
import LogoHeader from './assets/logo.png'
import BackgroundBody from './assets/background.png'

function App() {

  return (
    <>
    <main className="px-10 min-h-screen" style={{ backgroundImage : `url(${BackgroundBody})` }}>
      <NavBar/>
      <header className="flex justify-center">
        <img src={LogoHeader} alt="" />
      </header>
    </main>
    </>
  )
}

export default App
