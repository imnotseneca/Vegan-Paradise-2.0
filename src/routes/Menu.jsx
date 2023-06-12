import './menu.css'
import Options from "../components/Menu-section/Options"
import Foodcard from "../components/Menu-section/Foodcard"


export default function Menu () {
    return (
        <section id='menu' className="menu-section">
            <h2 className="menu-header">Our menu</h2>
            <Options />
            <div className="menu-container">
            <Foodcard/>
            </div>
        </section>
    )
}