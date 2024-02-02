import { Input } from "@nextui-org/react";
import { type ChangeEvent, useCallback, useState } from "react";
import debounce from "lodash.debounce";
import { api } from "~/shared/api/api";
import { type IMovie } from "~/entities/movie/model/types";

export const fetchMovies = async (): Promise<IMovie[]> => {
  const res = await api.get<IMovie[]>("/api/movies");
  return res.data;
};

const MovieSearch = () => {
  const [value, setValue] = useState<string>("");

  const updateSearchValue = useCallback(
    debounce((text) => {
      async function test() {
        const data = await fetch("/api/movies");
        console.log(data.json());
      }

      void test();
    }, 1000),
    [],
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="flex gap-[20px]">
      <Input onChange={onChange} value={value} placeholder="Search" />
    </div>
  );
};

export default MovieSearch;
