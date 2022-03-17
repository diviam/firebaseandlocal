import React, { useEffect, useState } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import './Addedit.css';
import fireDb from "../firebase";
import {toast} from "react-toastify";
import { enableNetwork } from "firebase/firestore";
const initialState = {
    name: "",
    email: "",
    contact: "",
}
export const Addedit = () => {
    const [state,setState] = useState([initialState]);
    const [data,setData] = useState([]);

    const {name, email, contact} = state;

    const navigate = useNavigate();

    const {id} = useParams();
     
    useEffect(() => {
      
        fireDb.child("contacts").on("value",(snapshot) => {
          if(snapshot.val()!== null) {
            setData({...snapshot.val()})
          } else {
            setData({});
          }
          });
    
        return () => {
          setData({});
        };
      },[id]);
          
        useEffect(() => {
            if(!id){
                setState({...data[id]})
            } else {
                setData({...initialState})
            }

            return () => {
                setState({...initialState});
            };
        }, [id, data])

        // useEffect(() =>{
        //  localStorage.setItem('data',JSON.stringify(data));
        //  },[data])

    const handleInputChange = (e) =>{
     const{name, value} = e.target;
     setState({...state,[name]:value})
    };
    const handleSumbit = (e) =>{
     e.preventDefault();
     if(!name || !email || !contact){
         toast.error("Please provide value in each input field");
     }
     else{
       if(!id){
        localStorage.setItem('data',JSON.stringify(state));
        fireDb.child("contacts").push(state,(err) =>{
          if(err){
              toast.error(err);
          }
          else{
              toast.success("Contacts added successfully");
          }
      });
       }
      // edit
         else{
          fireDb.child(`contacts/${id}`).set(state,(err) =>{
            if(err){
                toast.error(err);
            }
            else{
                toast.success("Contacts updated successfully");
            }
        });
         }
        setTimeout(() => navigate.push("/"),500);
        }
    };
  return (
    <div style={{marginTop:"100px"}}>
        <form 
        style={{margin:"auto",
        padding: "15px",
        maxWidth:"400px",
        alignContent: "center",
        }} onSubmit={handleSumbit}>
            <label htmlFor="name">Name</label>
            <input type="text" 
            id='name'
            name='name'
            placeholder='Your Name...'
            value={name || ""}
            onChange={handleInputChange}/>
             <label htmlFor="email">Email</label>
            <input type="email" 
            id='email'
            name='email'
            placeholder='Your Email...'
            value={email || ""}
            onChange={handleInputChange}/>
             <label htmlFor="contact">Contact</label>
            <input type="number" 
            id='contact'
            name='contact'
            placeholder='Your Contact No...'
            value={contact || ""}
            onChange={handleInputChange}/>
            <input type="submit" value={id ? "update" : "save"} />
            </form>
    </div>
  )
}
