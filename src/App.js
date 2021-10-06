import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import ShowResults from "./components/Button";
import Planets from './components/Planets';
import arrow from '../src/images/arrow.gif';
import {Image} from 'semantic-ui-react';

function App() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false); 

  const planetsData = async () =>{
    try{
      setLoading(true)
      let total_result = []
      let result = await fetch('https://swapi.dev/api/planets/')
      let data = await result.json();
      total_result.push(...data.results)
      while (data.next) {
        result = await fetch(data.next)
        data = await result.json()
        total_result.push(...data.results)
      }
      setPlanets(total_result);
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    planetsData()
    setLoading(false)
  },[]);

  function handleClick(){
    setShow(!show)
  }

  return (
    <div>
      <Navbar />
      <ShowResults logdata={handleClick} val={show}/>
      {show ? (<Planets data={planets} load={loading}/>
      ) : (
        <Image src={arrow} centered/>
      )}
    </div>
  );
}

export default App;
