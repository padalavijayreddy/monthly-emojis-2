import {Component} from 'react'

import EmojiItem from '../EmojiItem'
import DayItem from '../DayItem'
import DateItem from '../DateItem'

import './index.css'

const emojisList = [
  {
    id: '380e6284-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-happy.png',
  },
  {
    id: '380e64f0-a454-11ec-b909-0242ac120002',
    emojiName: 'Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-happy.png',
  },
  {
    id: '380e6626-a454-11ec-b909-0242ac120002',
    emojiName: 'Neutral',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-neutral.png',
  },
  {
    id: '380e6748-a454-11ec-b909-0242ac120002',
    emojiName: 'Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-sad.png',
  },
  {
    id: '380e69c8-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-sad.png',
  },
]

const daysList = [
  {
    id: '3639dd44-a5d5-11ec-b909-0242ac120002',
    day: 'Sun',
  },
  {
    id: '3639e17c-a5d5-11ec-b909-0242ac120002',
    day: 'Mon',
  },
  {
    id: '3639e37a-a5d5-11ec-b909-0242ac120002',
    day: 'Tue',
  },
  {
    id: '3639e532-a5d5-11ec-b909-0242ac120002',
    day: 'Wed',
  },
  {
    id: '3639e8c0-a5d5-11ec-b909-0242ac120002',
    day: 'Thu',
  },
  {
    id: '3639ea32-a5d5-11ec-b909-0242ac120002',
    day: 'Fri',
  },
  {
    id: '3639eb90-a5d5-11ec-b909-0242ac120002',
    day: 'Sat',
  },
]

const initialDatesList = [
  {
    id: '380e6b12-a454-11ec-b909-0242ac120002',
    date: '01',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e6cac-a454-11ec-b909-0242ac120002',
    date: '02',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e6de2-a454-11ec-b909-0242ac120002',
    date: '03',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e6efa-a454-11ec-b909-0242ac120002',
    date: '04',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7012-a454-11ec-b909-0242ac120002',
    date: '05',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e712a-a454-11ec-b909-0242ac120002',
    date: '06',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7454-a454-11ec-b909-0242ac120002',
    date: '07',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7576-a454-11ec-b909-0242ac120002',
    date: '08',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e768e-a454-11ec-b909-0242ac120002',
    date: '09',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e77a6-a454-11ec-b909-0242ac120002',
    date: '10',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e78b4-a454-11ec-b909-0242ac120002',
    date: '11',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e79d6-a454-11ec-b909-0242ac120002',
    date: '12',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7aee-a454-11ec-b909-0242ac120002',
    date: '13',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7c06-a454-11ec-b909-0242ac120002',
    date: '14',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7ec2-a454-11ec-b909-0242ac120002',
    date: '15',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7fda-a454-11ec-b909-0242ac120002',
    date: '16',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e80e8-a454-11ec-b909-0242ac120002',
    date: '17',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8282-a454-11ec-b909-0242ac120002',
    date: '18',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e83e0-a454-11ec-b909-0242ac120002',
    date: '19',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8516-a454-11ec-b909-0242ac120002',
    date: '20',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8638-a454-11ec-b909-0242ac120002',
    date: '21',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e88cc-a454-11ec-b909-0242ac120002',
    date: '22',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e89f8-a454-11ec-b909-0242ac120002',
    date: '23',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8b1a-a454-11ec-b909-0242ac120002',
    date: '24',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8c32-a454-11ec-b909-0242ac120002',
    date: '25',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8d40-a454-11ec-b909-0242ac120002',
    date: '26',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8e4e-a454-11ec-b909-0242ac120002',
    date: '27',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8f70-a454-11ec-b909-0242ac120002',
    date: '28',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e90e2-a454-11ec-b909-0242ac120002',
    date: '29',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e94de-a454-11ec-b909-0242ac120002',
    date: '30',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e96be-a454-11ec-b909-0242ac120002',
    date: '31',
    emojiUrl: '',
    emojiName: '',
  },
]

class MonthlyEmojis extends Component {
  state = {
    activeEmojiId: emojisList[0].id,
    datesList: initialDatesList,
    selectedEmoji: emojisList[0].emojiUrl,
    selectedDay: daysList[0].day,
  }

