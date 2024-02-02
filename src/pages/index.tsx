import { RootLayout } from "src/app/layouts";
import { MovieSearch } from "~/features/movie-search/ui";
import { MoviesList } from "~/widgets/movies/ui";

export default function Home() {
  return (
    <RootLayout className="flex flex-col gap-[50px]">
      <MovieSearch />
      <MoviesList />
    </RootLayout>
  );
}
