import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './src/components/Header/Header'
import Footer from './src/components/Footer/Footer'
import Home from './src/components/Home/Home'
import MovieDetail from './src/components/MovieDetail/MovieDetail'
import PageNotFound from './src/components/PageNotFound/PageNotFound'
import './App.css'

function App() {

    return (
      <div className='App'>
        <main>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/movies' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='/movies/api/movies/:id' element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    )
  }

export default App