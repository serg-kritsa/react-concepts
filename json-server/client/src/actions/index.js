import {
  ACTION_WITHOUT_PAYLOAD,
  ACTION_WITH_PAYLOAD
} from './types';

export const actionDemo01 = demoValueToPayload => {
  return {
    type: ACTION_WITH_PAYLOAD,
    payload: demoValueToPayload
  };
};

export const actionDemo02 = () => {
  return {
    type: ACTION_WITHOUT_PAYLOAD
  };
};