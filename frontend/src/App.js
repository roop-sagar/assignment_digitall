import { Route, Routes } from 'react-router-dom';
import Employees from './Employees';
import Login from './Login';

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/employees' element={<Employees />} />
      </Routes>
    </>
  )
}

export default App;
