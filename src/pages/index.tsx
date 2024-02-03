import { RootLayout } from "src/app/layouts";
import { MoviesList } from "~/widgets/movies/ui";

export default function Home() {
  return (
    <RootLayout>
      <MoviesList />
    </RootLayout>
  );
}
