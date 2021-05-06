import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'
import Content from '../components/Content'
import SubmitForm from '../components/SubmitForm'
import Player from '../components/Player'
import React, { Component } from 'react';
import Side from '../components/Side'
import ReactAudioPlayer from 'react-audio-player';
import moment from 'moment';



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
      isTrackLoading: true
    };

    this.showSubmitForm = this.showSubmitForm.bind(this);
    this.hideSubmitForm = this.hideSubmitForm.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.fetchCurrentTrack = this.fetchCurrentTrack.bind(this);
    this.radioURL = "https://www.radioking.com/play/radioparadis1";
    this.currentTrackURL = "https://api.radioking.io/widget/radio/radioparadis1/track/current";
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

  fetchCurrentTrack = () => {
    fetch(this.currentTrackURL)
    .then(response => response.json())
    .then(data => {
      this.setState({ currentTrack: data })
      this.setState({ isTrackLoading: false })
      var endDate = new Date(data.end_at);
      var now = new Date();

      var millisecondsTillEnd = endDate.getTime() - now.getTime();
      this.setState({ nextFetch: millisecondsTillEnd })

      console.log("WHITH DATE")
      console.log("next fetch ", this.state.nextFetch);

      console.log("WITH MOMENT")
      let endAt = moment(data.end_at, "YYYY-MM-DDTHH:mm:ssZ").utc();
      let nowM = moment.utc();

      let timeSpan = endAt.diff(nowM);
      timeSpan = timeSpan >= 10000 ? timeSpan : 10000;

      console.log("Next fetch in: "+timeSpan+" at "+moment.utc().add(timeSpan).format()+" song finish at: "+ data.end_at);


      setTimeout(
        this.fetchCurrentTrack,
        millisecondsTillEnd,
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
                <Content isLoading={this.state.isTrackLoading} currentTrack={this.state.currentTrack} showSubmitForm={this.showSubmitForm} isPlaying={this.state.isPlaying} togglePlay={this.togglePlay} isMorning={this.state.isMorning} isDay={this.state.isDay} isNight={this.state.isNight}/>
              </div>
            </div>
            <Side />
            <Player togglePlay={this.togglePlay} isPlaying={this.state.isPlaying}/>
            <SubmitForm show={this.state.show} handleClose={this.hideSubmitForm}>
              <p>SubmitForm</p>
            </SubmitForm>
            <ReactAudioPlayer ref={(element) => { this.radioPlayer = element; }} src={this.radioURL}/>
          </section>
        </main>
      </div>
    ) 
  }
}

export default Home
