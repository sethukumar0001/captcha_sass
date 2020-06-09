
import React, { useState, useRef, useEffect } from 'react';
import makeid from './randomString';
import './App.scss';


const App =()=> {

  const [captchaString, updateCaptchaString] = useState(makeid(5))
  const [captchaText, updateCaptchaText] = useState('');

    // code for generate random captcha and canvas ui
    const canvasRef = useRef(null);
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "white";
      ctx.font = "47px Arial";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillText(captchaString, 10, 50);
    }, [captchaString]);

    const handleSubmit = () => {
      if (captchaText !== captchaString) {
        updateCaptchaString(makeid(5))
        alert("Please enter valid Captcha text");
      }
    }

    return (
      <div>
         <form autoComplete="off" onSubmit={handleSubmit}>
      <div class="form-group row">
              <label htmlFor="captcha" class="col-sm-4 col-form-label">Captcha <span className="required">*</span></label>
              <div >
                <canvas type="text" id="mainCaptcha"  className="captchaStyle" ref={canvasRef} width={200} height={80} style={{ height: '40px', fontSize: '500px', color: 'red' }} ></canvas>
              </div>
              <img type="button" id="refresh" className="refresh" src={require("./assets/unnamed1.png")}
                onClick={(event) => { updateCaptchaString(makeid(5)) }
                }></img>
            </div>
            <div class="form-group row">
              <label htmlFor="captcha" class="col-sm-4 col-form-label"></label>
              <div className="col-sm-5">
                <input
                  type="text"
                  name="captcha"
                  className="form-control"
                  id="captcha"
                  placeholder="Enter Captcha"
                  value={captchaText}
                  onChange={(event) =>
                    updateCaptchaText(event.target.value)}
                  required />
              </div>
              <div className="col-sm-5">
                <input
                  type="submit"
                  value="Submit"
                  />
              </div>
            </div>
            </form>
      </div>
    )
  }
 
export default App;