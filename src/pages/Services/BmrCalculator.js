import {React,useState} from "react";
import { PieChart } from '@mui/x-charts/PieChart';
import { yellow } from "@mui/material/colors";
// import { Pie } from "react-chartjs-2"; // Import Pie component

const pieParams = { height: 200 };
const palette = ['red', 'blue', 'green'];

const BmrCalculator = () => {

  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const calculateCalories = (e) => {
    e.preventDefault();
    let bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    bmr = Math.trunc(bmr);
    const deficitCalories = bmr - 500;
    const maintenanceCalories = bmr;
    const bulkingCalories = bmr + 500;

    setResults({
      deficit: deficitCalories.toFixed(2),
      maintenance: maintenanceCalories.toFixed(2),
      bulking: bulkingCalories.toFixed(2),
    });
    setShowtable(true);
  };

  const [showtable, setShowtable] = useState(false);
  const [results, setResults] = useState({
    deficit: "",
    maintenance: "",
    bulking: "",
  });


  return (
    <>
    

        <div className=" pt-5 pb-5 my-3">
        <div className="flex justify-center container3 items-center flex-col">
        <div className="text-white text-center text-[50px] font-bold mt-5 pt-[20px]">
            <h2>BMR Calculator</h2>
          </div>
          <div className="text-center mt-6">
    <form onSubmit={calculateCalories}>
        <div>
        <label htmlFor="age" className="text-[30px] text-white">Age (years) : </label>
        <input
          type="number"
          id="age"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className=" text-center placeholder-blue-800 p-2 my-2 rounded-xl text-[#1D40AF] text-2xl font-semibold mx-2 px-8"

        />
        </div>
        <div>
        <label htmlFor="weight" className="text-[30px] text-white">Weight (kg) : </label>
        <input
          type="number"
          id="weight"
          placeholder="Enter Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className=" text-center placeholder-blue-800 p-2 my-2 rounded-xl text-[#1D40AF] text-2xl font-semibold mx-2 px-8"

        />
        </div>
        <div>
        <label htmlFor="height" className="text-[30px] text-white">Height (cm) : </label>
        <input
          type="number"
          id="height"
          placeholder="Enter Height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className=" text-center placeholder-blue-800 p-2 my-2 rounded-xl text-[#1D40AF] text-2xl font-semibold mx-2 px-8"

        />
        </div>

      <button variant="primary" type="submit"  className="mx-3 my-2 mt-4 bg-slate-200 text-[#1D40AF] px-4 text-2xl font-bold p-2 rounded-xl">
        Calculate Calories
      </button>
      </form>
      </div>
      </div>
      </div>

      {showtable ? (
<div className="container mx-auto my-8 flex">
  <div className="container mx-20px">
  <p className="text-2xl font-bold">BMR<span className="mx-1 text-red-700">Calculator:</span></p>
    <p className="mt-4 mr-8">BMR stands for Basal Metabolic Rate (BMR) is the number of calories you burn as your body performs basic (basal) life-sustaining function. Commonly also termed as Resting Metabolic Rate (RMR), which is the calories burned if you stayed in bed all day.</p>
    </div>

  <div className="">
      <table >
        <thead>
          <tr>
            <th className="text-[#1D40AF] font-extrabold text-xl ">CALORIE TYPE</th>
            <th className="text-[#1D40AF] font-extrabold text-xl ">CALORIES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-bold text-lg">Deficit</td>
            <td>{results.deficit}</td>
          </tr>
          <tr>
            <td className="font-bold text-lg">Maintenance</td>
            <td>{results.maintenance}</td>
          </tr>
          <tr>
            <td className="font-bold text-lg">Bulking</td>
            <td>{results.bulking}</td>
          </tr>
        </tbody>
      </table>
      </div>

      <div className="w-[100%] ">
      <PieChart 
            sx={{}}
          series={[{ data: [{ value: results.deficit, label: 'Deficit', color:'blue'  }, 
          { value: results.maintenance, label: 'Maintenance', color:'red' }, 
          { value: results.bulking, label: 'Bulking', color:'purple' }] }]}
          {...pieParams}
        />
        </div>
    
        </div>
      
):(
  <div>

  </div>
) }



      </>
  );
};

export default BmrCalculator;
