import './index.css'

const EmojiItem = props => {
  const {emojiDetails, isActive, updateActiveEmojiId} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const activeClassName = isActive ? 'highlight-image' : ''

  const onClickEmoji = () => {
    updateActiveEmojiId(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-button" onClick={onClickEmoji}>
        {emojiName}
        <img
          className={`emoji-image ${activeClassName}`}
          src={emojiUrl}
          alt={emojiName}
        />
      </button>
    </li>
  )
}

export default EmojiItem
