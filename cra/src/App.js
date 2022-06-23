import logo from './logo.svg';
import './App.css';

import Button from './components/atoms/Button';
import ButtonGroup from './components/atoms/ButtonGroup';
import DropBox from './components/atoms/DropBox';
function App() {
  return (
    <div className="App">
      <div style={{display: "flex", flexWrap:"wrap", gap: "0.5rem", justifyContent: "center",}}>
        <Button color="primary" size="sm">짧은</Button>
        <Button color="secondary" outline={true} size="lg">긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글</Button>
        <Button color="success" >Hello</Button>
        <Button color="danger" >hi</Button>
        <Button color="warning" >hi</Button>
        <Button color="info" active={true} >hi</Button>
        <Button color="light" >hi</Button>
        <Button color="dark" block={true} outline={true}>hi</Button>
      </div>
      <h4>checkbox</h4>
      <ButtonGroup type="checkbox">
        <Button color="primary">val:1</Button>
        <Button color="primary">val:2</Button>
        <Button color="primary">val:3</Button>
      </ButtonGroup>
      <h4>radio</h4>
      <ButtonGroup type="radio">
        <Button color="primary">val:1</Button>
        <Button color="primary">val:2</Button>
        <Button color="primary">val:3</Button>
        <Button color="primary">val:4</Button>
        <Button color="primary">val:5</Button>
      </ButtonGroup>
      <h4>drop down</h4>
      <ButtonGroup type="dropDown">
        <Button color="primary">dropdown</Button>
        <DropBox>
          <li>target1</li>
          <li>target2</li>
          <li>target3</li>
          <li>target4</li>
        </DropBox>
      </ButtonGroup>
    </div>
  );
}

export default App;
