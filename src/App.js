import { useEffect } from 'react';
import AddCardModal from './Components/Modal/AddCardModal';
import CardOpenModal from './Components/Modal/CardOpenModal';
import DeleteCardModal from './Components/Modal/DeleteCardModal';
import EditBucketNameModal from './Components/Modal/EditBucketNameModal';
import EditCardOpenModal from './Components/Modal/EditCardModal';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './Redux/Actions/CardActions';
import * as ViewActions from './Redux/Actions/viewActions';
import CustomNotification from './Components/Notifications/Notifications';
import BucketContainer from './Components/Bucket/BucketContainer';
import AddBucketModal from './Components/Modal/AddBucketModal';
import { Button } from 'antd';
import History from './Components/History/History';
import DeleteBucketModal from './Components/Modal/DeleteBucketModal';

function App() {
  const dispatch = useDispatch();
  const view = useSelector(({ view }) => view?.view);
  useEffect(() => {
    if (view === 'Buckets') {
      dispatch(Actions.getAllCards(view));
      dispatch(Actions.getAllCardTypes());
    } else if (view === 'History') {
      dispatch(Actions.getAllCards(view));
    }
  }, [view, dispatch]);
  return (
    <div>
      <div className="flex p-8 justify-center space-x-4">
        <Button
          onClick={() => dispatch(ViewActions.setBucketView())}
          className="w-40"
        >
          Buckets
        </Button>
        <Button
          onClick={() => dispatch(ViewActions.setHistoryView())}
          className="w-40"
        >
          History
        </Button>
      </div>
      {view === 'Buckets' && <BucketContainer />}
      {view === 'History' && <History />}
      <CardOpenModal />
      <EditCardOpenModal />
      <AddCardModal />
      <EditBucketNameModal />
      <DeleteCardModal />
      <CustomNotification />
      <AddBucketModal />
      <DeleteBucketModal />
    </div>
  );
}

export default App;
