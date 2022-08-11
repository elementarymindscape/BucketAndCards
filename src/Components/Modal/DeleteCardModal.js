import { Modal } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../Redux/Actions/ModalActions';

function DeleteCardModal() {
  const dispatch = useDispatch();
  const view = useSelector(({ view }) => view?.view);
  const isModalOpen = useSelector(({ modal }) => modal?.deleteCard?.open);
  const cardName = useSelector(({ modal }) => modal?.deleteCard?.cardName);
  const cardId = useSelector(({ modal }) => modal?.deleteCard?.cardId);
  function handleDelete(id) {
    dispatch(Actions.deleteCard(id, view));
    handleCancel();
  }
  function handleCancel() {
    dispatch(Actions.hideDeleteCardModal());
  }
  return (
    <>
      <Modal
        title={`Delete ${cardName}`}
        className="flex justify-center align-center"
        visible={isModalOpen}
        onCancel={handleCancel}
        onOk={() => handleDelete(cardId)}
        centered="true"
        okType="secondary"
        destroyOnClose={true}
      >
        {`Are you sure you want to delete ${cardName}?`}
      </Modal>
    </>
  );
}

export default DeleteCardModal;
