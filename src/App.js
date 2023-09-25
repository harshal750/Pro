
import './App.css';
import './index.js';
import React from 'react';

function App() {
  return (
    <div className="App">
      <img className='logo' src='./Capture.png'></img>
      <h1 className='title'>Omoi</h1>
      <div className='prg'><p className='progress-bar'><img src='./boyogo.png'></img></p></div>
      <div className=' h_title'><h2>Good Evening Team! </h2></div>
      <p className='subt'>Have an in-depth look at all the matrics within your dashboard</p>
      <div className='menu'>
        <p><button id='btn-home'>Home</button></p>
        <p><button id='btn-lyt'>Analytics</button></p>
        <p><button id='btn-exp'>Explore</button></p>
        <p><button id='btn-shop'>Shop</button></p>
        <p><button id='btn-inbox'>Inbox</button></p>
        <label>Tools</label>
      </div>

      <div className='chrt'>
        <img src='./img3.png' className='img1'></img>
        <div className='t1'>
          <p className='bl1'>Monthly Revenue</p>
          <p className='bl2'>$3.500 <button className='btn1'>+2.4%</button></p>
          <p className='bl1'>Previous Month <b>$1.7k</b></p>

        </div>
        <img src='./img2.png' className='img1'></img>
        <div className='t2'>
          <p className='bl1'>Monthly Sales</p>
          <p className='bl2'>$6.750 <button className='btn1'>+1.4%</button></p>
          <p className='bl1'>Previous Month <b>$3.1k</b></p>

        </div>
        <img src='./img1.png' className='img1'></img>
        <div className='t3'>
          <p className='bl1'>Total Profit</p>
          <p className='bl2'>$10.900 <button className='btn1'>+4.3%</button></p>
          <p className='bl1'>Previous Year <b>$8.9k</b></p>

        </div>
      </div>
      <div className='chrt2'>
        <p className='c1'>Total Sales & Cost</p>
        <p className='cc1'>Last 60 days</p>
        <p className='c2'>$956.82k</p>
        <p className='c3'>+8.20k</p>
        <p className='c4'>vs prev. 60 days</p>
      </div>
    </div >
  );
}

export default App;
