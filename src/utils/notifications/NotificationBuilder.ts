const buildNotification = (data: any) => {
  const notification = {
    title: data.title,
    body: data.body,
  };

  return notification;
};

export default buildNotification;
