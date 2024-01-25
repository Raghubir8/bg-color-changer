import react,{useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [color,setColor]= useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor : color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3 gap-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"red"}}
          // yanha par onClick expect karta hai usko fn mile setColor bhi fn hai but hmko fn ke ander ki return value print krani hai
          // Isliye call back ka use kiya hai !!!!
          onClick={()=>setColor("red")}
          >Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"orange"}}
          onClick={()=>setColor("orange")}
          >Orange</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"yellow"}}
          onClick={()=>setColor("yellow")}
          >Yellow</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}
          onClick={()=>setColor("green")}
          >Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"blue"}}
          onClick={()=>setColor("blue")}
          >Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"indigo"}}
          onClick={()=>setColor("indigo")}
          >Indigo</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Violet"}}
          onClick={()=>setColor("Violet")}
          >Voilet</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"brown"}}
          onClick={()=>setColor("brown")}
          >Brown</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"black"}}
          onClick={()=>setColor("black")}
          >Black</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"teal"}}
          onClick={()=>setColor("teal")}
          >Teal</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Chartreuse"}}
          onClick={()=>setColor("Chartreuse")}
          >Chartreuse</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"Purple"}}
          onClick={()=>setColor("Purple")}
          >Purple</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"Azure"}}
          onClick={()=>setColor("Azure")}
          >Azure</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"pink"}}
          onClick={()=>setColor("pink")}
          >Pink</button>



          
        </div>
      </div>
    </div>
  );
}

export default App;
