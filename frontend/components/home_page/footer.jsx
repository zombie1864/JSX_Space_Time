import React from 'react'; 

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="">
                <ul className="">
                    <li className="">
                    <a 
                        href="https://zombie1864.github.io/">
                        Portfolio Site
                    </a>
                    </li>
                </ul>
                <ul className="">
                    <li className="">
                    <a
                        href="https://www.linkedin.com/in/jeff-varela-a3194692/"
                    >
                        LinkedIn
                    </a>
                    </li>
                </ul>
                <ul className="">
                    <li className="">
                    <a href="">
                        Angellist
                    </a>
                    </li>
                </ul>
                <ul className="">
                    <li className="">
                    <a href="https://github.com/zombie1864">
                        Github
                    </a>
                    </li>
                </ul>
                <aside className="">© 2020 JSX Space Time</aside>
                </footer>
            </div>
        )
    }
}

export default Footer