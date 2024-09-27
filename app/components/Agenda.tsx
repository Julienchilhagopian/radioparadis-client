'use client'

import React from "react";
import styles from '../styles/agenda.module.scss';
import { useEffect, useState } from "react"
import { getAgenda } from '../lib/actions/agenda'

function Agenda() {
  let [events, setEvents] = useState([]);

  useEffect(() => {
    getAgenda()
      .then((data: any) => {
        setEvents(data);
      })
  }, []);


  return (
    <div>
      <p>Agenda</p>
      <div className={styles.agendaData}>
        {(!events.length) ?
          <h3>...chargement de l'agenda...</h3>
          :
          events.slice(0, 5).map((day: any, index: number) => (
            <div key={index} className={styles.eventsDate}>
              <h3>{day.date}</h3>
              {
                day.events.map((event: any, index: number) => (
                  <div className={styles.agendaEvent} key={index}>
                    <p>{event.cleanTime}</p>
                    <h2>{event.title}</h2>
                    <p>{event.description}</p>
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Agenda
