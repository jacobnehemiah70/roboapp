import React from 'react';
import './App.css';
import CardList from '../component/CardList/CardList'
import SearchBox from '../component/SearchBox/SearchBox'
import { robots } from '../robots';
// import HomePage from '../component/HomePage/HomePage';
import LogIn from '../container/LogIn/LogIn'
import Particles from 'react-particles-js';
import Scroll from '../component/Scroll/Scroll'


const Particlesoptions = {
    particles: {
        number: {
            value: 90,
            density: {
                enable: true,
                valueArea: 800
            },

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
            pages: 'login'
        }
    }

    // onSearchChange = (event) => {
    //     this.setState({ searchField: event.target.value })
    // }
    onInputChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    isSignedIn = (event) => {
        this.setState({ isSignedIn: false })
    }
    // isSignedOut = (event) => {
    //     this.setState({ isSignedOut: false })
    // }
    swtichPage = () => {
        this.setState({ pages: 'home' })
    }

    render() {
        const filteredrobots = this.state.robot.filter(item => {
            return item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });

        // console.log(filteredrobots);

        return (
            <div className="App">
                <Particles className='particles'
                    params={Particlesoptions} />

                <h1>RoboFriends</h1>
                
                <SearchBox onSearchChange={this.onSearchChange} />

                {
                    this.state.pages === 'login' ?
                        <LogIn swtichPage={this.swtichPage} /> : null
                }
                {
                    !filteredrobots.length ?
                        <h1 className='f4 mt6'>No Result Found</h1> : null
                }
                <Scroll>
                    <CardList robots={filteredrobots} />
                </Scroll>

            </div>
        );
    }
}
export default App;