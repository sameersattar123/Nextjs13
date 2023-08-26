import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem, ipsum dolor sit amet </h1>
          <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim sit neque inventore eum voluptate! Itaque minima aperiam atque obcaecati adipisci iure suscipit? Quod, quae eaque rerum facere ipsa eveniet officia?</p>   
          <div className={styles.author}>
            <Image
            src="/websites.jpg"
            alt=''
            className={styles.avatar}
            width={40}
            height={40}
            />
            <span className={styles.username}>Sameer Sattar</span>
            </div>  
        </div>
        <div className={styles.imageContainer}>
          <Image
          src="/websites.jpg"
          fill={true}
          className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusamus quidem ad illum tenetur! Aperiam, est illo maiores soluta cupiditate omnis dolorum eos sunt assumenda, accusantium esse at repellendus tenetur.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati temporibus vel facere fugiat, praesentium provident voluptates, laboriosam beatae vero nihil quis? Praesentium, voluptatibus! Iusto fugit, voluptate quasi sed aperiam doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sit, totam doloremque itaque perferendis natus dignissimos dicta repellendus tempore voluptatum, culpa minima, eius ab voluptas illum. Eos itaque aut laboriosam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni tenetur assumenda obcaecati maxime quaerat. Possimus sapiente exercitationem tenetur atque corporis blanditiis reprehenderit fugiat fuga iste quo. Unde consequatur sunt odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, cumque numquam sint autem voluptas dolore delectus id enim aliquam doloribus maxime velit nam quam, consequatur inventore? Illum consequatur rerum repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni qui cum incidunt quaerat ipsum exercitationem omnis neque laudantium, cupiditate nihil soluta fugiat est laborum recusandae consectetur dolorum unde eveniet.</p>
      </div>
    </div>
  )
}

export default page