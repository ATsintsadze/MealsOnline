import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummamry from "./MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummamry />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
