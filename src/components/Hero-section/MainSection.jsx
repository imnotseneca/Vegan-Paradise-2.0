import Card from './Card'
import './mainsection.css'

export default function MainSection () {
    return (
        <section className='main-section'>
        <Card />
        <img src="https://res.cloudinary.com/dd8ikgzov/image/upload/v1686597564/Vegan-Paradise/vegan-pizza_ks24tg.png" alt="Pizza-image" className='pizza-image' />
        </section>
    )
}