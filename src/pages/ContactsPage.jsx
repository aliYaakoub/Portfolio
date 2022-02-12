import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { SiGithub } from 'react-icons/si';
import { BsLinkedin, BsGoogle, BsInstagram } from 'react-icons/bs';

import { useAppContext } from '../components/Context';
import AppInput from '../components/generalComponents/AppInput';

const ContactsPage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameErrorMsg, setNameErrorMsg] = useState('');
    const [emailErrorMsg, setEmailErrorMsg] = useState('');
    const [messageErrorMsg, setMessageErrorMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const { colors, darkMode } = useAppContext();

    async function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        setEmailErrorMsg('');
        setNameErrorMsg('')
        setMessageErrorMsg('');
        setErrorMsg('');
        setSuccessMsg('');
        if(email === ''){
            setEmailErrorMsg('Email is required.')
        }
        if(name === ''){
            setNameErrorMsg('Name is required.')
        }
        if(message === ''){
            setMessageErrorMsg('Message is required.')
        }
        if(!validateEmail(email)){
            setEmailErrorMsg('Invalid Email.')
        }
        if(message.length > 800){
            setMessageErrorMsg('message is too long.')
        }
        if(email && name && message && validateEmail(email)){
            const data = {
                from_email: email,
                to_name: 'ali yaakoub',
                from_name: name,
                content: message
            }
            try{
                await emailjs.send(process.env.REACT_APP_SERVICE_ID, 'template_451a8t7', data, process.env.REACT_APP_USER_ID)
                setSuccessMsg('thank you for your message.')
                setEmail('');
                setMessage('');
                setName('');
                setTimeout(()=>{
                    setSuccessMsg('');
                },5000)
            }
            catch(err){
                setLoading(false)
                setErrorMsg('an error occured while sending the email.')
            }
        }
        setLoading(false);
    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    };

    return (
        <div className='flex-grow'>
            <div className='w-full'>
                <h2 style={{color: colors.text.primary}} className='text-2xl py-5 text-center'>Send me a message !</h2>
                <div className='flex w-full sm:flex-row flex-col'>
                    <AppInput
                        value={email}
                        label='Email :'
                        type={'email'}
                        onChange={(e)=>setEmail(e.target.value)}
                        containerStyle='w-full sm:w-2/4 px-3'
                        styles={emailErrorMsg && 'border-2 border-red-500'}
                        errMsg={emailErrorMsg}
                    />
                    <AppInput
                        value={name}
                        label='Name :'
                        type={'text'}
                        onChange={(e)=>setName(e.target.value)}
                        containerStyle='w-full sm:w-2/4 px-3'
                        styles={nameErrorMsg && 'border-2 border-red-500'}
                        errMsg={nameErrorMsg}
                    />
                </div>
                <AppInput
                    textArea
                    value={message}
                    label='Message :'
                    type={'ematextil'}
                    onChange={(e)=>setMessage(e.target.value)}
                    containerStyle='w-full p-3'
                    styles={`h-52 w-full ${messageErrorMsg && 'border-2 border-red-500'}`}
                    errMsg={messageErrorMsg}
                />
                {errorMsg && <p className='text-red-500 medium-font text-center'>{errorMsg}</p>}
                {successMsg && <p className='text-green-500 medium-font text-center'>{successMsg}</p>}
                {loading && <div className='w-full flex justify-center items-center'>
                    <div className='loading'/>
                </div>}
                <div className='w-full flex justify-center items-center pb-5 mt-5'>
                    <button 
                        onClick={handleSubmit}
                        disabled={loading}
                        className='py-2 px-6 rounded submitBtn shadow'
                        style={{backgroundColor: colors.secondary, color: colors.text.primary}} 
                    >
                        Submit
                    </button>
                </div>
                <div className='flex w-full justify-center mb-5'>
                    <a
                        download
                        className='p-1 underline text-center'
                        style={{color: colors.text.primary}}
                        href="https://drive.google.com/file/d/1U7jF0pXJZ-iuZMQ_GLgD69TQXqQdw197/view?usp=sharing"
                    >
                        Resume
                    </a>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <a target='_blank' rel='noreferrer' href="https://github.com/aliYaakoub" style={darkMode ? {color: colors.accent} : {color: 'black'}} className='icon'>
                        <SiGithub size={30} className='mx-3'  />
                    </a>
                    <a target='_blank' rel='noreferrer' href="https://linkedin.com/in/ali-yaakoub-b59aaa225" style={darkMode ? {color: colors.accent} : {color: 'black'}} className='icon'>
                        <BsLinkedin size={30} className='mx-3'  />
                    </a>
                    <a href='mailto:ali.yaakoub.2021@gmail.com' style={darkMode ? {color: colors.accent} : {color: 'black'}} className='icon'>
                        <BsGoogle size={30} className='mx-3'  />
                    </a>
                    <a target='_blank' rel='noreferrer' href="https://www.instagram.com/ali_yaakub/" style={darkMode ? {color: colors.accent} : {color: 'black'}} className='icon'>
                        <BsInstagram size={30} className='mx-3'  />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactsPage;
