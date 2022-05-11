import './index.css'

const DayItem = props => {
  const {dayDetails} = props
  const {day} = dayDetails

  return (
    <li className="day-item">
      <p className="day-text">{day}</p>
    </li>
  )
}

export default DayItem
