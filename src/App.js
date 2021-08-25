import ClickCounter from './components/ClickCounter'
import HoverComponent from './components/HoverCounter'
import NameTag from './components/nameTag'
import './App.css';

const makeGreen = BaseComponent => props=> {
  const addGreen = {
    style: {
      color: 'green'
    }
  };
  const newProps = { ...props, ... addGreen}
  return <BaseComponent {... newProps} />;
}

const GreenNameTag = makeGreen(NameTag)

function App() {
  return (
    <div className="App">
      <ClickCounter name= 'vivek' />
      <HoverComponent />
      <GreenNameTag name= 'vivek mehra'/>
    </div>
  );
}

export default App;
