import CareScale from './CareScale'
import '../styles/PlantItem.css'
 
function handleClick(plantName, plantDescription) {
	alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix!\n\n\n DESCRIPTION\n ${plantDescription}`);
}


function PlantItem({ id, cover, name, water, light, description, price }) {
	

	return (
		<div id='plant-item-contener'>
			<li key={id} className='lmj-plant-item' onClick={() => {handleClick(name, description)}}>
				<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
				{name}
				<div className="lmj-plant-item-price">{price} XAF</div>
			</li>
			<div className="more-infos" title={`Plus d'infos sur ${name} !`}>+</div>
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</div>
		
	)
}

export default PlantItem
