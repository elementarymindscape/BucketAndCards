import { Modal } from 'antd';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../Redux/Actions/ModalActions';
import * as BucketActions from '../../Redux/Actions/CardActions';
import { Input } from 'antd';

function AddBucketModal() {
  const dispatch = useDispatch();
  const [newBucketName, setNewBucketName] = useState('');
  const view = useSelector(({ view }) => view?.view);
  const isModalOpen = useSelector(({ modal }) => modal?.addBucketModal);
  function handleAddBucket(updatedBucketName, view) {
    dispatch(BucketActions.addBucket(updatedBucketName, view));
    handleCancel();
  }
  function handleCancel() {
    dispatch(Actions.hideAddBucketModal());
  }
  return (
    <>
      <Modal
        title={`Add a bucket`}
        className="flex justify-center align-center"
        visible={isModalOpen}
        onCancel={handleCancel}
        destroyOnClose={true}
        onOk={() => handleAddBucket(newBucketName, view)}
        okText="Add Bucket "
        centered="true"
        okType="secondary"
      >
        <Input
          className="w-full"
          placeholder="Bucket Name"
          value={newBucketName}
          onChange={(e) => setNewBucketName(e.target.value)}
        />
      </Modal>
    </>
  );
}

export default AddBucketModal;
