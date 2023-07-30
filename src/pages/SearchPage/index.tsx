import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import instance from "../../api/axios";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();

  const searchTerm = query.get("q");

  const fetchSearchMovie = async (searchTerm: string) => {
    try {
      const response = await instance.get(
        `search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);

  return <div></div>;
};

export default SearchPage;
