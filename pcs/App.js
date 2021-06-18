import React, { useState } from 'react'
import './App.css'
function App() {
  const [from,setFrom]=useState("");
  const [to,setTo]=useState("");
  const [startDate, setStartDate] = useState('');
  const [number,setNumber]=useState("");
  const [details,setDetails]=useState(false);
  const arr=[{
    name:{
      indigo:{
        name:"Indigo",
        price:2000,
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/IndiGo_logo.svg/250px-IndiGo_logo.svg.png"
      },
      spicejet:{
        name:'Spicejet',
        price:3000,
        image:"https://logodix.com/logo/2132636.jpg"
      },
      kingfisher:{
        name:"Kingfisher",
        price:3200,
        image:'https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Kingfisher_beer_logo.png/220px-Kingfisher_beer_logo.png'
      },
      lufthansa:{
        name:'Luftansa',
        price:5100,
        image:'http://www.logo-designer.co/wp-content/uploads/2018/02/2018-new-lufthansa-logo-design-airplane-livery-2.png'
      }
    }
  }]
  const handleSubmit=(e)=>{
    if(from.length>1&&to.length>0&&number.length>=1&&startDate.length>=10){
    console.log(from,to,number,startDate.toString())
    setDetails(true)
}else{
    alert("Please fill all the details correctly")
}
}
  return (
    <div className="mainContainer">
      <div>
        <h1 className="title">Flight Registration System</h1>
      </div>
      <div className="inputContainer">
        <input 
          className='inputs' 
          placeholder='From: ex- Delhi'
          value={from}
          onChange={(e)=>setFrom(e.target.value)}
          />
        <input 
          className='inputs' 
          placeholder="To: ex-Mumbai"
          value={to}
          onChange={(e)=>setTo(e.target.value)}

          />
        <input 
          className='inputs' 
          placeholder="No. of passengers: ex-3"
          value={number}
          onChange={(e)=>setNumber(e.target.value)}
          />
        <input
          className='inputs' 
          placeholder='DD/MM/YYYY : ex- 18/01/2021'
          type='text'
          value={startDate}
          onChange={(e)=>setStartDate(e.target.value)}/>
        <button 
          className='submitButton'
          onClick={handleSubmit}
          >Happy Easy Search</button>
      </div>
      {details &&(
        <>
        <h1 className="title">Available Flights from {from} to {to}</h1>
        <h2 className="title">No of passenges: {number}</h2>
      <div style={{display:'flex',width:'100%',alignItems:'flex-start',justifyContent:'center',margin:'50px'}}>
        {arr.map(data=>(
          <div>
          <div style={{display:'flex',width:'100%',height:'50px',flexDirection:'row',justifyContent:'space-between',margin:"10px 0px"}}>
            <img alt='airplane' style={{borderRadius:'5px'}} src={data.name.indigo.image}/>
            <p style={{fontSize:'20px',letterSpacing:'1px',fontWeight:'bold'}}>{data.name.indigo.name}</p>
            <p>₹ {data.name.indigo.price}</p>
            <p>Total Amount: {(data.name.indigo.price)*number}</p>
          </div>
          <div style={{display:'flex',width:'100%',height:'50px',flexDirection:'row',justifyContent:'space-between',margin:"10px 0px"}}>
          <img alt='airplane' style={{borderRadius:'5px',height:'50px',width:'50px'}} src={data.name.spicejet.image}/>
          <p style={{fontSize:'20px',letterSpacing:'1px',fontWeight:'bold'}}>{data.name.spicejet.name}</p>
          <p>₹ {data.name.spicejet.price}</p>
          <p>Total Amount: {(data.name.spicejet.price)*number}</p>
        </div>
        <div style={{display:'flex',width:'100%',height:'50px',flexDirection:'row',justifyContent:'space-between',margin:"10px 0px"}}>
          <img alt='airplane' style={{borderRadius:'5px',height:'50px',width:'50px'}} src={data.name.kingfisher.image}/>
          <p style={{fontSize:'20px',letterSpacing:'1px',fontWeight:'bold'}}>{data.name.kingfisher.name}</p>
          <p>₹ {data.name.kingfisher.price}</p>
          <p>Total Amount: {(data.name.kingfisher.price)*number}</p>
        </div>
        <div style={{display:'flex',width:'100%',height:'50px',flexDirection:'row',justifyContent:'space-between',margin:"10px 0px"}}>
          <img alt='airplane' style={{borderRadius:'5px',height:'50px',width:'50px'}} src={data.name.lufthansa.image}/>
          <p style={{fontSize:'20px',letterSpacing:'1px',fontWeight:'bold'}}>{data.name.lufthansa.name}</p>
          <p>₹ {data.name.lufthansa.price}</p>
          <p>Total Amount: {(data.name.lufthansa.price)*number}</p>
        </div>
        </div>
        ))}
        {/* Details: {arr.map(data=>data.name.indigo.price)} */}
      </div>
      <cite >Total Amount is calculated on number of passengers. Thank You for visiting.</cite>
      </>
      )}
      
    </div>
  )
}

export default App
