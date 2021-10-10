import React, { Component } from 'react';
import Image from 'next/image';
import { isMobile } from "react-device-detect";

class Album extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        { (this.props.isTrackLoading || !this.props.currentTrack) ?
          <Image 
            quality={40}
            src="/../../public/Album-cover-djset-min.png" 
            alt="Logo" 
            width={this.props.width} 
            height={this.props.height} 
          />
          :
          <Image
            quality={isMobile ? 60 : 75}
            src="/../../public/Album-cover-djset-min.png" 
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