const MyMealAndIngredients =({selectedDay,setSelectedDay,updateDay,setMealPlans, mealPlans})=>{

    const editMyMeal = (myinput,value)=>{
        updateDay({
            ...selectedDay,
            [myinput]:value
        })
    }

const handleClose=()=>{
     setSelectedDay(null);
}


if (!selectedDay) return <p> Планируйте свою неделю заранее!</p>

    return(
        <div className="whole-plan">
            <div>

<input 
type="text"
className="myInput" 
placeholder="День недели..."
id='title'
value={selectedDay.title}
onChange = {(e) =>editMyMeal('title',e.target.value)}
/>

<textarea
placeholder="Напишите здесь свой план питания"
id="mealForADay"
value={selectedDay.mealForADay}
onChange = {(e) =>editMyMeal('mealForADay',e.target.value)}
/>

<textarea
placeholder="Список ингредиентов"
id="ingredients"
value={selectedDay.ingredients}
onChange = {(e) =>editMyMeal('ingredients',e.target.value)}
/>
 <button className="btn-forma" onClick={handleClose}>Закрыть</button>
        
</div>
        </div>
    )
}
export default MyMealAndIngredients;