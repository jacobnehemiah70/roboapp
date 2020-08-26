import React from 'react';
import './App.css';
import CardList from '../component/CardList/CardList'
import SearchBox from '../component/SearchBox/SearchBox'
import { robots } from '../robots';
import HomePage from '../component/HomePage/HomePage';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchField: "",
            robot: robots,
            isSignedIn: true
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    isSignedIn = (event) => {
        this.setState({ isSignedIn: false })
    }

    render() {
        const filteredrobots = this.state.robot.filter(item => {
            return item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        console.log(filteredrobots);

        return (
            <div className="App">
                <h1>RoboFriends</h1>
                {
                    this.state.isSignedIn ?
                        <HomePage isSignedIn={this.isSignedIn} /> : null
                }

                <SearchBox onSearchChange={this.onSearchChange} />
                {
                    !filteredrobots.length ?
                        <h1>No Result Found</h1> : null
                }

                <CardList robots={filteredrobots} />
            </div>
        );
    }
}
export default App;