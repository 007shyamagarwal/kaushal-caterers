import { RSAA } from 'redux-api-middleware';
import Cookies from 'js-cookie';

const token = () => Cookies.get('_mindzeed-token') || '';
export default function () {
  return function (next) {
    return function (action) {
      const rsaaApi = action[RSAA];
      if (rsaaApi) {
        rsaaApi.headers = { ...rsaaApi.headers, Authorization: `Bearer ${token()}` };
        rsaaApi.fetch =
          rsaaApi.fetch ||
          (async (...args) => {
            const res = await fetch(...args);
            const json = await res.json();
            return new Response(JSON.stringify(json), {
              status: res.status === 200 && json.errors ? 500 : res.status,
              headers: {
                'Content-Type': 'application/json'
              }
            });
          });
      }

      return next(action);
    };
  };
}
