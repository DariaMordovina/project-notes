
const MyList=({ mealPlans, addMeal, deleteDay, selectedDay, setSelectedDay })=>{

const handleClick =(id)=> {
    setSelectedDay((prevSelectedDay) => (prevSelectedDay ===id ? null: id));
}
    return(
        <div>
<div >
    <h1>Идеи еженедельного плана питания</h1>
    <button className="button-add" onClick={addMeal}>Добавить</button>
    
</div>
<div className="notes">
    {mealPlans.map(({title,id,mealForADay}) =>(
        <div 
        key={id}
        className={`meal ${id === selectedDay ? "selected" : "default"}`}
        onClick = {() => handleClick(id)}
        >
            <p className="field">{title}</p>
            <p className="field">{mealForADay.substring(0,60)}</p>
            <button className="button-delete" onClick={() => deleteDay}>Удалить</button>
        </div>
    )

    )}
</div>
        </div>
    )
}
export default MyList;