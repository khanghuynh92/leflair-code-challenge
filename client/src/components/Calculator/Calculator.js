import React, { Component } from 'react';

import { Cal } from '../../api';
import Logo from '../Logo';
import Screen from '../Screen';
import Button from '../Button';

import './Calculator.scss';

class Calculator extends Component {
  constructor(props) {
    super(props);

    // states of calculator
    this.state = {
      previousInputValue: 0,
      inputValue: 0,
      displayValue: 0,
      selectedSymbol: null,
    };

    this.onButtonPressed = this.onButtonPressed.bind(this);
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState);

    return true;
  }

  async calculate(value1, value2, operator) {
    let res = 0;

    try {
      switch (operator) {
        case '+':
          res = await Cal.add(value1, value2);;
          break;
        case '-':
          res = await Cal.minus(value1, value2);;
          break;
        case 'x':
          res = await Cal.multiply(value1, value2);;
          break;
        case '/':
          res = await Cal.divide(value1, value2);;
          break;
        default:
          break;
      }
    } catch (err) {
      alert(err.message);
    }

    return res.result;
  }

  onButtonPressed(input) {
    switch (typeof input) {
      case "number":
        return this.handleNumberButton(input);
      case "string":
        return this.handleOperatorButton(input);
      default:
        return;
    }
  }

  checkResultPrinted() {
    return this.state.inputValue && this.state.previousInputValue && this.state.inputValue && !this.state.selectedSymbol;
  }

  checkInputLengthValid(num) {
    return num.length < 15;
  }

  handleNumberButton(num) {
      if (this.checkResultPrinted()) {
        this.setState({
            inputValue: num,
            displayValue:  num,
            previousInputValue: 0,
        })
      } else {
        let inputValue = +(this.state.inputValue + num.toString());

        if(!this.checkInputLengthValid(inputValue.toString())) return;

        this.setState({
            inputValue: inputValue,
            displayValue:  inputValue,
        });
      }
  }

  async handleOperatorButton(str) {
    let result = 0;
    switch (str) {
      case "AC":
        this.setState({
          previousInputValue: 0,
          inputValue: 0,
          displayValue: 0,
          selectedSymbol: null
        });

        break;
      case "+/-":
        result = 0 - this.state.inputValue;
        this.setState({
          inputValue: result,
          displayValue: result,
        });

        break;
      case "%":
        result = this.state.inputValue / 100;
        this.setState({
          inputValue: result,
          displayValue: result,
        });

        break;
      case ".":

        if(this.checkResultPrinted()) {
          result = "0.";
          this.setState({
            inputValue: result,
            displayValue: result,
            previousInputValue: 0,
            selectedSymbol: null,
          });

          break;
        }

        // check decimal is exist
        if(/\./.test(this.state.displayValue)) break;

        result = this.state.inputValue ? (this.state.inputValue + ".") : "0.";
        this.setState({
          inputValue: result,
          displayValue: result,
        });

        break;
      case "/":
      case "+":
      case "x":
      case "-":
        this.setState({
          selectedSymbol: str,
          previousInputValue: this.state.inputValue,
          inputValue: 0,
          displayValue: this.state.inputValue,
        });

        break;
      case "=":
        let symbol = this.state.selectedSymbol,
          inputValue = this.state.inputValue,
          previousInputValue = this.state.previousInputValue;

        if (!symbol) {
          return;
        }

        result = await this.calculate(previousInputValue, inputValue, symbol);

        // result = eval(previousInputValue + symbol + inputValue);

        this.setState({
          previousInputValue: result,
          inputValue: result,
          displayValue: result,
          selectedSymbol: null,
        });

        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="Calculator">
        <Logo />
        <Screen info={this.state.displayValue} />

        <div className="controls-container">
          <Button name={"AC"} handleClick={this.onButtonPressed} white />
          <Button name={"+/-"} handleClick={this.onButtonPressed} white />
          <Button name={"%"} handleClick={this.onButtonPressed} white controls />
          <Button name={"/"} handleClick={this.onButtonPressed} orange controls />

          <Button name={7} handleClick={this.onButtonPressed} />
          <Button name={8} handleClick={this.onButtonPressed} />
          <Button name={9} handleClick={this.onButtonPressed} />
          <Button name={"x"} handleClick={this.onButtonPressed} orange controls />

          <Button name={4} handleClick={this.onButtonPressed} />
          <Button name={5} handleClick={this.onButtonPressed} />
          <Button name={6} handleClick={this.onButtonPressed} />
          <Button name={"-"} handleClick={this.onButtonPressed} orange controls />

          <Button name={1} handleClick={this.onButtonPressed} />
          <Button name={2} handleClick={this.onButtonPressed} />
          <Button name={3} handleClick={this.onButtonPressed} />
          <Button name={"+"} handleClick={this.onButtonPressed} orange controls />

          <Button name={0} handleClick={this.onButtonPressed} zerobtn />
          <Button name={"."} handleClick={this.onButtonPressed} dot />
          <Button name={"="} handleClick={this.onButtonPressed} orange controls />
        </div>
      </div>
    );
  }
}

export default Calculator;
