import "./process.css";

// eslint-disable-next-line react/prop-types
export default function Process({ processData }) {
  // eslint-disable-next-line react/prop-types
  const processList = processData.map((element) => {
    return (
      <div className="process-container" key={element.id}>
        <div className="process-elements-container">
          <img
            src={element.imageURL}
            alt={element.alt}
            className="process-img"
            width={250}
            height={200}
          />
          <div className="process-text-elements">
            <span className="process-number">{element.id}</span>
            <h3 className="process-header">{element.processHeader}</h3>
            <p className="process-description">{element.processText}</p>
          </div>
        </div>
        </div>
    );
  });
  return <div>{processList}</div>;
}
