import React, { useState } from "react";
import pogi from "../assets/pogi.jpg";

function App() {
  // for add income
  const [inputIncome, setinputIncome] = useState(0);
  const [incomeDisplay, setincomeDisplay] = useState(0);

  const handleIncomeBtn = () => {
    // Set the value to be displayed from the input value
    setincomeDisplay(inputIncome);
    setinputIncome("");
  };

  // Function to update the input value as it changes
  const handleInputChange = (event) => {
    setinputIncome(event.target.value);
  };

  // for add description
  const [expenseData, setExpenseData] = useState({
    name: "",
    description: "",
    date: "",
    expenses: 0,
  });

  // Array to store multiple expenses
  const [expensesList, setExpensesList] = useState([]);

  const handleExpensesBtn = () => {
    // Check if any of the required fields is empty
    if (
      !expenseData.name ||
      !expenseData.description ||
      !expenseData.date ||
      expenseData.expenses === 0
    ) {
      alert("Please fill in all required fields.");
      return; // Stop further execution if validation fails
    }

    // Add the current expense data to the list
    
    if (parseFloat(expenseData.expenses) > parseFloat(incomeDisplay)) {
      alert("You dont have enought balance.");
      return;
    } else {
      setExpensesList([...expensesList, expenseData]);

      setincomeDisplay((incomeDisplay) => incomeDisplay - expenseData.expenses);
      // Clear the expenseData for the next entry
      setExpenseData({
        name: "",
        description: "",
        date: "",
        expenses: 0,
      });
    }
  };

  return (
    <>
      <div className="grid grid-cols-6 grid-rows-2 h-[51.6rem] gap-0 bg-gray-900"  id="App">
        <aside className="grid grid-rows-2 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100 h-[50.2rem] w-[20.2rem] mt-3 ml-3">
          <div className="flex flex-col items-center justify-start">
            <img
              src={pogi}
              className="object-cover h-[10rem] w-[10rem] rounded-[30rem] mt-[2.5rem]"
              alt=""
            />
            <div className="flex justify-center mt-4">
              <h1 className="text-white text-[1.7em] font-semibold text-center">
                Marc Erman Martinez
              </h1>
            </div>
            <div className="flex text-center justify-center mt-2">
              <div className="text-wrap">
                <h1 className="text-white mb-2">Add Income:</h1>
                <input
                  type="number"
                  value={inputIncome}
                  onChange={handleInputChange}
                  className="mb-2 w-[15rem] text-black text-center font-semibold rounded-md p-2 outline-none"
                />
                <button
                  type="button"
                  className="text-white w-[9rem] bg-gray-800 mt-2 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={handleIncomeBtn}
                >
                  Add Income
                </button>
              </div>
            </div>
            <div className="flex text-center justify-center mt-2">
              <div className="text-wrap">
                <h1 className="text-white mb-2">Add Name:</h1>
                <input
                  type="text"
                  value={expenseData.name}
                  onChange={(e) =>
                    setExpenseData({ ...expenseData, name: e.target.value })
                  }
                  className="mb-2 w-[15rem] text-black font-semibold text-center rounded-md p-2 outline-none"
                />
                <h1 className="text-white mb-2">Add Description:</h1>
                <input
                  type="text"
                  value={expenseData.description}
                  onChange={(e) =>
                    setExpenseData({
                      ...expenseData,
                      description: e.target.value,
                    })
                  }
                  className="mb-2 w-[15rem] text-black font-semibold text-center rounded-md p-2 outline-none"
                />
                <h1 className="text-white mb-2  ">Add Date:</h1>
                <input
                  type="date"
                  value={expenseData.date}
                  onChange={(e) =>
                    setExpenseData({ ...expenseData, date: e.target.value })
                  }
                  className="mb-2 w-[15rem] text-black font-bold text-center rounded-md p-2 outline-none uppercase"
                />
                <h1 className="text-white mb-2">Add Expense Amount:</h1>
                <input
                  type="number"
                  value={expenseData.expenses}
                  onChange={(e) =>
                    setExpenseData({ ...expenseData, expenses: e.target.value })
                  }
                  className="mb-2 w-[15rem] text-black font-semibold text-center rounded-md p-2 outline-none"
                />
                <button
                  type="button"
                  onClick={handleExpensesBtn}
                  className="text-white w-[9rem] bg-gray-800 mt-3 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Add Expense
                </button>
              </div>
            </div>
          </div>
        </aside>

        <section
          className=" overflow-auto w-[97.2rem] h-[50.1rem] ml-6 mt-3 p-3 bg-gray-400 rounded-md bg-clip-padding   backdrop-filter 
        backdrop-blur-lg bg-opacity-50 border border-gray-100"
        >
          <table className="w-full text-center border bg-gray-500  border-collapse border-black">
            <thead className="border-b border-x-2">
              <tr className="border-b border-x-2 font-bold text-[1.3em] ">
                <th className="border border-white text-black bg-white">
                  Name:
                </th>
                <th className="border border-white text-black bg-white">
                  Description:
                </th>
                <th className="border border-white text-black bg-white">
                  Date:
                </th>
                <th className="border border-white text-black bg-white">
                  Amount:
                </th>
              </tr>
            </thead>
            <tbody className="border-b border-x-2 text-[20px]">
              {expensesList.map((expense, index) => (
                <tr key={index} className="border-b border-x-2">
                  <td className="border border-white text-white">
                    {" "}
                    {expense.name}
                  </td>
                  <td className="border border-white text-white">
                    {expense.description}
                  </td>
                  <td className="border border-white text-white">
                    {expense.date}
                  </td>
                  <td className="border border-white text-white">
                    ₱{parseFloat(expense.expenses).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      <div className="bg-gray-900 h-[14.3vh] pl-3 ">
        <aside className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100 h-[13.6vh] w-[99%]  ">
          <h1 className="text-[2.4rem] text-white flex justify-end mr-[2rem] mt-[2rem]">
            Balance: ₱{parseFloat(incomeDisplay).toLocaleString()}
          </h1>
        </aside>
      </div>
    </>
  );
}

export default App;
