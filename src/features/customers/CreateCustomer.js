import { useState } from "react";
import { create } from "./customerSlice";
import { useDispatch, useSelector } from "react-redux";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useDispatch();
  const {
    fullName: userName,
    nationalId: natId,
    createdAt,
  } = useSelector((store) => store.customer);

  function handleClick() {
    if (!fullName || !nationalId) return;
    dispatch(create(fullName, nationalId));

    setFullName("");
    setNationalId("");
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={userName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={natId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