  onChangeEmojiOptionID = event => {
    this.setState({selectedEmoji: event.target.value})
  }

  onChangeWeekOptionID = event => {
    this.setState({selectedDay: event.target.value})
  }

  getFilterCount = () => {
    const {datesList, selectedEmoji, selectedDay} = this.state

    let selectedDayIndex = daysList.findIndex(
      eachDay => eachDay.day === selectedDay,
    )
    selectedDayIndex += 1

    const filteredList = datesList.filter(
      eachDate =>
        (eachDate.date - selectedDayIndex) % 7 === 0 &&
        eachDate.emojiUrl === selectedEmoji,
    )

    const filterCountValue = filteredList.length

    const value =
      filterCountValue < 10 ? `0${filterCountValue}` : filterCountValue

    return value
  }

  renderMonthFilters = () => {
    const {selectedEmoji, selectedDay} = this.state
    const filterCount = this.getFilterCount()

    return (
      <div className="filters-list">
        <div className="select-fields-container">
          <select
            id="select"
            className="input"
            value={selectedEmoji}
            onChange={this.onChangeEmojiOptionID}
          >
            {emojisList.map(eachOption => (
              <option key={eachOption.id} value={eachOption.emojiUrl}>
                {eachOption.emojiName}
              </option>
            ))}
          </select>
          <select
            id="select"
            className="input"
            value={selectedDay}
            onChange={this.onChangeWeekOptionID}
          >
            {daysList.map(eachOption => (
              <option key={eachOption.id} value={eachOption.day}>
                {eachOption.day}
              </option>
            ))}
          </select>
        </div>
        <h1 className="filter-count-text">{filterCount}</h1>
      </div>
    )
  }

  updateActiveEmojiId = id => {
    this.setState({
      activeEmojiId: id,
    })
  }

  renderEmojisList = () => {
    const {activeEmojiId} = this.state

    return (
      <ul className="emojis-list">
        {emojisList.map(eachEmojiItem => (
          <EmojiItem
            key={eachEmojiItem.id}
            isActive={activeEmojiId === eachEmojiItem.id}
            emojiDetails={eachEmojiItem}
            updateActiveEmojiId={this.updateActiveEmojiId}
          />
        ))}
      </ul>
    )
  }

  updateDateItemEmoji = id => {
    const {activeEmojiId, datesList} = this.state

    const emojiObject = emojisList.find(
      eachEmojiItem => eachEmojiItem.id === activeEmojiId,
    )

    const dateObject = datesList.find(eachDateItem => eachDateItem.id === id)

    if (dateObject.emojiUrl === emojiObject.emojiUrl) {
      this.setState(prevState => ({
        datesList: prevState.datesList.map(eachDateItem => {
          if (id === eachDateItem.id) {
            return {...eachDateItem, emojiUrl: '', emojiName: ''}
          }
          return eachDateItem
        }),
      }))
    } else {
      this.setState(prevState => ({
        datesList: prevState.datesList.map(eachDateItem => {
          if (id === eachDateItem.id) {
            const updatedEmojiUrl = emojiObject.emojiUrl
            const updatedEmojiName = emojiObject.emojiName
            return {
              ...eachDateItem,
              emojiUrl: updatedEmojiUrl,
              emojiName: updatedEmojiName,
            }
          }
          return eachDateItem
        }),
      }))
    }
  }

  renderMonthList = () => {
    const {datesList} = this.state

    return (
      <div className="month-container">
        <h1 className="month-name">January</h1>
        <ul className="week-days-list">
          {daysList.map(eachDay => (
            <DayItem key={eachDay.id} dayDetails={eachDay} />
          ))}
        </ul>
        <ul className="dates-list">
          {datesList.map(eachDate => (
            <DateItem
              key={eachDate.id}
              dateDetails={eachDate}
              updateDateItemEmoji={this.updateDateItemEmoji}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="heading">Monthly Emojis</h1>
        <div className="dates-list-filter-container">
          {this.renderMonthList()}
          <div className="filters-container">
            {this.renderEmojisList()}
            {this.renderMonthFilters()}
          </div>
        </div>
      </div>
    )
  }
}

export default MonthlyEmojis
