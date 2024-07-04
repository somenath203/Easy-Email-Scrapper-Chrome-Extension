/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { FaSpinner } from "react-icons/fa6";

import { setEmailsResult } from './../redux/emailsSlice';


const Welcome = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [ isUserInTab, setIsUserInTab ] = useState(true);

  const [ loading, setLoading ] = useState();


  const scrapEmailsResult = async () => {

    try {

      setIsUserInTab(true);

      setLoading(true);

      let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });

      if (tab && !tab.url.startsWith('chrome://')) {

        chrome.scripting.executeScript({

          target: { tabId: tab.id },
  
          func: () => {
  
            const regularExpressionForEmail = /[\w\.=-]+@[\w\.-]+\.[\w]{2,3}/gim;
  
            const allScrappedEmails = document.body.innerHTML.match(regularExpressionForEmail);
  
            chrome.runtime.sendMessage({ allScrappedEmails });
  
          },
        });
  
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  
          const emails = request.allScrappedEmails;
  
          if (emails !== null || emails.length !== 0) {
  
            dispatch(setEmailsResult(emails));
  
          } 
  
        });

        setLoading(false);
  
        navigate('/result');

      } else {

        setLoading(false);

        setIsUserInTab(false);

      }
      

    } catch (error) {

      setLoading(false);

      setIsUserInTab(false);

      console.log(error);

    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center gap-5 lato-regular">
      
      <p className="text-xl tracking-wider font-semibold text-orange-400 mt-1">
        Easy Email Scrapper
      </p>

      <p className="text-2xl text-center tracking-wider font-semibold text-orange-600">
        A simple tool to scrap emails from website
      </p>

      {loading ? <>
        <FaSpinner className='transition-all text-4xl font-bold text-orange-500 animate-spin duration-300' />
      </> : isUserInTab ? <>
        <button
        className="py-5 px-10 mt-5 mb-10 font-bold rounded-xl shadow-xl bg-orange-600 text-white text-xl tracking-wider"
        onClick={scrapEmailsResult}
        >
          Scrap Emails
        </button>
      </> : <>
        <p className='text-center text-lg lato-regular tracking-wider text-orange-500 font-bold px-4'>This extension only works on websites. Please navigate to a website to use this extension.</p>
      </>}

    </div>
  );
};

export default Welcome;
