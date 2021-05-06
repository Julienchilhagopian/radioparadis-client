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
      isNight: false, 
      currentTrack: {},
      history: {}, 
      nextFetch: 0, 
      isTrackLoading: true,
      isHistoryLoading: true
    };

    this.showSubmitForm = this.showSubmitForm.bind(this);
    this.hideSubmitForm = this.hideSubmitForm.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.fetchCurrentTrack = this.fetchCurrentTrack.bind(this);
    this.fetchTrackHistory = this.fetchTrackHistory.bind(this);
    this.radioURL = "https://www.radioking.com/play/radioparadis1";
    this.currentTrackURL = "https://api.radioking.io/widget/radio/radioparadis1/track/current";
    this.trackHistoryURL = "https://api.radioking.io/widget/radio/radioparadis1/track/ckoi?limit=4";
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
          console.log("Player error", e);
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
    this.setState({ isTrackLoading: true });
    let time = this.getTime();
    this.updateTime(time);

    window.setInterval(function () {
      time = this.getTime();
      this.updateTime(time)
    }.bind(this), 5000);

    
    this.setState({isPlaying: false});
    this.radioPlayer.audioEl.current.pause();

    this.fetchCurrentTrack();
 }

  componentWillUnmount() {
    clearInterval(window);
  }


  getTimeSpan = (currentSongEnd) => {
    var endDate = new Date(currentSongEnd);
    var now = new Date();

    var millisecondsTillEnd = endDate.getTime() - now.getTime();

    return millisecondsTillEnd;
  }

  fetchCurrentTrack = () => {
    fetch(this.currentTrackURL)
    .then(response => response.json())
    .then(data => {
      this.setState({ currentTrack: data })
      this.setState({ isTrackLoading: false })

      let nextFetch = this.getTimeSpan(data.end_at);
      console.log("NEXT FETCH ", nextFetch);

      // Fetching song history
      this.fetchTrackHistory();

      setTimeout(
        this.fetchCurrentTrack,
        nextFetch
      )
    })
    .catch(error => {
      console.log("error fetching current song", error)
      this.setState({ currentTrack: null })

        setTimeout(
          this.fetchCurrentTrack,
          10000
        )
    });
  }

  fetchTrackHistory = () => {
    fetch(this.trackHistoryURL)
    .then(response => response.json())
    .then(data => {
      this.setState({ history: data })
      this.setState({ isHistoryLoading: false })
    })
    .catch(error => {
      console.log("error fetching history", error)
      this.setState({ currentTrack: null })

        setTimeout(
          this.fetchTrackHistory,
          10000
        )
    });
  }

  render(){
    return (
      <div>
        <Head>
          <title>Radio Paradis</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <ReactAudioPlayer ref={(element) => { this.radioPlayer = element; }} src={this.radioURL}/>
          <section className={styles.home}>
            <div className={styles.frame}>
              <div className={styles.frameContent}>
                <Header isMorning={this.state.isMorning} isDay={this.state.isDay} isNight={this.state.isNight}/>
                <Content isTrackLoading={this.state.isTrackLoading} currentTrack={this.state.currentTrack} showSubmitForm={this.showSubmitForm} isPlaying={this.state.isPlaying} togglePlay={this.togglePlay} isMorning={this.state.isMorning} isDay={this.state.isDay} isNight={this.state.isNight}/>
              </div>
            </div>
            <Side history={this.state.history} isHistoryLoading={this.state.isHistoryLoading}/>
            <Player togglePlay={this.togglePlay} isPlaying={this.state.isPlaying}/>
            <SubmitForm show={this.state.show} handleClose={this.hideSubmitForm}>
              <p>SubmitForm</p>
            </SubmitForm>
          </section>
        </main>
      </div>
    ) 
  }
}

export default Home
