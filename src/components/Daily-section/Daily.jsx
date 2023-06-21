import './daily.css'
import DailyCard from './DailyCard'

export default function Daily () {
    return (
        <section id='daily' className='daily-section'>
            <h2 className='daily-header'>Daily recommendations:</h2>
            <div className='cards-container'>
                <DailyCard/>
            </div>
        </section>
    )
}