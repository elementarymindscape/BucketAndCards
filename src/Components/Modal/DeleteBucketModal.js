import { Modal } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../Redux/Actions/ModalActions';

function DeleteBucketModal() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(({ modal }) => modal?.deleteBucket?.open);
  const view = useSelector(({ view }) => view?.view);
  const bucketName = useSelector(
    ({ modal }) => modal?.deleteBucket?.bucketName
  );
  function handleDelete(name, view) {
    dispatch(Actions.deleteBucket(name, view));
    handleCancel();
  }
  function handleCancel() {
    dispatch(Actions.hideDeleteBucketModal());
  }
  return (
    <>
      <Modal
        title={`Delete ${bucketName}`}
        className="flex justify-center align-center"
        visible={isModalOpen}
        onCancel={handleCancel}
        onOk={() => handleDelete(bucketName, view)}
        centered="true"
        okType="secondary"
        destroyOnClose={true}
      >
        {`Are you sure you want to delete ${bucketName}?`}
      </Modal>
    </>
  );
}

export default DeleteBucketModal;
