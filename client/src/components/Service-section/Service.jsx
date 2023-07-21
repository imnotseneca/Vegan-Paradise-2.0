import "./service.css";
import Process from "./Process";
import { processData } from "../../data/processData";

export default function Service() {
  return (
    <section id="service" className="service-section">
      <div className="service-header-container">
        <h2 className="service-header">Service process</h2>
        <span className="service-text">How it works</span>
      </div>
      <Process processData={processData}></Process>
    </section>
  );
}
