import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'
import Content from '../components/Content'
import SubmitForm from '../components/SubmitForm'
import MobilePlayer from '../components/MobilePlayer'
import React, { Component } from 'react';
import Side from '../components/Side'
import ReactAudioPlayer from 'react-audio-player';
import ColorThief from "colorthief";
import { isMobile } from "react-device-detect";
import Footer from '../components/Footer'

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
      isHistoryLoading: true,
      principalColor: '#cecece', 
      secondaryColor: '#cecece8c', 
      mobileColor: '#cecece', 
      frameColor: ''
    };

    this.showSubmitForm = this.showSubmitForm.bind(this);
    this.hideSubmitForm = this.hideSubmitForm.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.fetchCurrentTrack = this.fetchCurrentTrack.bind(this);
    this.fetchTrackHistory = this.fetchTrackHistory.bind(this);
    this.fetchColor = this.fetchColor.bind(this);
    this.radioURL = "https://www.radioking.com/play/paradis-test";
    this.currentTrackURL = "https://api.radioking.io/widget/radio/paradis-test/track/current";
    this.trackHistoryURL = "https://api.radioking.io/widget/radio/paradis-test/track/ckoi?limit=6";
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
          this.radioPlayer.audioEl.current.load();
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
    this.fetchTrackHistory();
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

      if(nextFetch > 0) {
        // Fetching colors 
        this.fetchColor(data.cover);
      }

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
  
      console.log('history fetch', this.state.history);
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

  getColor = (colors) => {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    while(
      (randomColor[0] > 200 && randomColor[1] > 200 && randomColor[2] > 200)
      || (randomColor[0] < 100 && randomColor[1] < 100 && randomColor[2] < 100)
      ) {
      console.log("Colorformat loop");
      randomColor = colors[Math.floor(Math.random() * colors.length)];
    }

    return randomColor;
  }

  fetchColor = (imgUrl) => {
    const colorThief = new ColorThief();
    const img = new Image();

    img.addEventListener('load', () => {
      const colors = colorThief.getPalette(img, 5);
      let randomColor = this.getColor(colors);

      this.setState({ principalColor: `rgb(${randomColor[0]} ${randomColor[1]} ${randomColor[2]} / 0.85)`})
      this.setState({ secondaryColor: `rgb(${randomColor[0]} ${randomColor[1]} ${randomColor[2]} / 0.20)`})
      this.setState({ mobileColor: `rgb(${randomColor[0]} ${randomColor[1]} ${randomColor[2]})`})

      console.log("principal color", this.state.principalColor)
      console.log("secondary color", this.state.secondaryColor)

      this.updateFrameColor();
    });

    img.crossOrigin = 'Anonymous';
    img.src = imgUrl;
  }

  updateFrameColor = () => {
    this.setState({frameColor: isMobile ? 'white' : this.state.principalColor})
  }

  render(){
    const frameColor = {
      "backgroundColor": this.state.frameColor,
    };

    return (
      <div>
        <Head>
          <title>Radio Paradis</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <ReactAudioPlayer ref={(element) => { this.radioPlayer = element; }} src={this.radioURL} preload={'none'}/>
          <section className={styles.home}>
            <div className={styles.frame} style={frameColor}>
              <div className={styles.frameContent}>
                <Header isMorning={this.state.isMorning} isDay={this.state.isDay} isNight={this.state.isNight}/>
                <Content 
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
                  />
              </div>
            </div>
            <Side 
              isPlaying={this.state.isPlaying} 
              principalColor={this.state.principalColor} 
              history={this.state.history} 
              isHistoryLoading={this.state.isHistoryLoading}
              isMorning={this.state.isMorning} 
              isDay={this.state.isDay} 
              isNight={this.state.isNight}
            />
            <Footer />
            <div className={styles.mobileFitter}></div>
            <MobilePlayer  
              mobileColor={this.state.mobileColor} 
              currentTrack={this.state.currentTrack} 
              togglePlay={this.togglePlay} 
              isPlaying={this.state.isPlaying}
              />
            <SubmitForm 
              principalColor={this.state.principalColor}  
              show={this.state.show} 
              handleClose={this.hideSubmitForm}>
            </SubmitForm>
          </section>
        </main>
      </div>
    ) 
  }
}

export default Home
