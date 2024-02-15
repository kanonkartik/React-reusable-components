import { useState } from 'react';
import QRCode from 'react-qr-code'
import './styles.css'

export default function QRgenrator() {
  const[qrcode , setQRcode]=useState('')
  const [input , setInput]=useState('')

  function handelgenerate(){
      setQRcode(input)
      setInput('')
  }

  return (
    <div className="qr-generator-container">
        <div className="qr-generator-header">
            <h1>QR CODE GENERATOR</h1>
        </div>
        <div className="qr-generator-input">
            <input type="text" placeholder="Please enter value" name="qr-code" value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
        <div className="qr-generator-button">
            <button disabled={input && input.trim() !== '' ? false : true} onClick={handelgenerate}>Generate</button>
        </div>
        <div className="qr-generator-qrcode">
            <QRCode 
                id="qr-code-value"
                value={qrcode}
                size={400}
            />
        </div>
    </div>
);

}
