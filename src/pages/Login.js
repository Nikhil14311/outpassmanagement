import React from 'react'

const Login = () => {
  return (
    <div style={styles.mainContainer}>
        <div class="mb-3 mt-3">
            <h1 class="form-label">Login</h1>
        </div>
        <div class="mb-3 mt-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
        </div> 
        <div class="mb-3">
            <label for="pwd" class="form-label">Password</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
        </div> 
        <button type="submit" class="btn btn-primary">Login</button>
    </div>
  )
}

export default Login

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