import { useState } from "react";
import { Button } from "@nextui-org/react";
import { Chip } from "@nextui-org/chip";

const ViewMark = () => {
  const [isViewed, setIsViewed] = useState(false);

  if (!isViewed) {
    return (
      <Button className={"!h-[31px]"} onClick={() => setIsViewed(true)}>
        Mark viewed
      </Button>
    );
  }

  return (
    <Chip onClick={() => setIsViewed(false)} color="primary">
      Viewed
    </Chip>
  );
};

export default ViewMark;
