import SideBarItem from "./SideBarItem";
import styles from '@/styles/componentsCSS/sidebar.module.css';
import Image from 'next/image';


export default function Sidebar() {
  const items = ["Talent Track", "Profile", "Hiring", "People Engagement", "Wallet", "Help", "Log out","Admin Panel"];
  return (
    <>
    <nav className={styles.nav}>
    <div className={styles.logo}>
      <Image src="/logoHome.png" alt="blueLogo" fill></Image>
      </div>
      
    </nav>
      <div className={styles.sidebarContainer}>
      {<ul className={styles.ul} style={{"padding":"5% 8%"}}>
        {items.map((item) => (
          <SideBarItem name={item}/>
        ))}
      </ul> }
    </div>
    </>
  );
}
