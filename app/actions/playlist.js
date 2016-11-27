// @flow
export const SEARCH_PLAYLIST = 'SEARCH_PLAYLIST';
export const STARTING_SEARCH_PLAYLIST = 'STARTING_SEARCH_PLAYLIST';
export const COMPLETED_SEARCH_PLAYLIST = 'COMPLETED_SEARCH_PLAYLIST';

export function search(url: string) {
  return (dispatch: Function) => {
    dispatch(startPlaylistSearch());

    // Do search here ...
    console.log('url', url);

    dispatch(completedPlaylistSearch([]));
  };
}

export function startPlaylistSearch() {
  console.log('start');
  return {
    type: STARTING_SEARCH_PLAYLIST
  };
}

export function completedPlaylistSearch(items) {
  console.log('complete');
  return {
    type: COMPLETED_SEARCH_PLAYLIST,
    value: items
  };
}
