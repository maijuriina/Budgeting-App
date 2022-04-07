import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillAmount = "0%";
  //check if month has expenses
  console.log(props.maxValue);
  if (props.maxValue > 0) {
    barFillAmount = Math.round((props.amount / props.maxValue) * 100) + "%";
    console.log(barFillAmount);
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillAmount }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
// style requires a JS object, so attributes passed within {}

export default ChartBar;
