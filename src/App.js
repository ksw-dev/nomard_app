import React from 'react';


function Food({name}){

return <h3>I love {name}</h3>;
}

const foodilike=[
  {
  name:"kimchi"
  },
  {
    name:"kimc3hi"
  },
  {
    name:"kim4chi"
  }
]
function App() {
  return(
   <div>
     {foodilike.map(dish=>(
       <Food name={dish.name}/>
       ))}
   </div>
  );
}

export default App;
