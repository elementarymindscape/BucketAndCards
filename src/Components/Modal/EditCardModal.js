import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../Redux/Actions/ModalActions';
import * as CardActions from '../../Redux/Actions/CardActions';
import { Input, Space } from 'antd';

function EditCardOpenModal() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(({ modal }) => modal?.editCard?.open);
  const title = useSelector(({ modal }) => modal?.editCard?.cardName);
  const link = useSelector(({ modal }) => modal?.editCard?.cardLink);
  const view = useSelector(({ view }) => view?.view);
  const cardId = useSelector(({ modal }) => modal?.editCard?.cardId);
  const [newTitle, setNewTitle] = useState('');
  const [newLink, setNewLink] = useState('');
  useEffect(() => {
    setNewTitle(title);
    setNewLink(link);
  }, [title, link]);
  function handleEditCard(id, title, link, view) {
    dispatch(CardActions.editCard(id, title, link, view));
    handleCancel();
  }
  function handleCancel() {
    dispatch(Actions.hideEditCardModal());
  }
  return (
    <>
      <Modal
        title={`Edit ${title}`}
        className="flex justify-center align-center"
        visible={isModalOpen}
        onCancel={handleCancel}
        okText="Update Card"
        okType="secondary"
        onOk={() => handleEditCard(cardId, newTitle, newLink, view)}
        centered="true"
        destroyOnClose={true}
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input
            className="w-full"
            placeholder="Card Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <Input
            className="w-full"
            placeholder="Video Link"
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
          />
        </Space>
      </Modal>
    </>
  );
}

export default EditCardOpenModal;
