import { useState } from "react";
import useHeroApi from '../hooks/hero'
import HeroList from "./heroList";

function Superhero() {  

    const [state,setState] = useState(null)
    const [search, setSearch] = useState("")
    const herodata = useHeroApi(search)

    const OnSubmit=(event)=>{
      event.preventDefault();
       setState(herodata.results);
       console.log('this is state',state)
    }
    
    
    return (
     <div>
         <form onSubmit={OnSubmit}>
             <label>Enter Hero Name</label>
             <input
             type='text'
             value={search}
             onChange={(event)=>{setSearch(event.target.value)}}
             ></input>
         </form>
        <p>{search}</p>
        {state && <HeroList herodata={state}/>}
     </div>
    );
  
  }
  
  export default Superhero;
  