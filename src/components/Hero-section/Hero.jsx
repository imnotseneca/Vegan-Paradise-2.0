/* eslint-disable react/prop-types */
import './card.css'
import Header from '../Header/Header'
import MainSection from './MainSection'
import {headerData} from '../../data/headerData'

export default function Hero ({ onClick, productCount }) {
  
   return ( 
        <>
            <Header 
            headerData={headerData}
            onClick={onClick}
            productCount={productCount}
            />
            <MainSection/>
        </>
    )

}