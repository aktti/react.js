import React, { useEffect, useState } from 'react';
import './All.css'
const CardForm = () => {


const[name,setName]=useState()

const getdata=()=>{

  const reqoptions= {
method:"get",
redirect:"follow"
};

fetch("https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=94.04&appid=cc28e0ce0296e6b638f8278642073da5",reqoptions)
  
.then((response)=> response.json())
.then((result)=>{
  setName(result.name)
})
.catch((error)=>console.error(error))
};

useEffect(()=>{
  getdata()
})



  return (
    <div style={{ backgroundColor: 'black', height: '900px', width: '1599px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="card" style={{ width: '40rem', }}>
       <h2 style={{textAlign:"center"}}>Rambagh</h2>
       
        <div className="card-body">
          {/* <h2 style={{textAlign:"center"}}>20°C</h2> */}
          <img style={{marginLeft:"250px"}} src='http://openweathermap.org/img/wn/04n@2x.png'></img>
          <h2 style={{textAlign:"center"}}>Clear</h2>
         <div style={{display:"flex"}}>     
          <div>
           <h2>20:00</h2>
           <img src='https://images.unsplash.com/photo-1527842891421-42eec6e703ea?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D' style={{width:"100px",height:"100px"}}></img>
           <h2 >18°C</h2>
          </div>

          <div>
           <h2 style={{marginLeft:"10px"}}>21:00</h2>
           <img src='https://images.unsplash.com/photo-1527842891421-42eec6e703ea?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D' style={{width:"100px",height:"100px",marginLeft:"10px"}}></img>
           <h2 style={{marginLeft:"10px"}} >17°C</h2>
          </div>

          <div>
           <h2 style={{marginLeft:"10px"}}>22:00</h2>
           <img src='https://images.unsplash.com/photo-1527842891421-42eec6e703ea?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D' style={{width:"100px",height:"100px",marginLeft:"10px"}}></img>
           <h2 style={{marginLeft:"10px"}} >16°C</h2>
          </div>

          <div>
           <h2 style={{marginLeft:"10px"}}>23:00</h2>
           <img src='https://images.unsplash.com/photo-1527842891421-42eec6e703ea?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D' style={{width:"100px",height:"100px",marginLeft:"10px"}}></img>
           <h2 style={{marginLeft:"10px"}} >14°C</h2>
          </div>

          <div>
           <h2 style={{marginLeft:"10px"}}>00:00</h2>
           <img src='https://images.unsplash.com/photo-1527842891421-42eec6e703ea?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D' style={{width:"100px",height:"100px",marginLeft:"10px"}}></img>
           <h2 style={{marginLeft:"10px"}} >13°C</h2>
          </div>


         </div>

         <hr/>

<div>
  <h2>Details</h2>
</div>

<div style={{display:"flex"}}>
  <div>
<img style={{width:"100px",height:"100px"}} src='https://t4.ftcdn.net/jpg/01/17/28/51/360_F_117285131_W2qjuUEEBPP2nPJHxosDk62mj4B6KvIg.jpg'></img>
<h2>06:44</h2>
  </div>
  <div className='cricle'>
  </div>

<div>
<img style={{width:"100px",height:"100px"}} src='https://t4.ftcdn.net/jpg/01/17/28/51/360_F_117285131_W2qjuUEEBPP2nPJHxosDk62mj4B6KvIg.jpg'></img>
<h2>06:44</h2>
</div>
</div>

<div style={{display:"flex"}}>
  <div>
<h2 style={{marginTop:"-30vh"}}>18°C</h2>
<h2>RealFeel</h2>

</div>

<div>
<h2 style={{marginTop:"-30vh",marginLeft:"20px"}}>63%</h2>
<h2 style={{marginLeft:"20px"}}>Humidity</h2>

</div>

<div>
<h2 style={{marginTop:"-30vh",marginLeft:"20px"}}>3</h2>
<h2 style={{marginLeft:"20px"}}>W1 force</h2>

</div>

<div>
<h2 style={{marginTop:"-30vh",marginLeft:"20px"}}>1012hPa</h2>
<h2 style={{marginLeft:"20px"}}>Pressure</h2>

</div>

          
        </div>
      </div>


   

  </div>
  </div>

  );
};

export default CardForm;
