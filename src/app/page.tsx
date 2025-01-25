'use client'

import { useEffect, useState } from "react";
import Mobile from "./components/banner/index";
import Laptop from "./components/laptopBanner/index";

export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 590);
      };

      handleResize(); 
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    import('./statics/main.js').then(module => {
    }).catch(err => console.error("Failed to load main.js", err));
  }, []);

  return (
    <>
      <a href="" className="clear"></a>
      <p className="hello-txt">
        <span>visitor</span>@devch.com:~$ welcome
      </p>
      <div>
        {isMobile ? (
          <Mobile/>
        ) : (
          <Laptop/>
        )}
      </div>
      <div className="txt">
        <p className="welcome-txt">
          Welcome to my terminal like portfolio . <br />
          For a list of the commands, type
          <span className="help-txt"> &quot;help&quot; </span> .
        </p>
      </div>

      <div className="content"></div>

      <div id="txt">
        <p className="path">visitor@devch.com:~$</p>
        <div className="cursor">
          <input type="text" className="txt-input" />
          <i></i>
        </div>
      </div>
    </>
  );
}
