import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFetch } from './actions'
import { useEffect } from 'react';
// import Main from './components/Main';

function App() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.reducer.data)
  console.log('data', data)
  useEffect(() => {
    dispatch(getDataFetch())
  }, [])
  return (
    <div className="App">
      <div className='topContainer' style={{ border: '10px solid yellow' }}>
        <div className='topLeftContainer'>
          <p className='videoTxt'>VIDEO</p>
          <h2 className='videoGamesTxt'>VIDEO GAMES</h2>
        </div>
        <div className='topRightContainer'>
        <h2 className='videoGamesTxt'>CONTACT</h2>
        </div>
      </div>
      <div style={{ border: '10px solid yellow' }}>
        <div className='filterWrapper'>
          <p className='filterHeading'>Filter Results</p>
          <p className='filterLabel'>Name (contains)</p>
          <input placeholder='Text String'/>
          <p className='filterLabel'>Minimun Score</p>
          <input placeholder='1-10'/>
          <p className='filterLabel'>Order By</p>
        </div>
      </div>
      
    </div>
  );
}

export default App;


// login 
// dashboard
// cart