import { useState, useEffect } from "react";

const useFriendStatus = (friendID) => {
  const [streamingData, setstreamingData] = useState();

  useEffect(() => {
    setstreamingData("Hi Pockemon");
  });

  return streamingData;
};
