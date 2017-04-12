import NProgress from 'nprogress'
import Router from 'next/router'
import Link from 'next/link'
import Meta from './Meta'
import GlobalStyles from './GlobalStyles'
import { logout } from '../lib/authenticate'

Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeComplete = url => {
  NProgress.done()
}

Router.onRouteChangeError = () => {
  NProgress.done()
}

export default props => (
  <header>
    <Meta title={props.title} />
    <GlobalStyles />
    <nav>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/private'>
            <a>Private Page</a>
          </Link>
        </li>
        {props.user
          ? <li>
            <button onClick={() => logout()}>LogOut</button>
          </li>
          : <li>
            <Link href='/login'>
              <a>Login</a>
            </Link>
          </li>}
      </ul>
    </nav>
    <style jsx>
      {
        `
      header {
        height: 75px;
        width: 100%;
        display: flex;
        align-items: center;
      }
      nav {
        width: 100%;
        padding: 0 5px;
      }
      nav ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
      }
      nav ul li {
        margin: 0 20px;
      }
      nav ul li a {
        display: block;
        text-decoration: none;
        color: #444;
        font-weight: bold;
        cursor: pointer;
      }
      nav ul li a:hover {
        color: #ccc;
      }
      button {
        background: none;
        border: 2px solid;
        border-radius: 7px;
        outline: none;
        font-size: 16px;
        color: orange;
        cursor: pointer;
        margin: 0 10px;
        padding: 8px 10px;
      }
      button:hover {
        color: red;
      }
      @media(max-width: 580px) {
        nav ul li {
          margin: 0 15px;
        }
      }
      @media(max-width: 330px) {
        nav ul li {
          margin: 0 10px;
        }
      }
      `
      }
    </style>
  </header>
)
