import styles from '@/styles/componentsCSS/sidebar.module.css';
export default function SideBarItem({ name }: { name: string }) {
  return <li className={styles.sideBarStyle}> {name}</li>;
}
