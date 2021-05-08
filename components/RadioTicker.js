import styles from '../styles/RadioTicker.module.scss'
import React, { Component } from 'react';
import Ticker from 'react-ticker'

class RadioTicker extends Component {

  constructor() {
    super();

    // this.state = {
    //   track: {}
    // } 
  }

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.currentTrack) {
  //     this.setState({track: nextProps.currentTrack})
  //     console.log("NEXT PROPS", this.state.track);
  //   }
  // }
  
  render() {

    return (
      <div className={styles.tickerContainer}>
        <Ticker mode="await">
          {() => (
            <>
              <h2>{this.props.artist} - {this.props.title}</h2>
            </> 
          )}
        </Ticker>
      </div>
    )
  }
} 


export default RadioTicker