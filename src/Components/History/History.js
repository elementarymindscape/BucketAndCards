import React from 'react';
import { useSelector } from 'react-redux';
import BucketCard from '../Card/BucketCard';
import { useHorizontalScroll } from '../Hooks/useHorizontalScroll';

function History() {
  const allCards = useSelector(({ cards }) => cards?.cards);
  const sideScroll = useHorizontalScroll();
  return (
    <>
      <h1 className="text-center mb-8 text-4xl">History</h1>
      <div className="flex mx-auto h-screen w-full overflow-hidden">
        <div
          ref={sideScroll}
          className="flex mx-auto align-center space-x-4 h-3/4 w-4/5 bg-gray-200 overflow-x-auto overflow-y-hidden"
        >
          {allCards.length > 0
            ? allCards.map((card, index) => {
                return (
                  <BucketCard
                    title={card.card_title}
                    videoID={card.card_video_link}
                    cardId={card._id}
                    playedAt={card?.played_at}
                    key={index}
                  />
                );
              })
            : 'No cards added yet'}
        </div>
      </div>
    </>
  );
}

export default History;
