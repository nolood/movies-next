import { type IMovie } from "~/entities/movie/model/types";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { memo, type ReactNode } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const MovieCard = memo(
  ({ item, footer }: { item: IMovie; footer?: ReactNode }) => {
    const router = useRouter();
    console.log(item.imdbID);
    return (
      <Card>
        <CardHeader className="h-[80px]">
          <p className="w-full text-center">
            {item.Title} {item.Year}
          </p>
        </CardHeader>
        <CardBody
          className="flex items-center"
          onClick={() => router.push("/movies/" + item.imdbID)}
        >
          <Image
            src={
              item.Poster !== "N/A" && item.Poster
                ? item.Poster
                : "/no-poster.png"
            }
            width={250}
            height={350}
            className="h-[350px] cursor-pointer text-center"
            alt={"Movie without poster"}
          />
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          {footer}
        </CardFooter>
      </Card>
    );
  },
);

MovieCard.displayName = "MovieCard";

export default MovieCard;
