import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { toast } from 'react-hot-toast';

const NotificationHandler = () => {
  useEffect(() => {
    const socket = io('/notifications');

    socket.on('newBooking', (data) => {
      toast.success(`New booking from ${data.name}!`);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return null;
};

export default NotificationHandler;