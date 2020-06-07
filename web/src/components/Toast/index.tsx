import React from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CustomToast = styled(ToastContainer)`
  .Toastify__toast--info {
    background: 'rgb(51, 102, 255)';
  }
  .Toastify__toast--success {
    background: 'rgb(51, 187, 102)';
  }
  .Toastify__toast--warning {
    background: 'rgb(254, 255, 20)';
  }
  .Toastify__toast--error {
    background: 'rgb(255, 102, 102)';
  }
  .Toastify__toast {
    width: "350px";
    border-radius: 10px; 
  }
`;

export const showToast = (type: string, message: string) => {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'warn':
      toast.warn(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast.info(message);
  }
};
export default function Toast() {
  return <CustomToast />;
}