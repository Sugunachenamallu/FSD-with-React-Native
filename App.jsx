import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent from './ClassComponent'
import FunctionComponent from './FunctionComponent'
import Form from './Form'
import LastName from './LastName'
import Email from './Email'
import PhnNo from './PhnNo'
import DOB from './DOB'
import Gender from './Gender'
import FunctionComponent1 from './FunctionComponent1'
import Dynamic1 from "./Dynamic"
import Image from './assets/react.svg'
import Component1 from './Component1'
import './search.css'
import Def from './Def'
import ImageEntities from './ImageEntities'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import PageNotFound from './PageNotFound'
// import {BrowserRouter,Routes,Route} from "react-router-dom

  //   const [x,setx]=useState(0);
  //  useEffect(()=>{
  //      console.log("Executed....");
  //  },[x]);

   // const [CompleteData,setCompleteData]=useState([
  //   {
  //     "name":"suguna"
  //   },
  //   {
  //     "name":"siri"

  //   },
  //   {
  //     "name":"charmi"
  //   },
  //   {
  //     "name":"vishnu"
  //   }
  // ])
  // const [QueryResult,setQueryResult]=useState([
  //    {
  //     "name":"suguna"
  //   },
  //   {
  //     "name":"siri"

  //   },
  //   {
  //     "name":"charmi"
  //   },
  //   {
  //     "name":"vishnu"
  //   }

  // ])

function App(){
  return (
   <>
   {/* <Def/> */}
     <ImageEntities/>
   </>
  )

  
}



// function App() {
//           //for input
//       //  const[add,setadd]=useState("");
//        const [task, setTask] = useState("");     //current input
//        const[tasks,setTasks]=useState([]);   //array of iinput
//      const AddTask=()=>{
//           setTasks([...tasks, task]);    //append taks to array
//         setTask("");    //clears input box
//          console.log([...tasks, task]);   //log new tasks array
//      }
//       const deleteTask = (index) => {
//     setTasks(tasks.filter((_, i) => i !== index));
//   };

//   return (
//     <>
//         <h1>To-do-list</h1>
//        <input type="text" placeholder="Enter your task" onChange={(e)=>setTask(e.target.value)}></input>
//        <button onClick={AddTask}>ADD</button>
//         <ul style={{ marginTop: "20px" }}>
//         {tasks.map((t, index) => (
//           <li key={index} style={{ marginBottom: "10px" }}>
//             {t}{" "}
//             <button onClick={() => deleteTask(index)} style={{ marginLeft: "10px" }}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//    </>

//  )

// }











  // const [count, setCount] = useState();
  //   const onchange =()=>{
  //       setCount(!count);
  //   }
 
//   var mycards = [
//        {
//         "Image":Image,
//         "price":1200,
//         "Brand":"Aavasa"
//        },
//         {
//         "Image":Image,
//         "price":1300,
//        "Brand":"Ajio"
//        },
//         {
//         "Image":Image,
//         "price":1400,
//         "Brand":"Myntra"
//        },
//         {
//         "Image":Image,
//         "price":1500,
//         "Brand":"flipkart"
//        },    
//          {
//         "Image":Image,
//         "price":1500,
//         "Brand":"flipkart"
//        }    
      
      
// ]
    // <div className="cards_parent">
    //    {/* <ClassComponent/> 
    //    <FunctionComponent/>  
    //    <Form/>
    //    <LastName/>
    //    <Email/>
    //    <PhnNo/>
    //    <DOB/>
    //    <Gender/>  */}
    //    {/* <FunctionComponent1/> */}
    //    {
    //    mycards.map((ele) => (
    //    <Dynamic1 Data={ele}/>
    //    ))}
    // </div>


//     <>
//      { {count? <h1>component1</h1>: <h1>component2</h1>}
//      <button onClick={onchange}> {count ? <h1>component1</h1>: <h1>component2</h1>}</button> */}
//       { <Component1/> }
       
//        { <form>
//         <label>UserName:</label>
//         <input type='text'></input><br></br>
//         <label>Email: </label>
//         <input type='text' placeholder='enter your email'></input><br></br>
//         <label>Address:</label>
//         <input type='text' placeholder='Enter your Address'></input>
//        </form>
//        <button onClick={()=>{setx(x+1)}}>ADD</button>
//        {x}
//  }
 
    
//   { )
// } 
//  }
 
//  }


//  <input type='text' placeholder='search' onChange={(event)=>capture(event)}></input>
//    <div className="parent">
//     {
//     QueryResult.map(ele=>{
//           return <div className="child">{ele.name}</div>
       
//     })
//     }
//    </div>

export default App
