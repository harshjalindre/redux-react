
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { bindActionCreators } from 'redux'
import { ActionCreators } from './state'

function App() {

  const state = useSelector(state => state.item);

  const dispatch = useDispatch();

  const {addItems, removeItems} = bindActionCreators(ActionCreators, dispatch)

  return (
    <>
    <div><button className='Cart'>Cart: {state}</button></div>
    <div>
      <button className='func' onClick={() => removeItems(1)}>-</button>
        Actions
      <button className='func' onClick={() => addItems(1)}>+</button>
    </div>
    
    </>
  )
}

export default App
