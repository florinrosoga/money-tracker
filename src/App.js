import "./App.css";

function App() {
  return (
    <div>
      <main>
        <h1>
          $400<span>.00</span>
        </h1>
        <form>
          <div className="basic">
            <input type="text" placeholder={"+200 new samsungtv"} />
            <input type="datetime-local" />
          </div>
          <div className="description">
            <input type="text" placeholder="description" />
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
              <div className="name">Gog Job New Website</div>
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
