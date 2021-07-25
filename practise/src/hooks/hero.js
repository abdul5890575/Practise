import { useState, useEffect } from "react";
import axios from "axios";

export default function useRecipesApi(search) {
  const [hero, sethero] = useState(null);

  useEffect(() => {
    if (search) {
      const url = `https://superheroapi.com/api/10219798857869496/search/${search}`;
      axios.get(url).then((res) => {
        console.log('sssssss',res)
        sethero(res.data);
      });
    }
  }, [search]);

  return hero;
}
