import React, { useState } from 'react'

import { Container, Content, Column, Row, Titulo } from './styles';

import Input from './components/Input/'
import Button from './components/Button'


function App() {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('')

  function handleOnClear() {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  function handleAddNumber(number) {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  function hadleSumNumber() {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  function hadleMinusNumber() {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  function hadleMultiplyNumber() {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('x')
    } else {
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  function hadleDivisionNumber() {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  function hadleEquals() {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          hadleSumNumber()
          break;
        case '-':
          hadleMinusNumber()
          break;
        case 'x':
          hadleMultiplyNumber()
          break;
        case '/':
          hadleDivisionNumber()
          break;
        default:
          break;
      }
    }
  }


  return (
    <Container>
      <Titulo>Calculadora</Titulo>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="c" onClick={handleOnClear} />
        </Row>
        <Row>
          
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="/" onClick={hadleDivisionNumber} />

        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="X" onClick={hadleMultiplyNumber} />
        </Row>
        <Row>
          <Button label="+" onClick={hadleSumNumber} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="-" onClick={hadleMinusNumber} />
          <Button label="=" onClick={hadleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
