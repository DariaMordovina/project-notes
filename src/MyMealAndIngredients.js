const MyMealAndIngredients =({selectedDay,updateDay})=>{

    const editMyMeal = (myinput,value)=>{
        updateDay({
            ...selectedDay,
            [myinput]:value
        })
    }
if (!selectedDay) return <p> Планируйте свою неделю заранее!</p>

    return(
        <div className="whole-plan">
            

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

        
          
        </div>
    )
}
export default MyMealAndIngredients;