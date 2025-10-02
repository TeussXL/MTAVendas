import styles from "./Header.module.css";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <span className={styles.logo1}>M</span>
          <span className={styles.logo2}>T</span>
          <span className={styles.logo3}>A</span>
        </Link>
      </div>

      <div className={styles.searchBar}>
        <input type="text" placeholder="Buscar produtos..." />
        <div className={styles.location}>
          <button className={styles.searchBtn}>
            <FaSearch size={20} />
          </button>
        </div>
      </div>

      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href='/signin' className={styles.loginBtn}>
              Login
            </Link>
          </li>
          <li>
            <Link href='/' className={styles.anunciarBtn}>
              Anunciar gratis
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
