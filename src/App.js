import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Card from "./components/Card";
import Filter from "./components/Filter";
import employees from "./employees.json";

console.log(employees);
const buttons = [
  { name: "Management", value: "Management" },
  { name: "Sales", value: "Sales" },
  { name: "Support", value: "Support" },
  { name: "Dev Ops", value: "Dev Ops" },
  { name: "Development", value: "Development" },
  { name: "All", value: "All" },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: employees,
      filterEmployees: [],
      buttons: buttons,
    };
  }

  componentDidMount() {
    // route to db to get all the emplo
    this.setState({
      filterEmployees: employees,
    });
  }

  handleClick = (e) => {
    console.log(e.target.value);
    let name = e.target.value;
    let filterEmployees = [];
    if (name === "All") {
      filterEmployees = this.state.employees;
    } else {
      filterEmployees = this.state.employees.filter(
        (employee) => employee.department === name
      );
    }

    this.setState({ filterEmployees });
  };

  render() {
    console.log(this.filterEmployees);

    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <Filter
          key={buttons.name}
          value={buttons.value}
          btnOptions={this.state.buttons}
          handleClick={this.handleClick}
        />
        {this.state.filterEmployees.length ? (
          <Card employees={this.state.filterEmployees} />
        ) : (
          <p></p>
        )}
      </Wrapper>
    );
  }
}

export default App;
