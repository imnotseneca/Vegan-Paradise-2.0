/* eslint-disable react/prop-types */
import Hero from "../components/Hero-section/Hero";

export default function Home ({ onClick, productCount }) {
    return (
        <>
        <Hero
        onClick={onClick}
        productCount={productCount}/>
        </>
    )
}