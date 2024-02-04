import { Fragment, memo, useEffect } from "react";
import { type InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import {
  fetchViewedMovies,
  type ViewedMoviesResponse,
} from "~/widgets/movies/lib/fetch-movies";
import { MovieViewedCard } from "~/entities/movie/ui";
import { RatingSelect } from "~/features/rating-select/ui";
import { useInView } from "react-intersection-observer";

const List = memo(
  ({ data }: { data?: InfiniteData<ViewedMoviesResponse | undefined> }) => {
    if (!data?.pages) return "Просмотренных фильмов нет";

    if (!data.pages[0]?.data) return "No data";

    return (
      <div className="grid grid-cols-4 gap-[20px] max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {data.pages.map((page) => (
          <Fragment key={crypto.randomUUID()}>
            {page?.data.map((movie) => (
              <div key={movie.id}>
                <MovieViewedCard
                  item={movie}
                  footer={
                    <>
                      <RatingSelect staticRating={movie.rating} />
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

const ViewedMoviesList = () => {
  const { ref, inView } = useInView();

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["viewed-movies"],
    queryFn: (data) => fetchViewedMovies(data.pageParam),
    getNextPageParam: (lastPage) => lastPage?.nextPage,
    initialPageParam: 1,
  });

  useEffect(() => {
    if (inView) {
      void fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <div>
      <List data={data} />
      <div ref={ref}></div>
    </div>
  );
};

export default ViewedMoviesList;
