import React from "react";

const LibrarySong = ({ song, songs, setCurrentSong, id, audioRef }) => {
  const songSelectedHandler = async () => {
    await setCurrentSong(songs.filter((song) => song.id === id)[0]);

    audioRef.current.play();
  };
  return (
    <div onClick={songSelectedHandler} className="library-song">
      <img src={song.cover} alt={song.name} />

      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
