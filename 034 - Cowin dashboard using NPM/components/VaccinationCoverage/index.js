// Write your code here
import {BarChart, XAxis, YAxis, Legend, Bar} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {lastSevenDaysVaccination} = props
  console.log('in vaccination coverage component', lastSevenDaysVaccination)
  const dateFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  return (
    <div className="bar_chart_bg_container">
      <h1 className="bar_chart_main_heading">Vaccination Coverage</h1>

      <BarChart
        data={lastSevenDaysVaccination}
        margin={{
          top: 5,
        }}
        width={1000}
        height={500}
      >
        <XAxis
          dataKey="vaccine_date"
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <YAxis
          tickFormatter={dateFormatter}
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar
          dataKey="dose_1"
          name="Dose 1"
          fill=" #5a8dee"
          barWidth="20%"
          className="bar_component"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="dose_2"
          name="Dose 2"
          fill="#f54394"
          barWidth="20%"
          radius={[5, 5, 0, 0]}
          className="bar_component"
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
