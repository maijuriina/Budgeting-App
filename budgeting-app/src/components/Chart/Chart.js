import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // map is used to retrieve a single value array from dataPoint object
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.amount);
  const totalMaximum = Math.max(...dataPointValues); // totalMaximum is the highest spent amount of the year - Math.max doesn't accept arrays so spread to pull out standalone arguments

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          amount={dataPoint.amount}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
// dataPoint as object with properties

export default Chart;
