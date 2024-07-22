import { useEffect, useState } from 'react'
import './App.css'
import { useRecoilValue, useRecoilState, RecoilRoot } from 'recoil'
import { notifications } from './store/notifications/notification'

function App() {
  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  )
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotifications = useRecoilValue(notifications);

  console.log("networkCount = ", networkCount);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/notifications")
    .then(res => {
      console.log(res);
      setNetworkCount(res.data);
    })
  }, []);

  return (
    <div>
      <button>Home</button>

      <button>My Network ({networkCount.network})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotifications})</button>
    </div>
  )
}

export default App