import { Link } from 'react-router-dom'
import './Aside.css'
export const Aside = () => {

    return (
        <nav id="sidebar">
            <div className='container'>
                <div className="sidebar-header">
                    <h3>YouMusic</h3>
                </div>

                <ul className="list-unstyled components">
                    <p>BUSCADOR</p>
                    <li className="active">
                        <Link href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</Link>
                    </li>
                    <li>
                        <Link href="#">About</Link>
                    </li>
                    <li>
                        <Link href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</Link>
                    </li>
                    <li>
                        <Link href="#">Portfolio</Link>
                    </li>
                    <li>
                        <Link href="#">Contact</Link>
                    </li>
                </ul>

                <ul className="list-unstyled CTAs">
                    <li>
                        <Link href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</Link>
                    </li>
                    <li>
                        <Link href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
