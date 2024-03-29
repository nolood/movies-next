import { MovieCard } from "~/entities/movie/ui";
import { RatingSelect } from "~/features/rating-select/ui";
import { ViewMark } from "~/features/view-mark/ui";
import { type InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { Fragment, memo, useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import { useInView } from "react-intersection-observer";
import { useDebounce } from "~/shared/lib";
import { fetchMovies } from "~/widgets/movies/lib";
import { type MoviesResponse } from "~/widgets/movies/lib/fetch-movies";

const List = memo(
  ({ data }: { data?: InfiniteData<MoviesResponse | undefined> }) => {
    if (!data?.pages) return "Search for movies, TV series, and more!";

    if (!data.pages[0]?.data) return "No data";

    return (
      <div className="grid grid-cols-4 gap-[20px] max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {data.pages.map((page) => (
          <Fragment key={crypto.randomUUID()}>
            {page?.data.map((movie) => (
              <div key={movie.imdbID}>
                <MovieCard
                  item={movie}
                  footer={
                    <>
                      <RatingSelect item={movie} />
                      <ViewMark item={movie} />
                    </>
                  }
                />
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    );
  },
);

List.displayName = "List";

// TODO: Стоит подумать над тем, чтобы разделить этот компонент, возможно запрос вынести в pages

const MoviesList = () => {
  const { ref, inView } = useInView();
  const [searchValue, setSearchValue] = useState<string>("");

  const debouncedSearch = useDebounce(searchValue, 500);

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["movies-list", debouncedSearch],
    queryFn: (data) => fetchMovies(data.pageParam, debouncedSearch),
    getNextPageParam: (lastPage) => lastPage?.nextPage,
    initialPageParam: 1,
  });

  useEffect(() => {
    if (inView) {
      void fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <div className="flex flex-col gap-[50px]">
      <Input
        onChange={(event) => setSearchValue(event.target.value)}
        value={searchValue}
        placeholder="Search"
      />
      <List data={data} />
      <div ref={ref}></div>
    </div>
  );
};

export default MoviesList;
