import { plantList } from "../datas/plantList"
import '../styles/Categories.css'

function Categories({activeCategories, setActiveCategories}) {
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
    
    function addCategory(e) {
        setActiveCategories([...activeCategories, e.target.value])
    }

    function removeCategory(catRemoved){
        const otherActiveCats = activeCategories.filter(
            (anyCat) => anyCat !== catRemoved
        )
        setActiveCategories([...otherActiveCats])
    }

    return (<div className='lmj-categories'>
                <div id='lmj-categories-selection'>
                    {activeCategories.length > 0 &&
                    <div id="lmj-categories-active">
                        {activeCategories.map((cat, index) =>
                            <span class='lmj-category-active' key={`${cat}-${index}`}>{cat} <button onClick={() => removeCategory(cat)}>x</button></span>
                        )}
                    </div>}
                    <select 
                        className='lmj-categories-select' 
                        value={activeCategories} 
                        onChange={(e) => addCategory(e)}
                    >
                        <option value={activeCategories.length === categories.length ? 'Plus de categorires' : 'ajouter une catégorie'}>{activeCategories.length === categories.length ? 'Plus de categorires' : 'ajouter une catégorie'}</option>
                        {categories.map((cat) => (
                            !activeCategories.includes(cat) && <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

            <br/>
            <button onClick={() => setActiveCategories([])}>Réinitialiser</button>
        </div>
    )
}

export default Categories