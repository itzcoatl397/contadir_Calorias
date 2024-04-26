import { useState, ChangeEvent,FormEvent } from 'react'
import { categories } from '../data/category'
import { Activity } from '../types'


function Form() {


    const [activity, setActivity] = useState<Activity>({
        category: 1,
        name: '',
        calories: 0
    })

    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {


        const isNumber = ['category', 'calories'].includes(e.target.id)


        setActivity({
            ...activity,
            [e.target.id]: isNumber ? +e.target.value : e.target.value
        })




    }

    const isValidActivity = () => {
        const { name, calories } = activity;

        return name.trim() != '' && calories > 0
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()


    }


    return (
        <form
            className='space-y-5 bg-white shadow-md p-10 rounded-lg'
            onSubmit={handleSubmit}
        >

            <div className='grid grid-cols-1 gap-3'>

                <label htmlFor="categoria" className='font-bold'>Categoria :</label>
                <select name="category" id="category" className='border border-slate-300 p-2  rounded-lg w-full bg-white'


                    value={activity.category}
                    onChange={handleChange}
                >
                    {

                        categories.map(category => (
                            <option key={category.id} value={category.id} >{category.name}</option>
                        ))

                    }
                </select>
            </div>
            <div className='grid grid-cols-1 gap-3'>

                <label htmlFor="name" className='font-bold'> Actividad:</label>
                <input type="text" name="name" id="name" className='border  border-slate-300 p-2  rounded-lg'
                    placeholder='Ej. Comida,Jugo de  Naranja,Ensalada'

                    value={activity.name}
                    onChange={handleChange}
                />
            </div>
            <div className='grid grid-cols-1 gap-3'>

                <label htmlFor="calories" className='font-bold'> Calorias:</label>
                <input type="number" name="calories" id="calories" className='border  border-slate-300 p-2  rounded-lg' placeholder='Ej.300'


                    value={activity.calories}
                    onChange={handleChange}
                />
            </div>

            <input type="submit" value={
                activity.category === 1 ? 'Guardando Comida' : "Guardando Ejercicio"
            } className='bg-gray-800 w-full text-wrap text-cente text-white font-bold p-2 rounded-md  cursor-pointer hover:bg-gray-900 uppercase disabled:opacity-55' disabled={!isValidActivity()} />
        </form>
    )
}

export default Form
