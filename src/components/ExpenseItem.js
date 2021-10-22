const ExpenseItem = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 shadow-md rounded-md w-4/5 mx-auto">
      <div className="flex-grow font-bold">March 28th 2021</div>
      <div className="flex items-center justify-between w-4/5 px-4">
        <div className="font-bold text-2xl">Car Insurance</div>
        <div className="py-3 px-4 bg-pink-500 text-lg rounded-md cursor-pointer">
          $296.34
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
