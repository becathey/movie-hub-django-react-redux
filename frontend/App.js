import React from 'react'
import Header from './src/components/Header/Header'
import Footer from './src/components/Footer/Footer'
import './App.css'

function App() {
    return (
        <div className='App'>
            <main>
                <Header />
                <h1>Movie Hub</h1>
            </main>
            <Footer />
        </div>
    )
}

export default App