import React from "react";
import { Stack, Box } from "@mui/material";
import Video from "./Video";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((video, idx) => {
        return (
          <Box key={idx}>
            {video.id.videoId && <Video video={video} />}
            {video.id.channelId && <ChannelCard channelDetail={video} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
