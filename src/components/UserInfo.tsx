import { Box, TextField } from "@mui/material";
import { useContext } from "react";
import { PassportAppContext } from "../contexts/PassportAppContexts";

const UserInfo = () => {
  const { updateData, ...data } = useContext(PassportAppContext);
  console.log(data);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField
        required
        id="name"
        sx={{ maxWidth: "300px", margin: "0 auto", mb: 2 }}
        placeholder="Name"
        onChange={(evt) =>
          updateData({
            ...data,
            user: { ...data.user, name: evt.target.value },
          })
        }
      />
      <TextField
        required
        id="nrc_number"
        sx={{ maxWidth: "300px", margin: "0 auto", mb: 2 }}
        placeholder="NRC number"
        onChange={(evt) =>
          updateData({
            ...data,
            user: { ...data.user, nrcNumber: evt.target.value },
          })
        }
      />
      <TextField
        required
        id="email"
        sx={{ maxWidth: "300px", margin: "0 auto", mb: 2 }}
        placeholder="Email"
        onChange={(evt) =>
          updateData({
            ...data,
            user: { ...data.user, email: evt.target.value },
          })
        }
      />
    </Box>
  );
};

export default UserInfo;
