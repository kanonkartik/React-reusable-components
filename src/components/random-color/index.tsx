import { useEffect, useState } from 'react';

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomHexColor() {
        const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
        setTypeOfColor('hex');
    }

    function handleCreateRandomRgbColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setColor(`rgb(${r}, ${g}, ${b})`);
        setTypeOfColor('rgb');

    }

    useEffect(()=>{
     if(typeOfColor==='rgb')handleCreateRandomRgbColor
     else handleCreateRandomHexColor
    },[typeOfColor])

    return (
        <div style={{ width: '100vw', height: '100vh', background: color }}>
            <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>
                GENERATE RANDOM COLOR
            </button>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: "#fff", fontSize: "24px",flexDirection:'column',gap:'10px' }}>
                <h1>{typeOfColor==="rgb" ? 'RGB COLOR':'HEX COLOR'}</h1>
                <br></br><br></br>
                <h2>{color}</h2>
            </div>
        </div>
    );
}
