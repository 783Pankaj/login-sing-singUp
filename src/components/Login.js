import React, { useState } from 'react'
import Store from './Store';

const Login = () => {
    const[userName, setUserName] = useState("");
    const[userPass, setUserPass]= useState("");
    const[store, setStore] = useState([]);
    const userNameFun=(e)=>{
        setUserName(e.target.value)
        
    }
    const userPassFun=(e)=>{
        setUserPass(e.target.value)
       
    }
    const subFun=()=>{
        setStore([...store, userName, userPass])
        if(userName==="Pankaj" && userPass==="1234"){
            alert(`login sucessfully ${store}`)
            setUserName('');
        setUserPass('');
        }else{
                alert("wrong")
        }
        
    }
    return (
        <>
            <h1>Login Page</h1>
            <div>
                <input type='text'
                    placeholder='enter your mail'
                    onChange={userNameFun}
                    value={userName}
                />
                <br /><br/>
                <input type='password'
                    placeholder='enter your password'
                    onChange={userPassFun}
                    value={userPass}
                    />
                    
                 <br /><br/>
                <button type='submit' onClick={subFun}
                >Login</button> 

                <div>
                     {store.map((val, i)=>{
                        return(
                            <Store key={i} data={val}/>
                        )
                     })}
                    </div>  
            </div>
        </>
    )
}

export default Login
