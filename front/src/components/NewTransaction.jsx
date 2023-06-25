import React, { useState } from "react";
import transactionsService from "../services/transactionsService";

const NewTransaction = ({ getData }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const setInfo = (e) => {
    e.preventDefault();

    const newTransaction = {
      text: text,
      amount: amount,
      user: "649885765085d5a7966ed0bb",
    };
    transactionsService.setTransaction(newTransaction);

    setText("");
    setAmount("");
    getData();
  };
  return (
    <form onSubmit={setInfo}>
      <div>
        <label htmlFor="text">Pajamu / islaidu aprasymas</label>
        <input
          style={{ margin: "5px" }}
          placeholder="Iveskite pavadinima"
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="amount">Suma</label>
        <input
          style={{ margin: "5px" }}
          placeholder="Iveskite suma"
          type="text"
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button>Patvirtinti</button>
    </form>
  );
};

export default NewTransaction;
