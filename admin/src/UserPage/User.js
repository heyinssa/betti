import { React, useState, useEffect } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

const User = () => {
  const [users, setUsers] = useState([]);

  return (
    <Stack sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}>
      <Typography
        variant="h6"
        component="div"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        User
      </Typography>
      <List>
        {users.map((user, index) => {
          return (
            <ListItem key={index}>
              <Accordion style={{ width: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{user.nickname}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <pre>{JSON.stringify(user, null, 2)}</pre>
                    <br />
                    {/* <DetailMenu
                      clickHandler={() => {
                        setUserId(user.user_id);
                      }}
                    /> */}
                  </div>
                </AccordionDetails>
              </Accordion>
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
};

export default User;
