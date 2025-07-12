// import Welcome from "./comonents/welcome"

// import InputName from "./comonents/InputName"
// import Form from "./comonents/Form";
// import MultiForm from "./comonents/MultiForm";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import HomePages from "./Pages/HomePages";
import AboutPage from './Pages/AboutPage';
import ContractPage from './Pages/ContractPage';


// function App() {
 
// console.log("React")
//   return <div>
//     <Welcome name="Sazzad"/>
//   </div>
// }

// export default App



// function App() {

//   const handleClick=()=>{
//     alert("Button was Clicked")
//   };
//   return <div>
//     <Welcome name="Sazzad"/>
//     <button onClick={handleClick}>Click Me</button>
//     <InputName/>
//     <h1>---------------</h1>
//     <div 
//     onMouseEnter={()=>console.log("Mouse Entered")}
//     onMouseLeave={()=>console.log("Mouse Left")}
//     >
//       Hover over me
//     </div>
//      <h1>---------------</h1>
//      <Form/>

//      <h1>---------------</h1>
//      <MultiForm/>
//   </div>
// }

// export default App




function App() {
 

   return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePages />} />
        <Route exact path='/about' element={<AboutPage />} />
        <Route exact path='/contract' element={<ContractPage />} />
      </Routes>
    </BrowserRouter>
  );

 
}

export default App