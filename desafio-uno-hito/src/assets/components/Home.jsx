import { useEffect, useState } from 'react'
//import { pizzas } from '../../data/pizzas'
import '../css/Home.css'
import Cardpizza from "./Cardpizza"
import Header from "./Header"


const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    
    useEffect(() => {
        consultarApi()
    }, [])

    const consultarApi = async () => {
        const url = "http://localhost:5000/api/pizzas";
        const response = await fetch (url);
        const data = await response.json();
        console.log(data)
        setPizzas(data)

    }

    return (
        <>
        <Header/>
        <Cardpizza pizzas={pizzas} />

        
        </>
        
        
    )
}

export default Home