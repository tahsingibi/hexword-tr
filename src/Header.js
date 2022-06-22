import React from 'react'

function Header() {
  
  return (
    <div className="text-center my-2 py-4">
        <h1 className="text-4xl">#HEXWORDS-TR</h1>
        <p>#5EFFAF olmayı seçebilecekken neden rastgele bir yeşille uğraşasın!</p>
        <p className="text-black text-opacity-50 text-sm py-1">
            by <b><a href="https://sungur.dev/">tahsingibi</a></b> ~ <a href="https://github.com/tahsingibi/hexword-tr">github</a> • &nbsp;
            <a href="https://hexwords.netlify.app/">hexwords-en</a> •
            teşekkürler: <b><a href="https://twitter.com/fkadev">fkadev</a></b>
        </p>
    </div>
  )
}

export default Header