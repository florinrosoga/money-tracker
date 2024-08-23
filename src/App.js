import {useState} from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [description, setDescription] = useState("");

  function addNewTransaction() {}

  return (
    <div>
      <main>
        <h1>
          $400<span>.00</span>
        </h1>
        <form onSubmit={{addNewTransaction}}>
          <div className="basic">
            <input
              type="text"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
              placeholder={"+200 new samsungtv"}
            />
            <input
              type="datetime-local"
              value={datetime}
              onChange={(ev) => setDatetime(ev.target.value)}
            />
          </div>
          <div className="description">
            <input
              type="text"
              placeholder="description"
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />
          </div>
          <button type="submit">Add new transaction</button>
        </form>
        <div className="transactions">
          <div className="transaction">
            <div className="left">
              <div className="name">New Samsung</div>
              <div className="description">It was time for a new TV</div>
            </div>
            <div className="right">
              <div className="price red">-$500</div>
              <div className="datetime">2022-12-18 15:45</div>
            </div>
          </div>
        </div>

        <div className="transactions">
          <div className="transaction">
            <div className="left">
              <div className="name">Gig Job New Website</div>
              <div className="description">It was time for a new TV</div>
            </div>
            <div className="right">
              <div className="price green">+$900</div>
              <div className="datetime">2022-12-18 15:45</div>
            </div>
          </div>
        </div>
        <div className="transactions">
          <div className="transaction">
            <div className="left">
              <div className="name">Iphone</div>
              <div className="description">It was time for a new TV</div>
            </div>
            <div className="right">
              <div className="price red">-$900</div>
              <div className="datetime">2022-12-18 15:45</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
