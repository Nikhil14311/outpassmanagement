import React from 'react'

const RequestForm = () => {
  return (
    <div style={styles.mainContainer}>
        <div class="mb-3 mt-3">
            <h1 class="form-label">Request Form</h1>
        </div>
        <div style={{alignItems:'center', flexDirection:'column', width:'50%',justifyContent:'center'}}>
        <div class="mb-3 mt-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter Name" name="name" />
        </div> 
        <div class="mb-3">
            <label for="idno" class="form-label">Id Number</label>
            <input type="text" class="form-control" id="idno" placeholder="Enter Id Number" name="idno" />
        </div> 
        <div class="mb-3">
            <label for="phno" class="form-label">Phone Number</label>
            <input type="text" class="form-control" id="phno" placeholder="Enter Phone Number" name="phno" />
        </div> 
        <div class="mb-3">
            <label for="branch" class="form-label">Branch</label>
            <input type="text" class="form-control" id="branch" placeholder="Enter Branch" name="branch" />
        </div> 
        <div class="mb-3">
            <label for="outpass" class="form-label">Why do you need Outpass</label>
            <textarea type="text" class="form-control" id="outpass" placeholder="Enter Branch" name="outpass" />
        </div> 
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  )
}

export default RequestForm


const styles = {
    mainContainer:{
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:'100vh',
    }
}