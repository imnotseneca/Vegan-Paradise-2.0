import './service.css'
import Process from "./Process"


export default function Service () {
    return (
        <section className="service-section">
            <h2 className="service-header">Service process</h2>
            <div className="process-container">
            <Process />
            <Process />
            <Process />
            <Process />
            </div>
        </section>
    )
}