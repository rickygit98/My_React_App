const root = document.getElementById('root')
const page = (
    <div>
        <img src="./react-logo.png" alt="react-logo" width="40px" />
        <h1>Fun Fact About React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is Maintained by Facebook</li>
            <li>Power thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
);

ReactDOM.render(page,root);