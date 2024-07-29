import MealItem from "./meal-items";

export default function MealsGrid({meals}) {
    return(
       <ul className="w-11/12 max-w-6xl grid gap-20 grid-cols-3 my-8 mx-auto p-0">
        {meals.map(meal => <li key={meal.id}>
            <MealItem {...meal}/>
        </li>)}
       </ul>
    )
}