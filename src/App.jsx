import "./App.css";

function App() {
  const fruits = ["Apple", "Banana", "Orange"];

  return (
    <div>
      <h1>My Fruit List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
