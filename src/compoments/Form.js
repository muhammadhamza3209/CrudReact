import React from 'react'
 import { useState } from 'react'
export default function Form() {
     
       const [name, setName] = useState("");
       const [email, setEmail] = useState('');
       const [number, setNumber] = useState('');
       const [sex, setSex] = useState('');
       const [city, setCity] = useState('');


         const onChangeHandle = (e) =>{

             setName(e.target.value);
         }

          const onChangeHandleEamil = (e) =>{

             setEmail(e.target.value);
         }
          
           const onChangeNumber = (e) =>{

             setNumber(e.target.value);
         }

            const onChangeSex = (e) =>{

             setSex(e.target.value);
         }
         
             const onChangeCity = (e) =>{

             setCity(e.target.value);
         }

               const handleSubmit = (e) =>{
               
                  let user ={

                    name: name,
                    email:email,
                    number: number,
                    sex: sex,
                    city: city,
                  }

                  console.log(user);
             
         }



  return (
    <>
      <div className="text-text-center justify-content-center">
        <h3 className="text-center">forms</h3>

        <div className="container">
          <div className="row">
            <div className="col text-center">
              <input
                className="w-100 text-center"
                type="text"
                onChange={onChangeHandle}
                placeholder="enter your name"
              />
              <br />
              <input
                className="mt-3 w-100 text-center"
                type="email"
                onChange={onChangeHandleEamil}
                placeholder="enter your email"
              />
              <br />
              <input
                className="mt-3 w-100 text-center"
                type="number"
                onChange={onChangeNumber}
                placeholder="enter number"
              />
              <br />
              <input
                className="mt-3 w-100 text-center"
                type="text"
                onChange={onChangeSex}
                placeholder="enter your Genus"
              />
              <br />
              <input
                className="mt-3 w-100 text-center"
                type="text"
                onChange={onChangeCity}
                placeholder="enter city"
              />
              <br />

              <button className="mt-3 btn btn-danger" onClick={handleSubmit}>
                sembit
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="text-center">
        <h4>Enter name: {name}</h4>
        <h4>Enter email: {email}</h4>
        <h4>Enter number: {number}</h4>
        <h4>Enter Gender: {sex}</h4>
        <h4>Enter city: {city}</h4>
      </div>
    </>
  );
}
