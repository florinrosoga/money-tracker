import {useEffect, useState} from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [description, setDescription] = useState("");
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then(setTransactions);
  }, []);

  async function getTransactions() {
    const url = "http://localhost:4040/api/transactions";
    const response = await fetch(url);
    return await response.json();
  }

  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = "http://localhost:4040/api/transaction";

    const price = parseFloat(name.split(" ")[0]); // Ensure price is a number
    const itemName = name.substring(price.length + 1).trim(); // Extract the name without the price part

    fetch(url, {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({
        price,
        name: itemName,
        description,
        datetime,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        setName("");
        setDatetime("");
        setDescription("");
        console.log("result", json);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  let balance = 0;
  for (let transaction of transactions) {
    balance = balance + transaction.price;
  }
  balance = balance.toFixed(2); // Ensures balance always has two decimal places

  const [integerPart, fraction] = balance.split("."); // Splitting balance into integer and fraction parts

  return (
    <div>
      <main>
        <h1>
          ${integerPart}
          <span>.{fraction}</span>
        </h1>
        <form onSubmit={addNewTransaction}>
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
          {transactions.length > 0 &&
            transactions.map((transaction) => (
              <div key={transaction._id}>
                <div className="transaction">
                  <div className="left">
                    <div className="name">{transaction.name}</div>
                    <div className="description">{transaction.description}</div>
                  </div>
                  <div className="right">
                    <div
                      className={
                        "price " + (transaction.price < 0 ? "red" : "green")
                      }>
                      {transaction.price}
                    </div>
                    <div className="datetime">2022-12-18 15:45</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}

export default App;
