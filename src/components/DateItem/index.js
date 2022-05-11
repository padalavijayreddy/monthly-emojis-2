import './index.css'

const DateItem = props => {
  const {dateDetails, updateDateItemEmoji} = props
  const {id, date, emojiUrl, emojiName} = dateDetails

  const onClickDate = () => {
    updateDateItemEmoji(id)
  }

  return (
    <li className="date-item">
      <button type="button" className="date-button" onClick={onClickDate}>
        {date}
        {emojiUrl ? (
          <img className="date-emoji" src={emojiUrl} alt={emojiName} />
        ) : null}
      </button>
    </li>
  )
}

export default DateItem
