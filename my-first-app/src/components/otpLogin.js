import React, { useState ,useEffect } from 'react';
function OtpLogin(props) {

    const otp=(props)=>{
        console.log(props.data)
    }

  return (
    <>
    <h1>i am otp</h1>
    <input placeholder="type in otp and display in social"/>
    </>

  );
}
export default OtpLogin;