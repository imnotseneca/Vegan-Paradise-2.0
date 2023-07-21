import Card from './Card'
import {useState, useEffect} from 'react'
import './mainsection.css'

export default function MainSection () {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowWidth = () => {
            setWindowWidth(window.innerWidth)
        };

        window.addEventListener('resize',handleWindowWidth)

        return () => {
            window.removeEventListener('resize', handleWindowWidth);
        }
    }, [])
    return (
        <main>
            {windowWidth > 896 ? <Card /> : null}
        </main>
    )
}