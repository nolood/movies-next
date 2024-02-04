import { RootLayout } from "~/app/layouts";
import { ViewedMoviesList } from "~/widgets/movies/ui";

const Viewed = () => {
  return (
    <RootLayout>
      <h1 className="mb-[50px] text-center text-3xl">Просмотренные фильмы</h1>
      <ViewedMoviesList />
    </RootLayout>
  );
};

export default Viewed;
