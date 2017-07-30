/* the constants are imported in the sagas, reducers and action files so it's very convenient to have a 'centralized' file for them. */
const GET_GAMES = 'GET_GAMES';
const GET_GAMES_SUCCESS = 'GET_GAMES_SUCCESS';
const GET_GAMES_FAILURE = 'GET_GAMES_FAILURE';
const SET_SEARCH_BAR = 'SET_SEARCH_BAR';
const SHOW_SELECTED_GAME = 'SHOW_SELECTED_GAME';
const DELETE_GAME = 'DELETE_GAME';
const DELETE_GAME_SUCCESS = 'DELETE_GAME_SUCCESS';
const DELETE_GAME_FAILURE = 'DELETE_GAME_FAILURE';
const POST_GAME = 'POST_GAME';
const POST_GAME_SUCCESS = 'POST_GAME_SUCCESS';
const POST_GAME_FAILURE = 'POST_GAME_FAILURE';

export {
  GET_GAMES,
  GET_GAMES_SUCCESS,
  GET_GAMES_FAILURE,
  SET_SEARCH_BAR,
  SHOW_SELECTED_GAME,
  DELETE_GAME,
  DELETE_GAME_SUCCESS,
  DELETE_GAME_FAILURE,
  POST_GAME,
  POST_GAME_SUCCESS,
  POST_GAME_FAILURE
};