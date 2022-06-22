import logo from './logo.svg';
import './App.css';

import Button from './components/atoms/Button';

function App() {
  return (
    <div className="App">
        <Button color="#fff" background="#ff9999">짧은</Button>
        <Button color="#000" background="#ffff99">긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글</Button>
        <Button color="#000" background="#99ffff">Hello</Button>
        <Button color="#fff" background="#9999ff">hi</Button>
    </div>
  );
}

export default App;
