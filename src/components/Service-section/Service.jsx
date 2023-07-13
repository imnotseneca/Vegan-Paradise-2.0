import './service.css'
import Process from "./Process"
import {processData} from '../../data/processData'

export default function Service () {
    return (
        <section id="service" className="service-section">
            <h2 className="service-header">Service process</h2>
            <div className="process-container">
            <Process 
                processData={processData}/>
            </div>
        </section>
    )
}