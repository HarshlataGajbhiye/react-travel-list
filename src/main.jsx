import ReactDom from "react-dom/client";
import App from "./App";
const rootEl = document.querySelector("#root");
const root = ReactDom.createRoot(rootEl);

root.render(<App />);
