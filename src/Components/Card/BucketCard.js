import React from 'react';
import { Card } from 'antd';
import YouTube from 'react-youtube';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../Redux/Actions/ModalActions';
import { useDrag } from 'react-dnd';
import moment from 'moment';

function BucketCard({ title, videoID, cardId, type, playedAt }) {
  const view = useSelector(({ view }) => view?.view);
  const [, drag] = useDrag(() => ({
    type: 'div',
    item: { cardId: cardId, type: type, cardName: title },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const dispatch = useDispatch();
  function showOpenCardModal(cardTitle, videoId) {
    dispatch(Actions.showOpenCardModal(cardTitle, videoId, cardId));
  }
  function showEditCardModal(event, name, id, link) {
    event.stopPropagation();
    dispatch(Actions.showEditCardModal(name, id, link));
  }
  function showDeleteCardModal(event, title, id) {
    event.stopPropagation();
    dispatch(Actions.showDeleteCardModal(title, id));
  }

  return (
    <Card
      ref={drag}
      onClick={() => showOpenCardModal(title, videoID)}
      className={
        'shadow-gray-500 shadow-md' +
        (view === 'Buckets' ? 'w-full' : 'w-96 h-96 my-auto')
      }
      hoverable
      cover={
        <YouTube
          videoId={videoID}
          opts={
            view === 'Buckets'
              ? { width: '320', height: '150' }
              : { width: '400', height: '280' }
          }
        />
      }
    >
      <div
        className={
          'flex align-center ' + (view === 'History' ? 'w-full' : 'w-64')
        }
      >
        <h1
          className={
            'text-lg ' + (view === 'History' ? 'text-center w-full' : '')
          }
        >
          {title}
        </h1>
        {view === 'Buckets' ? (
          <div className="flex ml-auto space-x-4">
            <EditOutlined
              onClick={(e) => showEditCardModal(e, title, cardId, videoID)}
              title="Edit card"
              className="ml-auto text-xl"
            />
            <DeleteOutlined
              onClick={(e) => showDeleteCardModal(e, title, cardId)}
              title="Delete card"
              className="ml-auto text-xl"
            />
          </div>
        ) : (
          ''
        )}
      </div>
      {view === 'History' ? (
        <h1 className="p-2 text-center text-md">
          Last Played: {moment(playedAt).format('MMMM Do YYYY, h:mm:ss a')}
        </h1>
      ) : (
        ''
      )}
    </Card>
  );
}

export default BucketCard;
