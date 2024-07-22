import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: 'networkAtom',
  default: 3,
})

export const messagingAtom = atom({
  key: 'messagingAtom',
  default: 12,
})

export const jobsAtom = atom({
  key: 'jobsAtom',
  default: 0,
})

export const notificationAtom = atom({
  key: 'notificationAtom',
  default: 102,
})

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({get}) => {
    const network = get(networkAtom);
    const job = get(jobsAtom);
    const message = get(messagingAtom);
    const notification = get(notificationAtom);
    
    return network + job + message + notification;
  }
})