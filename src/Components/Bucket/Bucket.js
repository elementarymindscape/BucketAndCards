import React from 'react';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../Redux/Actions/ModalActions';
import * as CardActions from '../../Redux/Actions/CardActions';
import BucketCard from '../Card/BucketCard';
import { useDrop } from 'react-dnd';

function Bucket({ type }) {
  const [, drop] = useDrop(() => ({
    accept: 'div',
    drop: (item) => dropOver(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver,
    }),
  }));
  function dropOver(item) {
    if (type === item.type) {
      alert('Cannot move to same bucket');
      return;
    }
    if (
      !window.confirm(
        `Are you sure you want to move ${item.cardName} to ${type}`
      )
    )
      return;

    dispatch(CardActions.moveCardToBucket(item.cardId, type, view));
  }
  const dispatch = useDispatch();
  const view = useSelector(({ view }) => view?.view);
  const allCards = useSelector(({ cards }) => cards?.cards);
  function openAddCardModal(bucketName) {
    dispatch(Actions.showAddCardModal(bucketName));
  }
  function openEditBucketNameModal(bucketName, view) {
    dispatch(Actions.showEditBucketNameModal(bucketName, view));
  }
  function openDeleteBucketModal(bucketName) {
    dispatch(Actions.showDeleteBucketModal(bucketName));
  }
  return (
    <div
      ref={drop}
      className="bucket flex-shrink-0 py-10 border-2 h-4/5 my-auto w-80 bg-gray-200 overflow-x-hidden space-y-4 overflow-y-scroll"
    >
      <div className="p-4 flex align-center">
        <h1 className="text-xl">{type}</h1>
        <div className="flex space-x-2 ml-auto">
          <PlusOutlined
            onClick={() => openAddCardModal(type)}
            title="Add a card"
            className="text-xl cursor-pointer"
          />
          <EditOutlined
            onClick={() => openEditBucketNameModal(type)}
            title="Edit bucket name"
            className="text-xl cursor-pointer"
          />
          <DeleteOutlined
            onClick={() => openDeleteBucketModal(type)}
            title="Delete Bucket"
            className="text-xl cursor-pointer"
          />
        </div>
      </div>
      {allCards.length > 0
        ? allCards.map((card, index) => {
            return type === card.card_bucket_type &&
              card?.card_title?.length > 0 &&
              card?.card_video_link?.length > 0 ? (
              <BucketCard
                type={type}
                title={card.card_title}
                videoID={card.card_video_link}
                cardId={card._id}
                key={index}
              />
            ) : null;
          })
        : 'No cards added yet'}
    </div>
  );
}

export default Bucket;
