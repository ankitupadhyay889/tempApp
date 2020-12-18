import './App.css';
import React, { useEffect, useState } from 'react';

const HmApi = () => {
    const[users , setData] = useState([]);

    const[name , setName] = useState("");
    const[email , setMail] = useState("");
    useEffect(() => {
        getRefresh();
    }, [])

    function getRefresh(){
        fetch("http://localhost:3000/todo").then((result)=>{
            result.json().then((resp)=>{
                // console.log(resp);
                setData(resp);

                setName(resp[0].name);
                setMail(resp[0].email);
            })
        })
    }

    function delUser(id){
        // alert(id);
        fetch(`http://localhost:3000/todo/${id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
                getRefresh()
            })
        })
    }

    function selUser(id){
        console.log(users[id-1])
        setName(users[id-1].name);
        setMail(users[id-1].email);
    }
    return (
        <div className='App'>
            <h1>Api Call</h1>
            <table border="1px">
                <tbody>
                <tr>
                <td>UserId</td>
                <td>Name</td>
                <td>Email</td>
                <td>Operations</td>
                </tr>
                {
                    users.map((item , i)=>
                    <tr key={i}>
                    <td> {item.id} </td>
                    <td> {item.name} </td>
                    <td> {item.email} </td>
                    <td><button onClick={()=>delUser(item.id)}>Delete</button></td>
                    <td><button onClick={()=>selUser(item.id)}>Update</button></td>
                    </tr>
                    )
                }
                </tbody>
            </table>
            <div>
                <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} /> <br /><br />
                <input type="text" value={email} onChange={(e) => {setMail(e.target.value)}} /> <br /><br />
                <button>Update User</button>
            </div>
        </div>
    );
};

export default HmApi;