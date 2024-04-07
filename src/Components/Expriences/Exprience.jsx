import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Exprience.module.css'
import skills from '../../Data/Skills.json'
import history from '../../Data/History.json'

const Exprience = () => {
  return (
    <section id='experience' className={styles.container}>
    <h2 className={styles.title}>Exprience</h2>
    <div className={styles.content}>
      <div className={styles.skills}>
        {
          skills.map((skill, id) => {
            return (<div key={id} className={styles.skill} >
             <div className={styles.skillImageContainer} ><img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
             </div>
             <p>{skill.title}</p>
            </div>
            );
        }
        )}
      </div>
      <ul className={styles.history} >
    {history.map ((item, id) => {
      return (
        <li key={id} className={styles.historyItem} >
        <img src={getImageUrl(item.imageSrc)} alt={`${item.organisation} Logo`} />
          <div className={styles.historyItemDetails} >
            <h3>{`${item.role}, ${item.organisation}`}</h3>
            <p>{`${item.startDate}, ${item.endDate}`}</p>
            <ul>
              {item.experiences.map((experience, id) => {
                return 
                  <li key={id}>
                    <p>{experience}</p>
                  </li>
              })}
            </ul>

          </div>
        </li>
      );
    })} 
      </ul>
    </div>
       
    </section>
  )
}

export default Exprience
