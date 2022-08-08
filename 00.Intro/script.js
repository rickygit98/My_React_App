// Grab Container element
const container = document.querySelector("#container");


// Make the Component
const listComponent =(<ul>
                        <li>list1</li>
                        <li>list2</li>
                    </ul>);


// Make variable for root element 
const root = ReactDOM.createRoot(container);
// Render element inside root element
root.render(listComponent);

// Or if just 1 component for 1 page
// ReactDOM.render(listComponent,container);

// ------------------------------------------------------------------------------------------
//CHALLENGE! Create a Navbar in JSX :

//  Grab Navbar element
const navbar = document.querySelector('.navbar');

// // Make the Component
const navbarComponent = (
    <div>
        <h1>Ricky First React App</h1><ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
    </div>
);

// // Make variable for root element
const navRoot = ReactDOM.createRoot(navbar);

// // Render Element inside navRoot element
navRoot.render(navbarComponent);

// // Or in 1 line
// // ReactDOM.render(<navbarComponent/>,navbar);








