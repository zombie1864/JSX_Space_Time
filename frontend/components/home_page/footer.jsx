import React from 'react'; 

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="footer-field">
                <ul className="footer-ul">
                    <li className="">
                    <a 
                        href="https://zombie1864.github.io/" target = '_blank'
                            className = 'footer-link'>
                        Portfolio Site
                    </a>
                    </li>
                </ul>
                <ul className="footer-ul">
                    <li className="">
                    <a
                        href="https://www.linkedin.com/in/jeff-varela-a3194692/" target = '_blank'
                            className = 'footer-link'
                    >
                        LinkedIn
                    </a>
                    </li>
                </ul>
                <ul className="footer-ul">
                    <li className="">
                    <a href="https://angel.co/u/jeff-varela" target = '_blank'
                        className = 'footer-link'>
                        AngelList
                    </a>
                    </li>
                </ul>
                <ul className="footer-ul">
                    <li className="">
                    <a href="https://github.com/zombie1864" target = '_blank'
                        className = 'footer-link'>
                        Github
                    </a>
                    </li>
                </ul>
                <aside className="footer-ul">© 2020 JSX Space Time</aside>
                </footer>
            </div>
        )
    }
}

export default Footer