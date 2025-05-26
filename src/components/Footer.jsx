import styles from './Footer.module.css';

function Footer({comp,totalTodos}) {
  return (
    <div className={styles.footer}>
        <span className={styles.item}>completedTodos :{comp}</span>
         <span className={styles.item}>TotalTodos :{totalTodos}</span>
      
    </div>
  )
}

export default Footer
