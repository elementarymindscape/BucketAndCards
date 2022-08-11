import React from 'react';
import { useHorizontalScroll } from '../Hooks/useHorizontalScroll';
import { useSelector } from 'react-redux';
import Bucket from './Bucket';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import * as Actions from '../../Redux/Actions/ModalActions';

function BucketContainer() {
  const sideScroll = useHorizontalScroll();
  const dipatch = useDispatch();
  function showAddBucketModal() {
    dipatch(Actions.showAddBucketModal());
  }
  const cardTypes = useSelector(({ cards }) => cards?.types);
  return (
    <>
      <div className="w-full flex justify-center">
        <Button onClick={showAddBucketModal} className="w-48 h-12">
          Add a bucket
        </Button>
      </div>
      <div
        ref={sideScroll}
        className="bucket-container flex px-4 space-x-6 mx-auto container h-screen w-full overflow-x-auto"
      >
        {cardTypes.length > 0
          ? cardTypes.map((type, index) => {
              return <Bucket key={index} type={type} />;
            })
          : 'No buckets added yet'}
      </div>
    </>
  );
}

export default BucketContainer;
