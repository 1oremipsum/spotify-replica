import { BrowserRouter,  Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Artists from "./pages/Artists"
import Artist from "./pages/Artist"
import Songs from "./pages/Songs"
import Song from "./pages/Song"
import Home from "./pages/Home"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/song/:id" element={<Song />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
