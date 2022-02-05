//eslint-disable-next-line
import { useEffect } from 'react'
import '../styles/Cart.css'

function Cart({cart, updateCart, isOpen, setIsOpen}) {
	const total = cart.reduce(
		(acc, plantType) => acc+plantType.price*plantType.amount,
		0
	)


	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
			{cart.length > 0 ? (
			<div>
				{cart.map(({name, price, amount}, index) => 
					<div key={`${name}-${index}`}>
						{name} : {price}XAF x {amount}
					</div>
				)}
				<h3>Total : {total}€</h3>
				<button onClick={() => updateCart([])}>Vider le panier</button>
			</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>

	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart
