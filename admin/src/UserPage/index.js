import { React } from "react";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import User from "./User";

const users = ["user1", "user2"];

const UserPage = () => {
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
    >
      {users.map((index) => {
        return <User key={index} />;
      })}
    </Stack>
  );
};

export default UserPage;
