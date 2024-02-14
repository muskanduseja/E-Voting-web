
import React from 'react'
import './team.css'
import  { useState , useEffect} from 'react'




const Extra = () => {

  const [code, setCode] = useState(0)
  const [cnic, setCNIC] = useState("")
  const [countPTI, setCountPTI] = useState(0)
  const [countPPP, setCountPPP] = useState(0)
  const [result, setResult] = useState("Error")
  const [show,setShow] = useState(false);

  const showcount = () =>{
    setCountPPP(countPPP)
    setCountPTI(countPTI)
    setShow(true)
  }
  const hide = ()=>{
    setShow(false);
  }


  useEffect(()=>{

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:3001/api/countByID/123", requestOptions)
      .then(response => response.json())
      .then(result => setCountPTI(result[0].count))
      .catch(error => console.log('error', error));

      fetch("http://localhost:3001/api/countByID/456", requestOptions)
      .then(response => response.json())
      .then(result => setCountPPP(result[0].count))
      .catch(error => console.log('error', error));

  },[result,countPPP,countPTI])

  

  function submitForm(){

    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "partyID": code,
  "cnic": cnic
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'

  
};

fetch("http://localhost:3001/api/postTeachers", requestOptions)
  .then(response => response.text())
  .then(result => setResult(result))
  .catch(error => console.log('error', error));

    alert('Success')
  
  }

  function handleChange(e){

    const {name,value} = e.target

    if(name=="code"){
      setCode(value)
    }
    if(name=="cnic"){
      setCNIC(value)
    }

  }


  return (
    <div>

      <br />
      <h1 className="setup">Caste Your Honest Vote Here</h1>
      <br />
      <br />
      <div className="votbox">
          <div className="form">
            <h1 className="head"><b>Party Codes</b></h1>
            <h2>PTI Code: 123</h2>
            <h2>PPP Code: 456</h2>
            <br />
            <br />
            <br />
          <input type="text" onChange={handleChange} name="code" placeholder="Enter Party Code" maxLength="3" minLength="3" />&ensp;
          <input type="text" onChange={handleChange} name="cnic" maxlength = "13" minlength = "13" placeholder="Enter Your CNIC "/>&ensp;<br /><br />
          <button onClick={submitForm} className="btn">Submit</button>
          </div>
          
      </div>
      <br />
      <center>
      <div className="res">
        <br />
        <br />
      <button onClick={showcount} className="btn">Result</button><br /><br />
      {
        show === true? <div> <h1>Total Number of PTI Votes: {countPTI}</h1>
                <br />
                <h1>Total Number of PPP Votes: {countPPP}</h1>
        </div>: <div></div>
      }
      <button onClick={hide} className="btn">Hide Result</button>
      </div>
      <br />
      
      </center>
    </div>
  )
}

export default Extra
