'use client'

import React from "react";
import styles from '../../styles/playerContent.module.scss';
import useSWR from "swr";
import TextTicker from "../TextTicker"

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)
  return res.json()
}

export type Track = {
  nowplaying: string
}

function PlayerContent() {
  const currentTrack_url = "https://c28.radioboss.fm/w/nowplayinginfo?u=436";
  const { data, error, isLoading } = useSWR<Track>(currentTrack_url, fetcher);

  if (error) return <p>Error loading data</p>;
  if (isLoading || !data) return <div>loading...</div>;

  return (
    <div className={styles.playerContent}>
      <TextTicker content={data?.nowplaying}/>
    </div>
  )
}

export default PlayerContent
