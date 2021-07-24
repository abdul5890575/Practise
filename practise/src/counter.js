import { useState } from "react";

function prr() {
  const [count,setCount] = useState(0)
  
  return (
    
   <div>
     <button onClick={()=>setCount(count+1)}>Click ME</button>
     <p>{count}</p>
   </div>
  );

}

export default prr;
