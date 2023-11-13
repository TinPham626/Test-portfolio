import React from 'react'
import styles from './Frame.module.css'

export default function Frame({src, alt, header, text}) {
  return (
    <section className={styles.section}>
        <img src={src} alt={alt} />
        <div className={styles.text}>
            <h1>{header}</h1>
            <p>{text}</p>
        </div>
    </section>
  )
}
