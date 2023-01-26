import React, { useState } from 'react'
import axios from 'axios'
import background from '../assets/cover.jpg'


interface pokemonData{
        name: string,
        id: number,
        base_experience: number,
        sprites: {
            front_default: string
        },
        height: number
}

export default function Home() {
    
    const [data, setData] = useState<pokemonData | null>(null)
    const [nombre, setNombre] = useState<string>('')
    const [id, setId] = useState<number | any>(0);
    
    const GetData = async(e: any) =>{
        e.preventDefault()
        const res = await axios.get(`http://localhost:8000/api/pokemon/${nombre != "" ? nombre : id}`)
        const data = await res.data;
        setData(data);
        
        await axios.post("http://localhost:8000/api/pokemon/", {
            name: data?.name,
            id: data?.id,
            experience: data?.base_experience,
            front_default: data?.sprites.front_default,
            height: data?.height
        })
    }
  return (
    <div className='main flex justify-around py-48 h-[100vh]'>
        <section className='flex flex-col'>
            <img src={data == null ? background : data.sprites.front_default} className="rounded-full w-52 h-52 sticky left-[19%]" />
            <div className={`grid gap-4 mt-10 p-3 rounded-3xl w-80 ${data == null ? 'h-14' : 'h-auto'} bg-black`}>
                {
                    data != null ?
                    <>
                        <h2 className='text-green-400 font-semibold text-center'>{data?.name}</h2>
                        <h2 className='text-white'>identificacion: {data?.id}</h2>
                        <h2 className='text-white'>experiencia: {data?.base_experience}</h2>
                        <h2 className='text-white'>altura: {data?.height}</h2>
                    </> 
                    : null
                }
                
            </div>
        </section>
        <section className='text-center w-[20%]'>
            <form onSubmit={GetData}>
                <h2 className='text-white text-xl'>App</h2>
                <div className='grid grid-cols-1 gap-6 my-6'>
                    <input id="id" type='number' placeholder='ID' className='text-center bg-transparent border-[2px] border-white rounded-md h-14' onChange={(e)=>setId(e.target.value)} />
                    <input id="id" placeholder='NOMBRE*' className='text-center bg-transparent border-[2px] border-white rounded-md h-14' onChange={(e)=>setNombre(e.target.value)} />
                </div>
                <button className='bg-lime-400 mt-14 rounded-3xl w-52 relative left-[60%] font-semibold text-white px-4 py-3 flex content-center justify-evenly text-lg'><img src={background} className="rounded-full w-8 h-8" />Consultar</button>
            </form>
        </section>
    </div>
  )
}
