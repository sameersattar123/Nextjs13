import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/Button/Button'

const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
          src="/contact.png"
          className={styles.image}
          fill={true}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='name' className={styles.input} />
          <input type="text" placeholder='email' className={styles.input} />
          <textarea
          rows="10"
          cols="30"
          className={styles.textArea}
          placeholder='message'
          />
          <Button
          url="#"
          label="Send"
          />
        </form>
      </div>
    </div>
  )
}

export default page