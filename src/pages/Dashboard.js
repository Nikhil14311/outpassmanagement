import React from 'react'
import bgimg from '../bgimg.jpeg'
import logo from '../logo.png'
const Dashboard = () => {
  return (
    <div class="bg-image" style={styles.bgImgContainer}>
        <div style={{backgroundColor: 'rgba(0, 0, 0, 0.8)', width:'auto', height:'40vh', display:'flex', padding:50, flexDirection:'row',alignItems:'center', position:'relative', justifyContent:'space-evenly'}}>
            <div>
                <img src={logo} style={{width:200,height:200}} />
            </div>

            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <h2 style={{color:'white'}}>Rajiv Gandhi University of Knowledge Technologies-Andhra Pradesh</h2>
                <h2 style={{color:'white'}}>RK Valley Institute</h2>
                <h6 style={{color:'white'}}>Catering to the Educational Needs of the Gifted Rural Youth of Andhra Pradesh</h6>
                <h6 style={{color:'white'}}>(Constituted under the A.P Govt. Act 18 of 2008 and recognized as per Section 2(f), 12(B) of UGC Act, 1956)</h6>
                <h6 style={{color:'white'}}>Accredited by 'NAAC' with 'B+' Grade</h6>
            </div>
        </div>
    </div>
  )
}

export default Dashboard

const styles = {
    bgImgContainer:{
        position: 'relative',
        display:'flex',
        backgroundImage:`url(${bgimg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height:'100vh',
        // backdropFilter:0.8,
        backgroundColor:'#00000000',
        alignItems:'center',
        justifyContent:'center',
    }
}