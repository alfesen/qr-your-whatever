import QRCode from 'qrcode'
import { useState } from 'react'

const App = () => {
  const [url, setUrl] = useState('')
  const [qr, setQr] = useState('')

  const generateQR = () => {
    QRCode.toDataURL(url, (err, url) => {
      if (err) return console.error(err)
      setQr(url)
    })

    setUrl('')
  }

  return (
    <div className='App'>
      <h1>QR your Whatever</h1>
      <input
        value={url}
        onChange={e => setUrl(e.target.value)}
        type='text'
        placeholder='Place for your whatever'
      />
      <button onClick={generateQR}>QR it!</button>
      {qr && (
        <>
          <img src={qr} alt='' />
          <a href={qr} download='qr.png'>
            <button>Download</button>
          </a>
        </>
      )}
    </div>
  )
}

export default App
