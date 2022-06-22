import logo from './logo.svg';
import './App.css';

import Button from './components/atoms/Button';

function App() {
  return (
    <div className="App" style={{display: "flex", flexWrap:"wrap", gap: "0.5rem", justifyContent: "center",}}>
        <Button color="primary" outline={true} size="sm">짧은</Button>
        <Button color="secondary" size="large">긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글</Button>
        <Button color="success">Hello</Button>
        <Button color="danger" >hi</Button>
        <Button color="warning" >hi</Button>
        <Button color="info" active={true} >hi</Button>
        <Button color="light" >hi</Button>
        <Button color="dark" block={true} outline={true}>hi</Button>
    </div>
  );
}

export default App;
