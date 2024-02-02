import { type IMovie } from "~/entities/movie/model/types";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/react";
import { type ReactNode } from "react";

const MovieCard = ({ item, footer }: { item: IMovie; footer?: ReactNode }) => {
  return (
    <Card>
      <CardHeader className="h-[80px]">
        <p className="w-full text-center">
          {item.Title} {item.Year}
        </p>
      </CardHeader>
      <CardBody className="flex items-center">
        <Image
          isZoomed
          src={item.Poster}
          width={250}
          height={300}
          className="h-[350px] cursor-pointer"
          alt={item.Title}
        />
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        {footer}
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
