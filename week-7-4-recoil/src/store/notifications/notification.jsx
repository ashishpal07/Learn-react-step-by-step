import { atom, selector } from 'recoil'

export const notifications = atom({
  key: 'networkAtom',
  default: {
    network: 0,
    jobs: 0,
    notifications: 0,
    messaging: 0
  }
})

export const totalNotificationSelector = selector({
  key: 'totalNotificationSelector',
  get: ({ get }) => {
    const totalNotifications =
      get(networks) + get(jobs) + get(notifications) + get(messaging)
    return totalNotifications
  }
});
