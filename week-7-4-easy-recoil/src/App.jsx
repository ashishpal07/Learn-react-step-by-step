import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './store/store/count'

function App() {
  return (
    <>
     <RecoilRoot>
      <Header />
     </RecoilRoot>
    </>
  )
}

function Header() {
  const countNetworkAtom = useRecoilValue(networkAtom);
  const countMessagingAtom = useRecoilValue(messagingAtom);
  const countJobAtom = useRecoilValue(jobsAtom);
  const countNotificationAtom = useRecoilValue(notificationAtom);
  const totalNotification = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>
      <button>My Networks ({countNetworkAtom})</button>
      <button>Jobs ({countJobAtom})</button>
      <button>Messaging ({countMessagingAtom})</button>
      <button>Notifications ({countNotificationAtom >= 100 ? '99+' : countNotificationAtom})</button>
      <button>Me ({totalNotification})</button>
    </>
  )
}

export default App
