import "./userInput.css";
const UserInput = () => {
  return (
    <div className="form">
      <div className="form__name">
        <label>Username</label>
        <input type="text" />
      </div>
      <div className="form__age">
        <label>Age (Years)</label>
        <input type="number" min={1} step={1} />
      </div>
      <button>Add User</button>
    </div>
  );
};
export default UserInput;
