import React, { Component } from 'react';
import Image from 'next/image'

class Album extends Component {

  constructor() {
    super();
  }

  render() {
    return (
        <div>
            { (this.props.isTrackLoading || !this.props.currentTrack) ? 
                  <Image src="/../public/logo-day.png" alt="Logo" width={this.props.width} height={this.props.height}/>
                :
                  <Image 
                    src={this.props.currentTrack.cover} 
                    alt="Album cover" 
                    width={this.props.width} 
                    height={this.props.height}
                  /> 
            }
        </div>
    )
  }
} 


export default Album