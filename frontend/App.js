import React, {useEffect} from 'react'
import axios from 'axios'
// import { Routes, Route } from 'react-router-dom'
import Header from './src/components/Header/Header'
import Footer from './src/components/Footer/Footer'
// import Home from './src/components/Home/Home'
// import About from './src/components/About/About'
// import PageNotFound from './src/components/PageNotFound/PageNotFound'
import './App.css'

function App() {
    useEffect(() => {
        const fetchMovies = async () => {
            const result = await axios('/movies/api/movies/')
            .catch((err) => {
                console.log("Error:", err)
            })
            console.log(result.data)
        }
        fetchMovies()
    }, [])
    return (
        <div className='App'>
            <Header />
            <main>
                {/* <Header /> */}
                {/* <Routes>
                    <Route index element={<Home />} />
                    <Route path='home' element={<Home />} />
                    <Route path='movies' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes> */}
            </main>
            <Footer />
        </div>
    )
}

export default App