import { useState, useEffect } from 'react'
import '../styles/Footer.css'

function Footer() {

    const savedInputValue = localStorage.getItem('input')
    const [inputValue, setInputValue] = useState(savedInputValue ? savedInputValue : '')
    
    useEffect(() => {
        localStorage.setItem('input', inputValue)
    }, [inputValue])

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                pour les passionnées de plantes  🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input
                type="email"
                placeholder="Entrez votre mail"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={(e) => !e.target.value.includes('@') && alert('Attention, il n\'y a pas d\'@, ceci n\'est pas une adresse valide.')}
            />
        </footer>
    )
}

export default Footer