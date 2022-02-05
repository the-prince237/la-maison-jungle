import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import Categories from './Categories'
import { useState, useEffect } from 'react'

function ShoppingList({cart, updateCart, isOpen, setIsOpen}) {

	const savedCategories = localStorage.getItem('activeCategories')
	const [activeCategories, setActiveCategories] = useState(savedCategories ? JSON.parse(savedCategories) : [])

	useEffect(() => {
		localStorage.setItem('activeCategories', JSON.stringify(activeCategories))
		},
		[activeCategories]
	)

	function addToCart(name, price) {
		const currentPlantAdded = cart.find((plant) => plant.name === name)
		if(currentPlantAdded){
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{name, price, amount: currentPlantAdded.amount+1}
			])} else {
				updateCart([...cart, {name, price, amount:1}])
			}
		!isOpen && setIsOpen('true')
	}

	function removeToCart(name, price) {
		const currentPlantRemoved = cart.find((plant) => plant.name === name)
		if (currentPlantRemoved){
			const _cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			currentPlantRemoved.amount > 1 ? updateCart([
				..._cartFilteredCurrentPlant,
				{name, price, amount: currentPlantRemoved.amount-1}
			]) : updateCart([..._cartFilteredCurrentPlant])
		} else {
			alert(`la plante ${name} n'apparaît pas dans votre panier.\n appuyez sur ajouter pour la faire appaître!`)
		}
		!isOpen && setIsOpen('true')
	}

	return (
		<div className="lmj-shopping-list">
			<Categories activeCategories={activeCategories} setActiveCategories={setActiveCategories} />
			
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					(activeCategories.includes(category) || activeCategories.length === 0) && (
						<div key={id} className='lmj-plant-list-itemBox'>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
								category={category}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
							<button onClick={() => removeToCart(name, price)}>Retirer</button>
						</div>)
				)}
			</ul>
		</div>
	)
}

export default ShoppingList
