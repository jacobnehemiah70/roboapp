import React from 'react';
import './App.css';
import CardList from '../component/CardList'
import { robots } from '../robots';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchField: "",
            robot: robots
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const filteredrobots = this.state.robot.filter(item => {
            return item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        console.log(filteredrobots);

        return (
            <div className="App">
                <h1>RoboFriends</h1>
                <div className='p2'>
                    <input type='text'
                        placeholder='search robotss'
                        className='pa3 ba b--green bg-lightest-blue'
                        onChange={this.onSearchChange} />
                </div>
                <CardList robots={filteredrobots} />
            </div>
        );
    }
}
export default App;