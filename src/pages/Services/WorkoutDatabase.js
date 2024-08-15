import React, { useState } from "react";
import axios from "axios";
import "./WorkoutDatabase.css";

const WorkoutDatabase = () => {
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const [exercises, setExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(4);

  const handleMuscleChange = (e) => {
    setSelectedMuscle(e.target.value);
  };

  const handleSearch = async () => {
    const options = {
      method: "GET",
      url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedMuscle}`,
      headers: {
        'X-RapidAPI-Key': 'Api',
        'X-RapidAPI-Host': 'Host'
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response);
      // Limiting to the first 10 exercises
      setExercises(response.data.slice(0, 20));
    } catch (error) {
      console.error(error);
    }
  };

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const truncateExerciseName = (name) => {
    const words = name.split(" ");
    if (words.length > 5) {
      return words.slice(0, 5).join(" ") + "...";
    }
    return name;
  };

  return (
    <div>
      <div className="container2">
        <h2 className="text-white text-center text-[30px] md:text-[50px] head1 mt-5 pt-[90px]">
          Search For A Perfect Exercise
        </h2>
        <div className="mt-6 text-center ">
          <select
            value={selectedMuscle}
            onChange={handleMuscleChange}
            className="p-2 rounded-xl text-[#1D40AF] text-2xl font-semibold mx-2 px-8 mb-2 md:mb-0"
          >
            <option value="">Select A Muscle Group</option>
            <option value="back">Back</option>
            <option value="cardio">Cardio</option>
            <option value="chest">Chest</option>
            <option value="lower%20arms">Lower Arms</option>
            <option value="lower%20legs">Lower Legs</option>
            <option value="neck">Neck</option>
            <option value="shoulders">Shoulders</option>
            <option value="upper%20arms">Upper Arms</option>
            <option value="upper%20legs">Upper Legs</option>
            <option value="waist">Waist</option>
          </select>
          <button
            onClick={handleSearch}
            className="mx-3 bg-slate-200 text-[#1D40AF] px-4 text-2xl font-bold p-2 rounded-xl"
          >
            Search
          </button>
        </div>
        <div>
          <h3 className="my-2 mt-7 font-bold md:text-[30px] text-white text-center">
            Exercises and demonstrations will be displayed here.
          </h3>
          <h4 className="hidden md:block my-2 text-white text-center mx-[120px]">
            Regular physical activity can improve your muscle strength and boost
            your endurance. Exercise sends oxygen and nutrients to your tissues
            and helps your cardiovascular system work more efficiently. And
            when your heart and lung health improve, you have more energy to
            tackle daily chores.
          </h4>
        </div>
      </div>
        {currentExercises.length > 0 ? (
          <div className="flex mt-[20px] bg-gray-200 p-4 h-[425px]">
            {currentExercises.map((exercise) => (
              <div key={exercise.id} className="bg-white border mx-2">
                <div className="gif-container text-black ">
                  <img
                    src={exercise.gifUrl}
                    alt={exercise.name}
                    className="exercise-gif"
                  />
                  <h3 className="text-center mt-8 font-bold text-[#1D40AF]">
                    {capitalizeFirstLetter(truncateExerciseName(exercise.name))}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div ></div>
        )}
      {exercises.length > exercisesPerPage && (
        <div className="pagination">
          {Array.from({
            length: Math.ceil(exercises.length / exercisesPerPage),
          }).map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkoutDatabase;
