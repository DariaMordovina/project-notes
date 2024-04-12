
import './App.css';
import MyList from './MyList';
import MyMealAndIngredients from './MyMealAndIngredients';
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';


function App() {

  const [mealPlans,setMealPlans]=useState(
    localStorage.mealPlans ? JSON.parse(localStorage.mealPlans):[]);
const [selectedDay,setSelectedDay]=useState(false);

useEffect(()=>{
  localStorage.setItem("mealPlans",JSON.stringify(mealPlans))
},[mealPlans])

const addMeal =()=>{
  const newMeal = {
    title: "День недели...",
    id:uuid(),
    mealForADay:"",
    ingredients:""
  }
  setMealPlans([newMeal,... mealPlans])
  console.log(newMeal)
}

const deleteDay=(mealId)=>{
  setMealPlans(mealPlans.filter(({id})=> id!== mealId))
}

const updateDay = (myUpdateMeal) => {
  const updatedMeals = mealPlans.map((mealPlan)=>{
    if (mealPlan.id ===myUpdateMeal.id){
      return myUpdateMeal;
    }
    return mealPlan;
  })
  setMealPlans(updatedMeals)
}

const getActiveMeal =()=>{
  return mealPlans.find(({id})=>id ===selectedDay)
}

  return (
    <div className='App'>
      <MyList
       mealPlans={mealPlans}
       addMeal={addMeal}
       deleteDay={deleteDay} 
       selectedDay={selectedDay}
       setSelectedDay={setSelectedDay}
        />
      <MyMealAndIngredients 
      selectedDay={getActiveMeal()}
      updateDay={updateDay}
      mealPlans={mealPlans}
      setMealPlans={setMealPlans}
      setSelectedDay={setSelectedDay}
      />
    </div>
  );
}

export default App;
