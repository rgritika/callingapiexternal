import React, {useState} from 'react'

export default function App() {
    const [value , setValue] = useState({data:[{rollno:'', result:''}]})
    const [rollNum, setRollNum] = useState("")
    const [inputValue, setInputValue] = useState("")
    
    function handleChange(event){
        setRollNum(event.target.value)
    }
    function change(){
        setInputValue(rollNum)
        if(inputValue!==""){
            console.log(inputValue)
            fetch("https://ancient-tor-34194.herokuapp.com/https://callmeapi.herokuapp.com/"+inputValue)
			.then(response => response.json())
			.then(data => {
                setValue(data)
                console.log(data)
			});
        }else{
            console.log("No input")
        }
    }
    const TableList = ({rollno, result}) => {
        return (
          <tr >
            <td>{rollno}</td>
            <td>{result}</td>
           </tr>
        )
     }
    return (
        <div  style={{backgroundColor: "lightpink",textAlign:"center"}}>
        <h1> Proedge: Calling API </h1>
            <input className="input"onChange={handleChange} type="text" style={{width:"250px",height:"100px"}} placeholder="Enter N numbers (sepearated by comma)"/>

            <p> Click on submit button twice. </p>
            
            <br />
            <button onClick={change} className="btn">Submit</button>
            <table>
        <tbody>
        <br/>
      
        <tr id="header">
        <th>Roll No.</th>

        <th>Result</th>
      </tr>

      {value.data.map((item , index) => (<TableList rollno={item.rollno} key={index.toString()} result={item.result} />))}
        </tbody>
      </table>
    </div>
    );
}