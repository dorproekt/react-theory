import React, {Component} from 'react';
import './App.css';
import './App.scss';
import Car from './Car/Car';

class App extends Component {

  state = {

    cars: [
        {
          name: 'Ford',
          year: 2003
        },
        {
          name: 'Mazda',
          year: 2010
        },
        {
            name: 'Skoda',
            year: 2020
        }
    ],

    pageTitle: 'React Component',
    showCars: false

  };

  changeTitleHandler = (newTitle) => {

      this.setState({
          pageTitle: newTitle
      });
  };

  toggleCarsHandler = () => {
      this.setState({
          showCars: !this.state.showCars
      });
  };

  handleInput = (event) => {

      this.setState({
          pageTitle: event.target.value
      })

  };

  onChangeName = (name, index) => {

    const car = this.state.cars[index];

    car.name = name;

    // const cars = this.state.cars.concat();
    const cars = [...this.state.cars];
    cars[index] = car;

    this.setState({
        cars: cars
    });
  };

  deleteHandler(index){
    const cars = [...this.state.cars];

    cars.splice(index, 1);
    this.setState({cars});
  };

  render(){

    const divStyle = {
        textAlign: 'center',
    };

    // const cars = this.state.cars;

    return (
        <div style={divStyle}>
            <h2>{this.state.pageTitle}</h2>

            <input type="text" onChange={this.handleInput}/>

            <button
                onClick={this.changeTitleHandler.bind(this, 'Changed!')}
            >Change title</button>

            <button
                className={'toggleCars'}
                onClick={this.toggleCarsHandler}
            >Toggle cars</button>

            {   this.state.showCars
                ? this.state.cars.map((car, index) => {
                  return (
                      <Car
                        key={index}
                        name={car.name}
                        year={car.year}
                        onDelete={this.deleteHandler.bind(this, index)}
                        onChangeName={event => this.onChangeName(event.target.value, index)}
                      />
                  )
                })
                : null
            }

        </div>
    );
  }
}

export default App;
