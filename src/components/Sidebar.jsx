import { PencilLine } from '@phosphor-icons/react'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Profile cover"
        className={styles.cover}
      />

      <div className={styles.profile}>
        <img src="https://github.com/ddanielcruz.png" alt="Daniel Cruz" />

        <strong>Daniel Cruz</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          <span>Editar seu perfil</span>
        </a>
      </footer>
    </aside>
  )
}
