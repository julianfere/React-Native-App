import notifee from '@notifee/react-native';

const sendNotification = (notification: any) => {
  return async () => {
    await notifee.requestPermission();

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    const notificationWithChannel = {
      ...notification,
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    };

    await notifee.displayNotification(notificationWithChannel);
  };
};

export {sendNotification};
