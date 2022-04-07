import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "tammi", amount: "0" },
    { label: "helmi", amount: "0" },
    { label: "maalis", amount: "0" },
    { label: "huhti", amount: "0" },
    { label: "touko", amount: "0" },
    { label: "kesä", amount: "0" },
    { label: "heinä", amount: "0" },
    { label: "elo", amount: "0" },
    { label: "syys", amount: "0" },
    { label: "loka", amount: "0" },
    { label: "marras", amount: "0" },
    { label: "joulu", amount: "0" },
  ];

  // next go through expenses logged and allocate amounts to corresponding months
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // getMonth months start at 0 - use index to pick corresponding chartDataPoint
    chartDataPoints[expenseMonth].amount += expense.amount; // add amount spent in month to chartDataPoint
  }

  // Chart.js expects prop dataPoints, and it is passed here
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
