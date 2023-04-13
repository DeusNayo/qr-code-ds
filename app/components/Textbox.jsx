"use client";
import React, { useState } from 'react';
import QRCode from 'qrcode.react';
const Textbox = () => {
  const [url, setUrl] = useState('');
    return (
      <div>
        <div className='p-8'>{url && <QRCode value={url} size={256} />}</div>
        <input type="text" placeholder="Enter a URL" className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:shadow-md" value={url} onChange={(e) => setUrl(e.target.value)} />       
      </div>
    )
  }

  export default Textbox;