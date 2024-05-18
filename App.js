import ReactDOM  from "react-dom/client";
// React Element
const h1 =  <h1> Dalwadi </h1>
const h2 =  <h1> Divyen </h1>

// React Functional Component (Arrow Function)
const App = () => {
  return(
    <div id="container">
        {h1}
        {h2}
    </div>
 );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
