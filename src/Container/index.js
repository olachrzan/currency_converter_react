import "./style.css";
import Clock from "../Clock";


const Container = ({ children }) => (
   <div className="container">
			<Clock />
      {children}
   </div>
);

export default Container;