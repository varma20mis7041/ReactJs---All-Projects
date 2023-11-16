import './index.css'

const EmployeeTypeItem = props => {
  const {employeeDetails, onClickEmployeeType} = props
  const {label, employmentTypeId} = employeeDetails
  const checkBoxClicked = () => {
    console.log('employee_type_employee_type_item', employmentTypeId)
    return onClickEmployeeType(employmentTypeId)
  }
  return (
    <>
      <li className="employee_type_container">
        <input
          type="checkbox"
          id={employmentTypeId}
          onClick={checkBoxClicked}
        />
        <label className="employee_type_label_text" htmlFor={employmentTypeId}>
          {label}
        </label>
      </li>
    </>
  )
}

export default EmployeeTypeItem
