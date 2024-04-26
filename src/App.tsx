import { useEffect, useState } from 'react'

import './App.css'
import Form from './components/Form'

function App() {


    return (
        <>
            <header className='bg-lime-600 py-3'>
                <div className='max-w-4xl mx-auto flex justify-between items-center'>
                    <h1 className='text-center text-lg font-bold text-white uppercase'>Contador de Calorias</h1>
                    <button className='h-15 rounded-full  p-3 mr-3 bg-black text-white font-bold'>Reiniciar APP</button>
                </div>
            </header>
            <section className='bg-lime-500 py-20 px-5'>
                <div className='max-w-4xl  mx-auto '>
                    <Form />

                </div>

            </section>



        </>
    )
}

export default App
