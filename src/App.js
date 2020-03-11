import React from 'react';
import './App.css';
import NavBar from './NavBar';
import TableComponent from './TableComponent';
class App extends React.Component
 {
  constructor(props){
    super(props)
    this.state = {
      counter: 0,
      date: new Date(),
      name: '',
      table: [],
      set: null
      
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  currentTime(){
    this.setState({date: new Date()})
  }
  
  componentWillMount(){
     var set = setInterval(() => {
      this.currentTime();
    }, 1000);
    this.setState({set})
  }
  handleChange(event) {
    this.setState({name: event.target.value});

  }

  handleSubmit(event) {
    
    event.preventDefault();
    clearInterval(this.state.set)
    var table = this.state.table
    table.push({name:this.state.name, time:this.state.date.toLocaleTimeString()})
    this.setState({table})
    var set = setInterval(() => {
      this.currentTime();
    }, 1000);
    this.setState({set})
    this.setState({name: ''})
  }
   render(){
    return (
      <div className="all" >
         <NavBar></NavBar>
            <h2 className="first">The current time is : </h2>
            <h1 className="time">{this.state.date.toLocaleTimeString()}</h1>
            <form className="form" onSubmit={this.handleSubmit}>
              <input type="text" placeholder="John Wick?" value={this.state.name} onChange={this.handleChange}></input>
              <input type="submit" value="Submit"  />
            </form>
            <h2>Be one of the first loopers...mark your tracks and freeze time forever</h2>
           <TableComponent table={this.state.table} name={this.state.name} date={this.state.date.toLocaleTimeString()}></TableComponent>
      </div>
      

           
           )

    }
      
  
  ;
}

export default App;
