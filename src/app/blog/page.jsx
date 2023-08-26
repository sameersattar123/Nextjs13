import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <div className={styles.mainContainer}>
      <Link  href="/blog/text1" className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
        src="/websites.jpg"
        width="400"
        height="250"
        alt='photo'
        className={styles.image}
        />
      </div>
        <div className={styles.content}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>desc</p>
        </div>
      </Link>
      <Link  href="/blog/text1" className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
        src="/websites.jpg"
        width="400"
        height="250"
        alt='photo'
        className={styles.image}
        />
      </div>
        <div className={styles.content}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>desc</p>
        </div>
      </Link>
      <Link  href="/blog/text1" className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
        src="/websites.jpg"
        width="400"
        height="250"
        alt='photo'
        className={styles.image}
        />
      </div>
        <div className={styles.content}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>desc</p>
        </div>
      </Link>
    </div>
  )
}

export default page