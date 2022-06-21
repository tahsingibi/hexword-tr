import React from 'react'

function Header() {
  return (
    <div className="text-center my-2 py-4">
        <h1 className=" text-4xl">#HEXWORDS-TR</h1>
        <p>#5EFFAF olmayı seçebilecekken neden rastgele bir yeşille uğraşasın!</p>
        <p className="text-zinc-500 text-sm py-1">
            by <b><a href="https://sungur.dev">tahsingibi</a></b> • orijinal proje: <b><a href="https://hexwords.netlify.app/" target="_blank">#HEXWORDS</a></b> • teşekkürler: <b><a href="https://twitter.com/fkadev" target="_blank">fkadev</a></b>
        </p>
    </div>
  )
}

export default Header