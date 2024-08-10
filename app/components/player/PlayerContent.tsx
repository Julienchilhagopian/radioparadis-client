'use client'

import React from "react";
import { useEffect, useState } from "react"
import styles from '../../styles/playerContent.module.scss';
import { getCurrentTrack } from '../../lib/actions/track'
import useSWR from "swr";

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
  if (isLoading) return <div>loading...</div>;
  
  return (
    <div>
      <div className={styles.playerContent}>
        <h2>{data?.nowplaying}</h2>
      </div>
    </div>
  )
}

export default PlayerContent
