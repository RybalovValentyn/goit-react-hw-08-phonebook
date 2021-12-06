import { Link } from "react-router-dom"
import s from './navigation.module.css'

export default function Navigation() {
    return (
        <nav className={s.navList}>
        <ul className={s.leftMenu}>
          <li className={s.listItem}>
            <Link className={s.linkItem} to='/'> home
            </Link>
          </li>
          <li className={s.listItem}>
            <Link className={s.linkItem} to='/contacts'> Contacts
            </Link>
          </li>
          </ul>
          <ul className={s.rightMenu}>
          <li className={s.listItem}>
            <Link className={s.linkItem} to='/login'> login
            </Link>
          </li>
          <li className={s.listItem}>
            <Link className={s.linkItem} to='/register'>register
            </Link>
          </li>
          
            {/* {isAuth &&<li> <button type="button" onClick={onhandleClick}>Log Out</button></li>} */}
          
        </ul>
      </nav>
    )
}