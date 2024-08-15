import React, { useState } from "react";
import axios from "axios";
import { PieChart } from '@mui/x-charts/PieChart';

// import { Pie } from "react-chartjs-2"; // Import Pie component

const pieParams = { height: 200, margin: { right: 5 } };

const NutritionChecker = () => {
  const [foodItem, setFoodItem] = useState("");
  const [nutritionResult, setNutritionResult] = useState(null);

  const handleSearchNutrition = async (e) => {
    try {
      const response = await axios.get(
        `https://api.calorieninjas.com/v1/nutrition?query=${encodeURIComponent(foodItem)}`,
        {
          headers: {
            "X-Api-Key": "Api",
          },
        }
      );

      const data = response.data;

      if (data.items.length > 0) {
        setNutritionResult(data.items[0]);
      } else {
        alert("No nutrition information found for that food item");
      }
    } catch (error) {
      console.error("Error fetching nutrition information:", error);
    }
  };

  return (
    <>
      <div className="container1 p-5">
        <div className=" " style={{ paddingTop: "50px" }}>
          <div className="text-white text-center text-[30px] md:text-[50px] font-bold mt-5 pt-[20px]">
            <h2>Nutrition Information Search</h2>
          </div>
          <div className="text-center mt-6">
            <form
              inline
              onSubmit={(e) => {
                e.preventDefault();
                handleSearchNutrition();
              }}
            >
              <input
                type="text"
                value={foodItem}
                onChange={(e) => setFoodItem(e.target.value)}
                placeholder="Enter Food Item"
                className=" text-center placeholder-blue-800 p-2 my-2 rounded-xl text-[#1D40AF] text-2xl font-semibold mx-2 px-8"
              />
              <button
                variant="outline-primary"
                className="mx-3 bg-slate-200 text-[#1D40AF] px-4 text-2xl font-bold p-2 rounded-xl"
                onClick={handleSearchNutrition}
              >
                Get Nutrition
              </button>
            </form>
          </div>

          <div>
            <h3 className="my-2 mt-7 font-bold text-[20px] md:text-[30px] text-white text-center">
              Nutrition and Ingredients present will be displayed here.
            </h3>
            <h4 className="hidden md:block my-2 text-white text-center mx-[120px]">
              Nutrition encompasses the intake and utilization of nutrients from food, vital for growth, energy, and health maintenance. It involves understanding dietary needs, balancing macronutrients and micronutrients, and making informed choices to support bodily functions, prevent diseases, and optimize overall well-being throughout life.
            </h4>
          </div>

        </div>
      </div>

      {nutritionResult && (
        <div className="text-center">
          <div>
            <h2 className="text-center font-bold text-3xl my-4 text-[#1D40AF]">Nutrition Results</h2>
            <table striped bordered hover responsive="md">
              <thead>
                <tr className="text-[#5a4116]">
                  <th >Name</th>
                  <th>Serving Size</th>
                  <th>Calories</th>
                  <th>Total Fat</th>
                  <th>Saturated Fat</th>
                  <th>Cholesterol</th>
                  <th>Sodium</th>
                  <th>Carbohydrates</th>
                  <th>Fiber</th>
                  <th>Sugar</th>
                  <th>Protein</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{nutritionResult.name}</td>
                  <td>100g</td>
                  <td>{nutritionResult.calories}</td>
                  <td>{nutritionResult.fat_total_g}g</td>
                  <td>{nutritionResult.fat_saturated_g}g</td>
                  <td>{nutritionResult.cholesterol_mg}mg</td>
                  <td>{nutritionResult.sodium_mg}mg</td>
                  <td>{nutritionResult.carbohydrates_total_g}g</td>
                  <td>{nutritionResult.fiber_g}g</td>
                  <td>{nutritionResult.sugar_g}g</td>
                  <td>{nutritionResult.protein_g}g</td>
                </tr>
              </tbody>
            </table>
            <div className="flex mt-8">
            <div className="">
              <p className="md:text-2xl font-bold">Food<span className="mx-1 text-red-700">Ingredient:</span></p>
              <span>
                <p className="container mx-auto mt-3">
                Nutrition information panels on food labels list energy, protein, fat, carbohydrates and sodium.
Nutrition information panels are the best guide to the nutritional value of foods.
If a product contains ingredients that commonly cause food allergic reactions, the food label must say so.
Some of the healthiest foods don’t have food labels. This includes fresh fruit and vegetables, nuts and fish.
                </p>
              </span>
            </div>
            <PieChart 
            sx={{}}
          series={[{ data: [{ value: nutritionResult.calories, label: 'Calories'  }, 
          { value: nutritionResult.sugar_g, label: 'Sugar' }, 
          { value: nutritionResult.carbohydrates_total_g, label: 'Carbohydrates' },
          { value: nutritionResult.sodium_mg, label: 'Sodium'  }] }]}
          {...pieParams}
        />
        </div>
            {/* <PieChart 
          sx={{height:"300px", fontSize:"200px", marginRight:"auto"}}
            colors={['red', 'blue', 'green','orange']} // Use palette
            series={[
              {
        
                data: [
                  { value: nutritionResult.calories },
                  { value: nutritionResult.protein_g },
                  { value: nutritionResult.carbohydrates_total_g },
                  { value: nutritionResult.fiber_g },

                ],
              },
            ]}
          /> */}
          </div>

          {/* implement the chartthat ius pie chart */}

         

        </div>
      )}
    </>

  );
};

export default NutritionChecker;
