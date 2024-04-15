import './App.css';
import Counter from './Counter';
import MyCheckbox from './MyCheckbox';
import MyInput from './MyInput';
import From from './From';

function App() {
  return (
    <div>
      <h3>실습 1 : useState - Counter(number)</h3>
      <Counter/>
      <h3>실습 2 : useState - Text field(string)</h3>
      <MyInput/>
      <h3>실습 3 : useState - Checkbox(boolean)</h3>
      <MyCheckbox/>
      <h3>실습 4 : useState - From(two variables)</h3>
      <From/>
    </div>
  );
}

export default App;
