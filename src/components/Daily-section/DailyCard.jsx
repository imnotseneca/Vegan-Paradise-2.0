import './dailycard.css'
import { daily } from './dailydata'

export default function DailyCard () {
    const dailyItems = daily.map(daily => 
        <div className='dailycard-container' key={daily.id}>
            <h3 className='dailycard-header'>{daily.title}</h3>
            <img src={daily.imgURL} alt={daily.title} className='dailycard-img'/>
            <p className='dailycard-price'>at only: ${daily.price}</p>
            <p className='dailycard-paragraph'>Ingredients: {daily.ingredients} </p>
        </div>
        
        )
    return (
        <>
        {dailyItems}
        </>
            
    )
}