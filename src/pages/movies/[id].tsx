import { serverApi } from "~/shared/api/api";
import {
  type GetServerSideProps,
  type InferGetServerSidePropsType,
} from "next";
import { type IFullMovie } from "~/entities/movie/model/types";
import { RootLayout } from "~/app/layouts";
import { MovieInfo } from "~/widgets/movies/ui";

export const getServerSideProps = (async (context) => {
  try {
    const id = String(context.params?.id);

    const res = await serverApi.get<IFullMovie>(`/?i=${id}`);

    const data: IFullMovie = res.data;

    return { props: { data } };
  } catch (e) {
    return { props: { data: null } };
  }
}) satisfies GetServerSideProps<{ data: IFullMovie | null }>;

const Movie = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(data, "data");
  return (
    <RootLayout>
      <MovieInfo data={data} />
    </RootLayout>
  );
};

export default Movie;
