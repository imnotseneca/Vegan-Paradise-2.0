import './daily.css'
import DailyCard from './DailyCard'

export default function Daily () {
    return (
        <section id='products' className='daily-section'>
            <h2 className='daily-header'>Our daily recommendations:</h2>
            <div className='cards-container'>
                <DailyCard/>
            </div>
        </section>
    )
}