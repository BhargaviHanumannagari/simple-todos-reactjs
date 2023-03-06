import SimpleTodos from './components/SimpleTodos'

import './index.css'

const App = () =>
  class App extends Component {
    state = {
      searchInput: '',
      usersDetailsList: initialTodosList,
    }

    onChangeSearchInput = event => {
      this.setState({
        searchInput: event.target.value,
      })
    }

    deleteUser = uniqueNo => {
      const {usersDeleteList} = this.state
      const filteredDeleteData = usersDeleteList.filter(each => each.id !== id)
      this.setState({
        usersDeleteList: filteredDeleteData,
      })
    }

    render() {
      const {searchInput, usersDeleteList} = this.state
      const searchResults = usersDeleteList.filter(eachUser =>
        eachUser.name.includes(searchInput),
      )
      return (
        <div className="app-container">
          <h1 className="title">Simple Todos</h1>
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <ul className="list-container">
            {searchResults.map(eachUser => (
              <DeleteProfile
                userDetails={eachUser}
                key={eachUser.uniqueNo}
                deleteUser={this.deleteUser}
              />
            ))}
          </ul>
        </div>
      )
    }
  }

export default App
