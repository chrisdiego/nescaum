import {useEffect, useState} from "react";
import { API_URL } from "../../../constants/constants";

const usePageData = () => {
    const [pageData, setPageData] = useState([]);
    useEffect(async () => {
          let url = `${API_URL}/collections/pages/entries?limit=999999999`;
          const response = await fetch(url);
          const results = await response.json();
          setPageData(results.data);
      }, []);

    return pageData;
}

export default usePageData;