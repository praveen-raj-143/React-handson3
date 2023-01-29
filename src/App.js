import React from 'react'
import { useState } from 'react'
import './App.css'

function App(){
  const [Front, setFront] =useState(true);
  const [Data, setData] = useState({
    Name:'',
    Department:'',
    Rating:'',
    person:[]
  });

  const changecontainer =(e)=>{
    setData({...Data, [e.target.name]: [e.target.value]})

  };
  function task(){
    setFront(!Front)
    const perObj={
      Name:Data.Name,
      Department:Data.Department,
      Rating:Data.Rating
    }
    const temp=Data.person
    temp.push(perObj)
    setData({person:temp})
  }
  function backtask() {
    setFront(!Front)
  }
  return (
    <div>
      { Front?
      <div className='pos'>
      <h1>EMPLOYEE FEEDBACK FORM</h1>
    <form>
      <label htmlFor="Name" className='text'> Name : </label>
      <input type="text" name='Name' value={Data.Name} onChange={changecontainer} className='box' />
      <br />
      <br />
      <label htmlFor="" className='text'>Department : </label>
      <input type="text" className='box' name='Department' value={Data.Department} onChange={changecontainer} />
      <br />
      <br />
      <label htmlFor="" className='text'>Rating : </label>
      <input type="number" className='box' name='Rating' value={Data.Rating} onChange={changecontainer} />
      <br />
      <br />
      <button className='text' onClick={task}>Submit</button>
    </form>
  </div>
  :
  <div className='pos'>
      <h1>EMPLOYEE FEEDBACK DATA</h1>
      <div className='submitcontainer'>
        {
          Data.person.map((value,index)=>{
            return(
              <div className='submitcontent' key={index}>Name:{value.Name} | Department:{value.Department} | Rating:{value.Rating} | </div>
            )
          })
        }
      </div>
      <br/>
      <br/>
      <button className='text' onClick={backtask}>Go Back</button>
    </div>
  }
    </div>
  )
}
export default App
