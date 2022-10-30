import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useGetCatListByGender } from './hooks/useGetCatListByGender'

function App() {
    const [data, success, loading, error, fetchCatList] = useGetCatListByGender()

    useEffect(() => {
        fetchCatList()
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                {loading && <p>Loading...</p>}
                {error && <p>Error</p>}
                {data && console.log(data)}
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
