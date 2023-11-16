import './index.css'

const SalaryRangeItem = props => {
  const {salaryRangeDetails, onClickSalaryRange} = props
  const {salaryRangeId, label} = salaryRangeDetails

  const salaryRangeSelected = () => onClickSalaryRange(salaryRangeId)

  return (
    <li className="salary_range_bg_container">
      <input
        type="radio"
        name="salary_types"
        id={salaryRangeId}
        onClick={salaryRangeSelected}
      />
      <label className="salary_label_elements" htmlFor={salaryRangeId}>
        {label}
      </label>
    </li>
  )
}

export default SalaryRangeItem
