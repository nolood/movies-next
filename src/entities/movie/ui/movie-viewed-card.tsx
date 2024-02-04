import { type IViewedMovie } from "~/entities/movie/model/types";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { memo, type ReactNode } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const MovieViewedCard = memo(
  ({ item, footer }: { item: IViewedMovie; footer?: ReactNode }) => {
    const router = useRouter();
    return (
      <Card>
        <CardHeader className="h-[80px]">
          <p className="w-full text-center">{item.title}</p>
        </CardHeader>
        <CardBody
          className="flex items-center"
          onClick={() => router.push("/movies/" + item.imdbId)}
        >
          <Image
            src={
              item.poster !== "N/A" && item.poster
                ? item.poster
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

MovieViewedCard.displayName = "MovieViewedCard";

export default MovieViewedCard;
