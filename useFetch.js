import { useState, useEffect } from "react";
import axios from "axios";

export const useAxiosFetch = ({ url, headers = null, params = null, method = 'get' }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const list = async () => {
      try {
        const response = await axios({
          method: method,
          url: url,
          headers: headers,
          params: params,
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      }
    };
    list();
  }, []);

  return { data, error };
};
export const manipulateAxiosData = async ({
  url,
  method,
  body = null,
  headers = null,
  params = null,
}) => {
  let error = null;
  let data = null;
  try {
    const res = await axios({
      method: method,
      url: url,
      data: body,
      params: params,
      headers: headers,
    });
    data = res;
  } catch (err) {
    error = err;
  }
  return { error, data };
};
