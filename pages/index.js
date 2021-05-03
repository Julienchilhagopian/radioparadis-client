import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'
import Content from '../components/Content'
import SubmitForm from '../components/SubmitForm'
import Player from '../components/Player'
import React, { Component } from 'react';
import Side from '../components/Side'
import ReactAudioPlayer from 'react-audio-player';


class Home extends Component {

  constructor() {
    super();
    this.state = {
      show: false, 
      isPlaying: false, 
      isMorning: false, 
      isDay: false, 
      isNight: false
    };

    this.showSubmitForm = this.showSubmitForm.bind(this);
    this.hideSubmitForm = this.hideSubmitForm.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
  }

  showSubmitForm = (e) => {
    this.setState({ show: true });
  };

  hideSubmitForm = (e) => {
    this.setState({ show: false });
  };

  togglePlay = () => {
    if(this.state.isPlaying) {
      this.radioPlayer.audioEl.current.pause();
    } else {
      try {
          this.radioPlayer.audioEl.current.play();
      } catch (e) {
          console.log(e);
      }
    }

    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying
    }));
  }


  getTime() {
    return new Date();
  }

  updateTime(time) {
    if(time.getHours() >= 7 && time.getHours() < 10) {
      this.setState({
        isMorning: true, 
        isDay: false, 
        isNight: false
      });
   } else if (time.getHours() >= 10 && time.getHours() < 19) {
      this.setState({
        isMorning: false, 
        isDay: true, 
        isNight: false
      });
   } else {
      this.setState({
        isMorning: false, 
        isDay: false, 
        isNight: true
      });
   }
  }

  componentDidMount(){
    let time = this.getTime();
    this.updateTime(time);

    window.setInterval(function () {
      time = this.getTime();
      this.updateTime(time)
    }.bind(this), 5000);

    this.radioPlayer.audioEl.current.addEventListener('error', (e) => {
      this.setState({isPlaying: false});
      this.radioPlayer.audioEl.current.pause();
    });

    console.log("MOUNT")
    console.log("Audio player", this.radioPlayer.audioEl);
 }

  componentWillUnmount() {
    clearInterval(window);
  }

  render(){
    return (
      <div>
        <Head>
          <title>Radio Paradis</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <section className={styles.home}>
            <div className={styles.frame}>
              <div className={styles.frameContent}>
                <Header isMorning={this.state.isMorning} isDay={this.state.isDay} isNight={this.state.isNight}/>
                <Content showSubmitForm={this.showSubmitForm} isPlaying={this.state.isPlaying} togglePlay={this.togglePlay} isMorning={this.state.isMorning} isDay={this.state.isDay} isNight={this.state.isNight}/>
              </div>
            </div>
            <Player togglePlay={this.togglePlay} isPlaying={this.state.isPlaying}/>
            <SubmitForm show={this.state.show} handleClose={this.hideSubmitForm}>
              <p>SubmitForm</p>
            </SubmitForm>
            <ReactAudioPlayer ref={(element) => { this.radioPlayer = element; }} src="https://www.radioking.com/play/radioparadis-test"/>
          </section>
        </main>
      </div>
    )
  }
}

export default Home
