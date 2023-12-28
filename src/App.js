import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [keyword,setKewword]=useState("")
 
  const data=[
    {
    name:"Radhika",
    id:1
    },
    {
      name:"Shivam",
      id:2
    },
    {
      name:"Ananya",
      id:3
    },
    {
      name:"Vimal",
      id:4
    },
    {
      name:"Kamala",
      id:6
    },
    {
      name:"nirmal",
      id:7
    },
    {
      name:"Sonal",
      id:8
    },
    {
      name:"Ritiak",
      id:9
    },
    {
      name:"Kiritiak",
      id:10
    },
    {
      name:"Sonalika",
      id:11
    },
    {
      name:"Aaraitiak",
      id:12
    },
    {
      name:"Kiritilak",
      id:13
    },
]
const [filterData,setFilterData]= useState(data)

const onChange = (event) =>{
  setKewword(event.target.value);
  if(event.target.value == ""){
    setFilterData(data)
  }else{
    const filterDataa = data.filter(el => {
      return el.name.toLowerCase().includes(keyword.toLowerCase());
    });
    setFilterData(filterDataa)
  }
}
const onSubmit = () =>{
  if(keyword == ""){
    setFilterData(data)
  }else{
    const filterDataa = data.filter(el => {
      return el.name.toLowerCase() === keyword.toLowerCase();
    });
    setFilterData(filterDataa)
  }
}

  return (
    <>
    <div className="header" >
        <h1 className='text'>Search By Name </h1>
        <h1>{keyword}</h1>
        <input className='input' placeholder='Search here' value={keyword} onChange={onChange} />
        <button onClick={onSubmit} className='btn'>Done</button>
      <div className="App">
      {filterData.map((el,index)=>{
        return(
          <div key={index} className="div">
          <h1 style={{color:"red"}} >{el.name}</h1>
          </div>
        )
      })}
      
    </div>
      </div>
     
    </>
  
  );
}

export default App;