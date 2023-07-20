import React, {useState,useEffect}from 'react';
import spinner from '../assets/spinner1.jpg'
const Jokes = () => {
  const [joke, setJoke] =useState({});;
  const[isLoading,setIsLOading]= useState(true);

  // const url ="http://api.icndb.com/jokes/random"
  // const url = "https://api.chucknorris.io/jokes/random";
  const url="https://joke.deno.dev";
  const getJoke=()=>{
    setIsLOading(true)
    fetch(url).then((response)=>{
      return response.json();
      })
      .then((data)=>{
        console.log(data);
        setJoke(data)
        setIsLOading(false)
      })

  }
  useEffect(()=>{
getJoke()
  },[])
  return (
    <section className='--flex-center --100vh --bg-primary'>
    <div className='container --bg-light --card'>
   <h2>Random Jokes Generator</h2>
   <div className='--line'></div>
   {isLoading ? ( 
    <div className='--center-all' > <img src={spinner} alt='loading' width={100} /> </div> ) :(
    <>
    <h4>Joke Id: {joke.id}</h4>
   <h5>Setup</h5>
   <p>{joke.setup} </p>
   <h5>Punchline</h5>
   <p>{joke.punchline}</p>
   </>
   )}
  
  
   <br/>
   <button className='--btn --btn-primary' onClick={()=>{getJoke()}} >Generate Joke</button>
    </div>
    

    </section>
  );
}

export default Jokes;
