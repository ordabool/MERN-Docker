import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/Goal';
import Goal from './components/Goal';

function App() {

  const [goal, setGoal] = useState({
    color: 'white',
    backgroundColor: 'green',
    borderColor: 'darkGreen',
    title: 'Sold my first tech company'
  })

  const onChange = (e) => {
    setGoal({...goal, title: e.target.value});
  }

  return (
    <div className="App">

      <h3>Welcome to my app</h3>
      <p>
        First priority will be a fun little challenge. 
        <br /> 
        Try to create a 'Goal' component that will save a goal/skill name, fun logo and BG color (maybe even a shape?)
      </p>

      <input type="text" className='form-control' value={goal.title} placeholder='Goal Name' onChange={onChange}/>
      <br />
      

      <Goal 
        color={goal.color} 
        backgroundColor={goal.backgroundColor} 
        borderColor={goal.borderColor} 
        title={goal.title} 
      />

    </div>
  );
}

export default App;

// Brad's Example App
// https://github.com/bradtraversy/react-crash-2021/blob/master/src/components/Task.js