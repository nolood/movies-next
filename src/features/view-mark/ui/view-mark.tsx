import { useCallback, useState } from "react";
import { Button } from "@nextui-org/react";
import { Chip } from "@nextui-org/chip";
import { useMutation } from "@tanstack/react-query";
import { setViewedMark } from "~/features/view-mark/lib/set-viewed-mark";
import { type IMovie } from "~/entities/movie/model/types";

// TODO: Такая же ситуация как и с rating-select

const ViewMark = ({ item }: { item: IMovie }) => {
  const [isViewed, setIsViewed] = useState(false);

  const mutations = useMutation({
    mutationKey: ["set-viewed"],
    mutationFn: setViewedMark,
  });

  const handleClick = useCallback(
    (value: boolean) => {
      setIsViewed(value);
      mutations.mutate({ movie: item, value });
    },
    [item],
  );

  if (!isViewed) {
    return (
      <Button className={"!h-[31px]"} onClick={() => handleClick(true)}>
        Mark viewed
      </Button>
    );
  }

  return (
    <Chip onClick={() => handleClick(false)} color="primary">
      Viewed
    </Chip>
  );
};

export default ViewMark;
