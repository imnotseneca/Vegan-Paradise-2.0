import './card.css'
import Header from '../Header/Header'
import MainSection from './MainSection'
import {headerData} from '../../data/headerData'

export default function Hero () {
  
   return ( 
        <>
            <Header 
            headerData={headerData}
            />
            <MainSection/>
        </>
    )

}