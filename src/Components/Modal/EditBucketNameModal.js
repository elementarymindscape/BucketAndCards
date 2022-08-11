import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../Redux/Actions/ModalActions';
import { Input } from 'antd';

function EditBucketNameModal() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(({ modal }) => modal?.editBucketName?.open);
  const bucketName = useSelector(
    ({ modal }) => modal?.editBucketName?.bucketName
  );
  const view = useSelector(({ view }) => view?.view);
  const [newbucketName, setNewBucketName] = useState('');
  useEffect(() => {
    setNewBucketName(bucketName);
  }, [bucketName]);
  function handleUpdate(oldBucketName, updatedBucketName, view) {
    dispatch(Actions.updateBucketName(oldBucketName, updatedBucketName, view));
    handleCancel();
  }
  function handleCancel() {
    dispatch(Actions.hideEditBucketNameModal());
  }
  return (
    <>
      <Modal
        title={`Edit ${bucketName}`}
        className="flex justify-center align-center"
        visible={isModalOpen}
        onCancel={handleCancel}
        destroyOnClose={true}
        onOk={() => handleUpdate(bucketName, newbucketName, view)}
        okText="Update Bucket Name"
        centered="true"
        okType="secondary"
      >
        <Input
          className="w-full"
          placeholder="Bucket Name"
          value={newbucketName}
          onChange={(e) => setNewBucketName(e.target.value)}
        />
      </Modal>
    </>
  );
}

export default EditBucketNameModal;
