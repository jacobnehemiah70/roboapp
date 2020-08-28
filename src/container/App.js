import React from 'react';
import './App.css';
import CardList from '../component/CardList/CardList'
import SearchBox from '../component/SearchBox/SearchBox'
import { robots } from '../robots';
import HomePage from '../component/HomePage/HomePage';
import LogIn from '../component/LogIn/LogIn'
import Particles from 'react-particles-js';


const Particlesoptions = {
    particles: {
     number:{
         value:30,
         density:{
             enable:true,
             value_area:800
         },
         	shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 5
            }
     }
    }
}


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchField: "",
            robot: robots,
            isSignedIn: true,
            isSignedOut: true
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    isSignedIn = (event) => {
        this.setState({ isSignedIn: false })
    }
    isSignedOut = (event) => {
        this.setState({ isSignedOut: false })
    }

    render() {
        const filteredrobots = this.state.robot.filter(item => {
            return item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        console.log(filteredrobots);

        return (
            <div className="App">
                <Particles className='particles'
                    params={Particlesoptions}

                />
                <h1>RoboFriends</h1>
                {
                    this.state.isSignedIn ?
                        <HomePage isSignedIn={this.isSignedIn} /> : null
                }
                {
                    this.state.isSignedOut ?
                        <LogIn isSignedOut={this.isSignedOut} /> : null
                }

                <SearchBox onSearchChange={this.onSearchChange} />
                <CardList robots={filteredrobots} />
            </div>
        );
    }
}
export default App;