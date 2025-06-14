import { pizzas } from '../../data/pizzas'
import '../css/Home.css'
import Cardpizza from "./Cardpizza"
import Header from "./Header"


const Home = () => {

    return (
        <>
        <Header/>

        <section className='row'>
            {pizzas.map (pizzas => (<Cardpizza key={pizzas.id} pizzas={pizzas}/> ))}
        </section>

        
        </>
        
        
    )
}

export default Home