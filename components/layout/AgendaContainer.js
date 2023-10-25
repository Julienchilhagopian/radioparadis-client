import styles from '../../styles/AgendaContainer.module.scss'
import React, { Component } from 'react';

class AgendaContainer extends Component {

  constructor() {
    super();
  }
  
  render() {
    var events = this.props.calendarEvents;
    return (
      <section>
        <div className={styles.AgendaContainer}>
          <h1>AGENDA</h1>
          <div className={styles.AgendaContainer}>
          {
            events.slice(0,5).map((day, index) => (
              <div key={index}>
                <h3 className={styles.eventsDate}>{day.date}</h3>
                {
                  day.events.map((event, index) => (
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
      </section>
    )
  }
} 


export default AgendaContainer