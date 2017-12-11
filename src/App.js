import React, { Component } from 'react';
import classes from  './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    person: [
      { id: 101, name: "Mad", age: 20 },
      { id: 102, name: "Max", age: 28 },
      { id: 103, name: "Fury", age: 29 }
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons =  [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({
      person: persons
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex =  this.state.person.findIndex(per => {
      return per.id === id;
    });
    const singlePerson = {...this.state.person[personIndex]};
    // const persons = Object.assign({}, this.state.person[p]);

    singlePerson.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = singlePerson;
    this.setState({
      person: persons
    })
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    let btnClass = '';
    let person = null;
    if(this.state.showPersons){
      person = (
        <div>
          {this.state.person.map((per, index) => {
            return <Person click={this.deletePersonHandler.bind(this, index)}
            key={per.id}
            name={per.name} 
            age={per.age} 
            changed={(event) => this.nameChangedHandler(event, per.id)} />
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    return (
      <div className={classes.App}>
        <h1>Hi my first react app</h1>
        {person}
        <button className={btnClass} onClick={this.togglePersonHandler}>Toggle Button</button>
      </div>
    );
    // return React.createElement('div',{className: 'App'},
    // React.createElement('h1',null,'My first react App'));
  }
}

export default App;
