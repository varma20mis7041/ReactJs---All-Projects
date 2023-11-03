// Write your code here

import './index.css'

import {Cell, PieChart, Pie, Legend} from 'recharts'

const VaccinationByAge = props => {
  const {vaccinationByAgeData} = props
  console.log('in vaccination by age ', vaccinationByAgeData)
  return (
    <div className="vaccination_by_age_bg_container">
      <h1 className="vaccination_by_age_main_heading">Vaccination by age</h1>

      <PieChart width={1000} height={300}>
        <Pie
          data={vaccinationByAgeData}
          dx="50%"
          dy="50%"
          startAngle={0}
          endAngle={360}
          innerRadius="0%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="45-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend iconType="circle" />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
