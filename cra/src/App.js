import logo from './logo.svg';
import './App.css';

import Button from './components/atoms/Button';

function App() {
  return (
    <div className="App" style={{display: "flex", flexWrap:"wrap", gap: "0.5rem", justifyContent: "center",}}>
        <Button color="primary" outline={true} size="sm">짧은</Button>
        <Button color="secondary" size="large">긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글</Button>
        <Button color="warning" block={true} active={true}>Hello</Button>
        <Button color="success" block={true} outline={true}>hi</Button>
    </div>
  );
}

export default App;
