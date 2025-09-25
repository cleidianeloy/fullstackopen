import StatisticLine from "./StatisticsLine";
const Statistics = ({good, neutral, bad}) => {

  const sum = () => {
    return good + neutral + bad;
  }

  const average = () => {
    const goodPoints = good * 1;
    const neutralPoints = neutral * 0;
    const badPoints = bad * -1;
    const sumPoints = goodPoints + neutralPoints + badPoints;

    return sumPoints / sum();
  }

  const goodPercent = () => {
      return good / sum() * 100;
  }

    
  return (
        <div>
            <h1>Statistics</h1>
            {
                [good, neutral, bad].every((value) => value === 0) ? "No feedback given" :
                 <table>
                    <tbody>
                        <StatisticLine text="Good" value={good}/>
                        <StatisticLine text="Neutral" value={neutral}/>
                        <StatisticLine text="Bad" value={bad}/>
                        <StatisticLine text="All" value={sum()}/>
                        <StatisticLine text="Average" value={average()}/>
                        <StatisticLine text="Positive" value={goodPercent()}/>
                    </tbody>  
                </table>
            }

        </div>
    
)
}
export default Statistics