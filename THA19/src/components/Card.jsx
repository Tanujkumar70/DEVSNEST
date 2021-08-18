import {useState} from "react";

const Card=()=>{
  
    const umang=()=>{
        // console.log(String.fromCharCode(count) );
        if(count>89){
            count=65;
            setstate(count);
        }
        else{
            setstate(count+1);
        }
       
    }

    var [count, setstate] = useState(65);
    return(

    
        <div className="card">
            <h1 className="n">{String.fromCharCode(count)}</h1>
            <button className="site" onClick={umang}>Learn</button>

        </div>
    )
}
export default Card;