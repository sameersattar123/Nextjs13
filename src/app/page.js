import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Hero from "../../public/Hero (2).png"
import Button from '@/components/Button/Button'

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}> Better design for your digital products.</h1>
        <p className={styles.desc}>Turning your Idea into Reality. We bring together the teams from the
          global tech industry.</p>
          <Button label="See Our Work" url="/portfolio" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='' className={styles.img} />
      </div>
    </div>
  )
}

export default page