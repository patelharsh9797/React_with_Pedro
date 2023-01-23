import styles from "./App.module.css";

// TODO pages
// import CRUD from "./pages/CRUD";
// import ReactRouterDOM from "./pages/ReactRouterDOM";

// TODO Components
// import JSX_Comp_Props from "./components/JSX_Comp_Props";
// import Conditional_Rendering from "./components/Conditional_Rendering";
// import Lists from "./components/Lists";
// import State from "./components/State";
// import LifeCycle from "./components/LifeCycle";
import FetchApi from "./components/FetchApi";

function App() {
  return (
    <div className={styles.App}>
      {/* JSX & Component with Props 
      <JSX_Comp_Props salary={9000} position="Senior SDE" company="Amazon" /> 
      <JSX_Comp_Props salary="0000" position="Project Manager" company="Uber" /> */}

      {/* Conditional Rendering 
      <Conditional_Rendering isGreen={true} /> */}

      {/* Working with the Lists 
      <Lists /> */}

      {/* States
      <State /> */}

      {/* CRUD in react
      <CRUD /> */}

      {/* <Skills skills={["HTML", "CSS", "JavaScript"]} /> */}

      {/* Component LifeCycle & useEffect
      <LifeCycle /> */}

      {/* Fetching Api */}
      <FetchApi />
    </div>
  );
}

// TODO Custom Component
// props = { salary, position, company, ... };
// const JOB = ({ salary, position, company, xyz }) => {
// const JOB = (props) => {
//   return (
//     <div>
//       <h1>{props.salary}</h1>
//       <h2>{props.position}</h2>
//       <h3>{props.company}</h3>
//     </div>
//   );
// };

// const Skills = (props) => (
//   <ul>
//     {props.skills.map((skill) => (
//       <li>{skill}</li>
//     ))}
//   </ul>
// );

export default App;
