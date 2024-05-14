const h1 = React.createElement("h1", { id: "title1" }, "Dalwadi Divyen"); // react Element
// console.log(h1);  // // react Element is Nothing But the Object 
const h2 = React.createElement("h2", { id: "title2" }, "Divyen Dalwadi")
const container = React.createElement("div", { id: "container" }, [h1, h2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
