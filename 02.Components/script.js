

// Make Header Component
function Header(){
    return (
            <header className = 'header'>
                <nav className='navbar'>
                <img src="./react-logo.png" alt="react-logo" className='nav-logo' />
                    <strong>
                    <ul className='nav-items'>
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    </strong>
                </nav>
            </header>
            );
}

// Make Main Component
function Main(){
    return (
        <div className='main'>
            <h1>Reasons I'm excited to learn React</h1>
            <ul>
                <li>It's popular library, so I'll be able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer if I know React</li>
            </ul>
        </div>
        );
}

// Make Footer Component
function Footer(){
    return(
    <footer className = 'footer'>
    &#169; 2022 Yohanes development. All right reserved.
    </footer>
    );
}

// Make Page (Main) Component
function Page(){
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}
// Render Page to index.html
const page = document.querySelector('#root');

ReactDOM.render(<Page/>,page);