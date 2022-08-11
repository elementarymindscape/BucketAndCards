import { Modal } from 'antd';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../Redux/Actions/ModalActions';
import * as CardActions from '../../Redux/Actions/CardActions';
import { Input, Space } from 'antd';

function AddCardModal() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };
  const view = useSelector(({ view }) => view?.view);
  const isModalOpen = useSelector(({ modal }) => modal?.addCard?.open);
  const bucketName = useSelector(({ modal }) => modal?.addCard?.bucketName);
  function handleSubmit(view) {
    dispatch(CardActions.addCard(title, link, bucketName, view));
    dispatch(Actions.hideAddCardModal());
  }
  function handleCancel() {
    dispatch(Actions.hideAddCardModal());
  }
  return (
    <>
      <Modal
        title={`Add Card to ${bucketName}`}
        className="flex justify-center align-center"
        visible={isModalOpen}
        onCancel={handleCancel}
        okText="Add Card"
        centered="true"
        okType="secondary"
        onOk={() => handleSubmit(view)}
        destroyOnClose={true}
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input
            className="w-full"
            placeholder="Card Title"
            onChange={(e) => handleTitleChange(e)}
          />
          <Input
            className="w-full"
            placeholder="Video Link"
            onChange={(e) => handleLinkChange(e)}
          />
        </Space>
      </Modal>
    </>
  );
}

export default AddCardModal;
