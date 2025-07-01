type ResultsProps = {
  country: string;
  city: string;
  temperature: string;
  condition: string;
  icon: string;
}

const Results = (props: ResultsProps) => {
  return (
    <div>
      {props.country && <div>{props.country}</div>}
      <div className="results-city">{props.city}</div>
      {props.temperature && <div className="results-temp">{props.temperature}℃</div>}
      <div className="results-condition">{props.condition}</div>
      <div>{props.icon && <img src={props.icon} alt={props.condition} />}</div>
    </div>
  );
}

export default Results;
