import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Header from '../components/Header'
import Content from '../components/Content'
import SubmitForm from '../components/SubmitForm'
import Player from '../components/Player'
import React, { Component } from 'react';


class Home extends Component {

  constructor() {
    super();
    this.state = {
      show: false
    };

    this.showSubmitForm = this.showSubmitForm.bind(this);
    this.hideSubmitForm = this.hideSubmitForm.bind(this);
  }

  showSubmitForm = () => {
    this.setState({ show: true });
  };

  hideSubmitForm = () => {
    this.setState({ show: false });
  };

  render(){
    return (
      <div>
        <Head>
          <title>Radio Paradis</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Header showSubmitForm={this.showSubmitForm}/>
          <Player />
          <Content />
          <SubmitForm show={this.state.show} handleClose={this.hideSubmitForm}>
            <p>SubmitForm</p>
          </SubmitForm>
        </main>
      </div>
    )
  }
}

export default Home
