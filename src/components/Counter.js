import Button from "./Button";
import './Counter.css'
const Counter = ({ uid, value }) =>
  <div className="Counter">
    <div className="Counter_into">
      <Button
        value="-"
        onClickHandler={() => {
          alert("-" + uid);
        }}
      />
      <input
        className="Counter_input"
        defaultValue={value}
        onChange={(ev) => {
          console.log(ev.target.value);
        }}
      />
      <Button
        value="+"
        onClickHandler={() => {
          alert("+" + uid);
        }}
      />
    </div>
  </div>
export default Counter;