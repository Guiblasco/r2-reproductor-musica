import { Song } from "./songsData";

export const areSameSong = (song: Song, songTitle: string): boolean => {
  let areSame: boolean = song.title === songTitle ? true : false;

  return areSame;
};

export const addSong = (song: Song, songs: Song[]): void => {
  songs.push(song);
};

export const isPlaylistFull = (songs: Song[]): boolean => {
  let isFull: boolean = songs.length >= 4 ? true : false;

  return isFull;
};

export const getErrorMessage = (errorCode: string): string => {
  let errorMessage: string = errorCode;
  switch (errorMessage) {
    case "exists":
      errorMessage = "La canción ya existe";
      break;
    case "limit":
      errorMessage = "La playlist está llena";
      break;
    default:
      "Error, código recibido no válido";
      break;
  }
  return errorMessage;
};

export const getSongsCount = (songs: Song[]): number => {
  let songsCount: number = songs.length;

  return songsCount;
};

export const removeSongByPosition = (songs: Song[], position: number): void => {
  // Elimina del array de canciones recibido la canción que se encuentra en la posición recibida
};

export const setCurrentSong = (song: Song): void => {
  // Establece la canción recibida como canción actual
};

export const getNextSongPosition = (
  songs: Song[],
  currentSongPosition: number
) => {
  let nextSongPosition: number;
  // En currentSongPosition tienes el índice de la canción que se está reproduciendo
  // En songs tienes el array de canciones
  // Asígnale a la variable nextSongPosition el índice de la siguiente canción que se tiene que reproducir
  // Si la canción actual es la última, la siguiente será la primera
  nextSongPosition = 0; // Sustituye este 0 por una expresión

  return nextSongPosition;
};

export const isCurrentSong = (song: Song): boolean => {
  let isCurrent: boolean;
  // Asígnale a la variable isCurrent un true o un false dependiendo de si
  // la canción recibida es la actual

  isCurrent = false; // Cambia esta línea por tu código

  return isCurrent;
};
