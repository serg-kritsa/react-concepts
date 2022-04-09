import streams from '../apis/streams';
import {
  ACTION_WITHOUT_PAYLOAD,
  ACTION_WITH_PAYLOAD,
  PASS_RESPONSE_AS_PAYLOAD
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

export const asyncActionDemo = formValues => async dispatch => {
  const response = await streams.post('/streams', formValues);

  dispatch({ type: PASS_RESPONSE_AS_PAYLOAD, payload: response.data });
};