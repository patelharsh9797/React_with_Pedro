import styles from "./App.module.css";

// TODO Components
import JSX_Comp_Props from "./components/JSX_Comp_Props";
import Conditional_Rendering from "./components/Conditional_Rendering";
import Lists from "./components/Lists";

function App() {
  return (
    <div className={styles.App}>
      {/* JSX & Component with Props 
      <JSX_Comp_Props salary={9000} position="Senior SDE" company="Amazon" /> 
      <JSX_Comp_Props salary="0000" position="Project Manager" company="Uber" /> */}

      {/* Conditional Rendering 
      <Conditional_Rendering isGreen={true} /> */}

      {/* Working with the Lists */}
      <Lists />
    </div>
  );
}

// TODO Custom Component
// const JOB = ({ salary, position, company, xyz }) => {
const JOB = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h2>{props.position}</h2>
      <h3>{props.company}</h3>
    </div>
  );
};

export default App;
