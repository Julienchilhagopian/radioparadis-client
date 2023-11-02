import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import MobileHeader from '../components/layout/MobileHeader'
import DesktopHeader from '../components/layout/DesktopHeader'
import SubmitForm from '../components/form/SubmitForm'
import MobilePlayer from '../components/player/MobilePlayer'
import React, { Component } from 'react';
import ShowsContainer from '../components/layout/ShowsContainer'
import ReactAudioPlayer from 'react-audio-player';
import { isMobile } from "react-device-detect";
import Footer from '../components/layout/Footer';
import EventModal from '../components/elements/EventModal';
import { message } from 'antd';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
      isPlaying: false,
      isMorning: false,
      isDay: false,
      isNight: false,
      isSunday: false,
      currentTrack: {
        artist: ""
      },
      history: {},
      calendarEvents: [],
      isTrackLoading: true,
      isHistoryLoading: true,
      principalColor: '#d1bdd9',
      secondaryColor: '#cecece8c',
      mobileColor: 'white',
      volume: 1,
      loading: false,
      isModalOpen: false
    };

    this.showSubmitForm = this.showSubmitForm.bind(this);
    this.hideSubmitForm = this.hideSubmitForm.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.fetchCurrentTrack = this.fetchCurrentTrack.bind(this);
    this.fetchTrackHistory = this.fetchTrackHistory.bind(this);
    this.fetchCalendarEvents = this.fetchCalendarEvents.bind(this);
    this.radioURL = "https://c28.radioboss.fm:8436/stream";
    this.currentTrackURL = "https://c28.radioboss.fm/w/nowplayinginfo?u=436";
    this.trackHistoryURL = "https://c28.radioboss.fm/w/recenttrackslist?u=436";
    this.faviconURL = "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/logo-night.ico";
  }

  showSubmitForm = (e) => {
    this.setState({ show: true });
  };

  hideSubmitForm = (e) => {
    this.setState({ show: false });
  };

  togglePlay = () => {
    if (this.state.isPlaying) {
      this.radioPlayer.audioEl.current.pause();
    } else {
      try {
        this.showLoader()
        this.radioPlayer.audioEl.current.load();
        this.radioPlayer.audioEl.current.play();

      } catch (e) {
        this.errorMsg();
        console.log("Player error", e);
      }
    }

    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying
    }));
  }

  showLoader = () => {
    this.setState({ loading: true });
  }

  hideLoader = () => {
    this.setState({ loading: false });
  }

  errorMsg = () => {
    message.error({
      content: 'Mmmm la musique ne marche plus. On fait le maximum !',
      className: 'popupMsg'
    });
  };

  getTime() {
    return new Date();
  }

  updateTime(time) {
    if (time.getHours() >= 7 && time.getHours() < 10) {
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
    } else if (time.getHours() >= 19 && time.getHours() < 23) {
      this.setState({
        isMorning: false,
        isDay: false,
        isNight: true
      });
    } else if (time.getHours() == 23 && time.getMinutes() < 59) {
      this.setState({
        isMorning: false,
        isDay: false,
        isNight: true
      });
    } else {
      this.setState({
        isMorning: false,
        isDay: false,
        isNight: false
      });
    }


    if (time.getDay() == 0) {
      this.setState({
        isSunday: true
      });
    } else {
      this.setState({
        isSunday: false
      });
    }
  }

  componentDidMount() {
    this.setState({ isTrackLoading: true });
    let time = this.getTime();
    this.updateTime(time);

    window.setInterval(function () {
      time = this.getTime();
      this.updateTime(time)
    }.bind(this), 5000);


    this.setState({ isPlaying: false });
    this.radioPlayer.audioEl.current.pause();

    this.fetchCurrentTrack();
    this.fetchTrackHistory();
    this.fetchCalendarEvents();
    this.showModal();
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
      .then(response => {
        let res = response && response.json() || {};
        return res;
      })
      .then(data => {

        let currentTrackData = {
          artist: data.nowplaying,
        }

        let prevArtist;
        if (this.state.currentTrack) {
          prevArtist = this.state.currentTrack.artist
        } else {
          prevArtist = ""
        }

        this.setState({ currentTrack: currentTrackData });
        this.setState({ isTrackLoading: false });

        console.log("current song", this.state.currentTrack);
        setTimeout(
          this.fetchCurrentTrack,
          30000
        )
      })
      .catch(error => {
        console.log("error fetching current song", error)
        this.setState({ currentTrack: null })

        setTimeout(
          this.fetchCurrentTrack,
          60000
        )
      });
  }

  fetchTrackHistory = () => {
    fetch(this.trackHistoryURL)
      .then(response => response.json())
      .then(data => {
        this.setState({ history: data })
        this.setState({ isHistoryLoading: false })

        setTimeout(
          this.fetchTrackHistory,
          240000
        )
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

  fetchCalendarEvents = () => {
    fetch('/api/calendar-events')
      .then(response => response.json())
      .then(data => {
        this.setState({calendarEvents: data})
      })
      .catch(error => {
        console.log("error fetching google calendar events", error)
        this.setState({ calendarEvents: [] })
      });
  }

  onVolumeChange = (value) => {
    this.setState({ volume: (value / 100) })
  };

  showModal = () => {
    this.setState({ isModalOpen: true })
  };
  hideModal = () => {
    this.setState({ isModalOpen: false })
  };

  render() {
    return (
      <div>
        <Head>
          <title>Radio Paradis</title>
          <link rel="icon" href={this.faviconURL} />
          <meta name="description" content="RADIO PARADIS - 10ème arrondissement - Paris - Radio de quartier" />
          <meta property="og:title" content="Radio Paradis" />
          <meta property="og:description" content="RADIO PARADIS - 10ème arrondissement - Paris - Radio de quartier" />
          <meta property="og:url" content="https://www.radioparadis.live/" />
          <meta property="og:type" content="website" />
        </Head>

        <main className={styles.main}>
          <ReactAudioPlayer
            ref={(element) => {
              this.radioPlayer = element;
              if (this.radioPlayer) {
                this.radioPlayer.audioEl.current.volume = this.state.volume;
              }
            }}
            src={this.radioURL}
            preload={'auto'}
            onCanPlay={this.hideLoader}
          />
          <section className={styles.home}>
            <div className={styles.frameContent}>
              <MobileHeader
                isMorning={this.state.isMorning}
                isDay={this.state.isDay}
                isNight={this.state.isNight}
                isSunday={this.state.isSunday}
                isPlaying={this.state.isPlaying}
              />
              <DesktopHeader
                principalColor={this.state.principalColor}
                secondaryColor={this.state.secondaryColor}
                isTrackLoading={this.state.isTrackLoading}
                currentTrack={this.state.currentTrack}
                showSubmitForm={this.showSubmitForm}
                isPlaying={this.state.isPlaying}
                togglePlay={this.togglePlay}
                isMorning={this.state.isMorning}
                isDay={this.state.isDay}
                isNight={this.state.isNight}
                onVolumeChange={this.onVolumeChange}
                loading={this.state.loading}
              />
            </div>
            <ShowsContainer
              isMobile={isMobile}
              isPlaying={this.state.isPlaying}
              principalColor={this.state.principalColor}
              history={this.state.history}
              isHistoryLoading={this.state.isHistoryLoading}
              isMorning={this.state.isMorning}
              isDay={this.state.isDay}
              isNight={this.state.isNight}
              calendarEvents={this.state.calendarEvents}
            />
            <Footer />
            <div className={styles.mobileFitter}></div>
            <MobilePlayer
              mobileColor={this.state.mobileColor}
              currentTrack={this.state.currentTrack}
              togglePlay={this.togglePlay}
              isPlaying={this.state.isPlaying}
              loading={this.state.loading}
              isMorning={this.state.isMorning}
              isDay={this.state.isDay}
              isNight={this.state.isNight}
            />
            <SubmitForm
              principalColor={this.state.principalColor}
              show={this.state.show}
              handleClose={this.hideSubmitForm}>
            </SubmitForm>
            <EventModal 
              show={this.state.isModalOpen}
              handleModalClose={this.hideModal}>
            </EventModal>
          </section>
        </main>
      </div>
    )
  }
}

export default Home
