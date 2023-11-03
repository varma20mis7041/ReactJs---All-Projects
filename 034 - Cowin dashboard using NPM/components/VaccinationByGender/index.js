// Write your code here
import './index.css'

import {Cell, PieChart, Pie, Legend} from 'recharts'

const VaccinationByGender = props => {
  const {vaccinationByGenderData} = props
  console.log('in genderVaccination', vaccinationByGenderData)

  return (
    <div className="vaccination_by_gender_chart_bg_container">
      <h1 className="vaccination_by_gender_main_heading">
        Vaccination By Gender
      </h1>

      <PieChart width={1000} height={300}>
        <Pie
          data={vaccinationByGenderData}
          cx="50%"
          cy="70%"
          startAngle={0}
          endAngle={180}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend iconType="circle" />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
