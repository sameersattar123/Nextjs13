import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.para}>©2023 Lamamia. All rights reserved.</div>
      <div className={styles.social}>
      <Image className={styles.icon} width={15} height={15} src="/1 (1).png" alt=''/>
      <Image className={styles.icon} width={15} height={15} src="/2 (1).png" alt=''/>
      <Image className={styles.icon} width={15} height={15} src="/3 (1).png" alt=''/>
      <Image className={styles.icon} width={15} height={15} src="/4 (1).png" alt=''/>
      </div>
    </div>
  )
}

export default Footer