import React from 'react';

function WatchedButton({watched, index, toggleWatchStatus}) {
  let watchStatus;
  if (watched) watchStatus = 'watched';
  else watchStatus = 'unwatched';

  return (
    <button
      className={watchStatus}
      index={index}
      onClick={() => toggleWatchStatus(index)} 
    >{watchStatus}</button>
  )
}

export default WatchedButton;