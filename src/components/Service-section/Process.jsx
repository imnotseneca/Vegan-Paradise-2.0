import './process.css'


export default function Process(props) {
    // eslint-disable-next-line react/prop-types
    const processList = props.processData.map(element => {
        return (
            <div className='process-item' key={element.id}>
            <img src={element.imageURL} alt={element.alt} className="process-img"/>
            <p className="process-description">{element.processText}</p>
            </div>
        )
    })
    return (
        <>
        {processList}
        </>
    )
}