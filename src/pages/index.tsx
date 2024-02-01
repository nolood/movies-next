import { RootLayout } from "src/app/layouts";
import { MovieSearch } from "~/features/movie-search/ui";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <RootLayout>
      <MovieSearch />
    </RootLayout>
  );
}
