import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'

const Button = ({url , label}) => {
  return (
    <Link href={url}>
        <button className={styles.container}>
        {label}
        </button>
    </Link>
  )
}

export default Button