import { useEffect, useState } from "react";
import axios, { AxiosResponse, Method } from "axios";
import { Product } from '../types/Product';

// Constants
const BASE_URL = 'http://127.0.0.1:8080/';


export function useMariaDBApi(method:Method, path: string ): any {
  
  // Constants
  const [rows, setRows] = useState();

  useEffect(() => {

    mariaDBApi(method, path, setRows); 

  },[path]);

  return rows;
}

export const mariaDBApi = 
(method: Method, 
  path:string, 
  callback:(data: any) => void = () => {},
  data = {}
  ) => {

  // Constants
  const config = {
    method,
    url: `${BASE_URL}${path}`,
    data}

  axios(config)
  .then((response: AxiosResponse<any>) => callback(response.data) )
  .catch(function (error) {
    // handle error
    console.log(error);
  })

}

