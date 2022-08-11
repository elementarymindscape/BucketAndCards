import { Modal } from 'antd';
import React from 'react';
import YouTube from 'react-youtube';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../Redux/Actions/ModalActions';
import * as CardActions from '../../Redux/Actions/CardActions';

function CardOpenModal() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(({ modal }) => modal?.openCard?.open);
  const videoId = useSelector(({ modal }) => modal?.openCard?.videoId);
  const cardTitle = useSelector(({ modal }) => modal?.openCard?.cardTitle);
  const cardId = useSelector(({ modal }) => modal?.openCard?.cardId);
  function handleCancel() {
    dispatch(CardActions.addToHistory(cardTitle, videoId, cardId));
    dispatch(Actions.hideOpenCardModal());
  }
  function _onReady(event) {
    event.target.playVideo();
  }
  return (
    <>
      <Modal
        title={cardTitle}
        className="flex justify-center align-center"
        visible={isModalOpen}
        centered="true"
        onCancel={handleCancel}
        footer={null}
        destroyOnClose={true}
      >
        <YouTube
          videoId={videoId}
          opts={{ width: '100%', height: '300' }}
          onReady={(e) => _onReady(e)}
        />
      </Modal>
    </>
  );
}

export default CardOpenModal;
