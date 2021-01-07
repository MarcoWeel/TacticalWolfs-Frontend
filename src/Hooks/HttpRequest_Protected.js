import { useEffect, useState } from "react";
import axios from "axios";
import keycloak from "../Keycloak";

export function useAxiosGet(url) {
  const [request, setRequest] = useState({
    loading: false,
    data: null,
    error: false,
  });
  useEffect(() => {
    const header =
      keycloak.token != null
        ? { Authorization: `Bearer ${keycloak.token}` }
        : "";
    setRequest({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url, { headers: header })
      .then((response) => {
        setRequest({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch((error) => {
        setRequest({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  return request;
}
