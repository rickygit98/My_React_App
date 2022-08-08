import React from "react";
// import card-components
import CardHeader from "./card-components/CardHeader";
import CardMain from "./card-components/CardMain";
import CardFooter from "./card-components/CardFooter";

// FontAwesomeIcon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function App() {
  return (
    <div className="card-container">
      <CardHeader />
      <CardMain />
      <CardFooter />
    </div>
  );
}
