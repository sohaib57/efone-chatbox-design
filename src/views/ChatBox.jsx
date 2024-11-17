import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  MenuItem,
  Select,
  ToggleButtonGroup,
  ToggleButton,
  InputAdornment,
  AccordionDetails,
  AccordionSummary,
  Accordion,
} from "@mui/material";
import {
  Search as SearchIcon,
  AddCircleOutline as AddCircleOutlineIcon,
} from "@mui/icons-material";
import MessagesIcon from "../images/message.svg";
import CallIconImage from "../images/call.svg";
import InfoIcon from "../images/info.svg";
import ScheduleIcon from "../images/schedule.svg";
import AttachIcon from "../images/Attach.svg";
import EmojiIcon from "../images/emoji.svg";
import VoiceIcon from "../images/voice.svg";
import SendIcon from "../images/send.svg";
import MenuIcon from "../images/menu.svg";
import InfoQuestionIcon from "../images/info-question.svg";
import SettingsIcon from "../images/settings.svg";
import ChevronIcon from "../images/chevron.svg";
import PlusIcon from "../images/plus.svg";

const avatarImage = "https://randomuser.me/api/portraits/women/79.jpg";

const contactList = [
  { name: "Alina", phone: "0923456784521", letter: "A" },
  { name: "Amna", phone: "0923456784521", letter: "A" },
  { name: "Brown", phone: "0923456784521", letter: "B" },
  { name: "Ben", phone: "0923456784521", letter: "B" },
  { name: "Cutting", phone: "0923456784521", letter: "C" },
  { name: "Carol", phone: "0923456784521", letter: "C" },
];

const ChatBox = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box display="flex" height="100vh" flexDirection="column">
      <Box display="flex" flexGrow={1}>
        <Box
          width="25%"
          display="flex"
          flexDirection="column"
          borderRight="1px solid #e0e0e0"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            bgcolor="white"
            padding={2}
            height="64px"
            borderBottom="1px solid #e0e0e0"
            boxShadow="0px 5px 10px 0px #D1D1D140"
          >
            <Select
              defaultValue="All Numbers"
              variant="outlined"
              sx={{
                background: "linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)",
                color: "white",
                width: "150px",
                height: "36px",
                borderRadius: "20px",
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                "& .MuiSvgIcon-root": { color: "white" },
              }}
            >
              <MenuItem value="All Numbers">All Numbers</MenuItem>
              <MenuItem value="Mobile">Mobile</MenuItem>
              <MenuItem value="Home">Home</MenuItem>
              <MenuItem value="Work">Work</MenuItem>
            </Select>

            <Box display="flex" alignItems="center">
              <IconButton>
                <img
                  src={MessagesIcon}
                  alt="Messages"
                  style={{
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                  }}
                />
              </IconButton>
              <IconButton>
                <img
                  src={CallIconImage}
                  alt="Call"
                  style={{ width: "18px", height: "18px", cursor: "pointer" }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box
            flexGrow={1}
            p={4}
            sx={{
              backgroundColor: "#EFF1F2",
            }}
          >
            <ToggleButtonGroup exclusive fullWidth sx={{ mb: 2 }} value="calls">
              <ToggleButton
                value="messages"
                sx={{
                  flex: 1,
                  borderRadius: "25px",
                  background: "#ffffff",
                  color: "#212121",
                  "&.Mui-selected": {
                    background:
                      "linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)",
                    color: "white",
                  },
                  "&:hover": { background: "#f1f1f1" },
                }}
              >
                Messages
              </ToggleButton>
              <ToggleButton
                value="calls"
                sx={{
                  flex: 1,
                  borderRadius: "25px",
                  background: "#ffffff",
                  color: "#212121",
                  "&.Mui-selected": {
                    background:
                      "linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)",
                    color: "white",
                  },
                  "&:hover": { background: "#f1f1f1" },
                }}
              >
                Calls
              </ToggleButton>
            </ToggleButtonGroup>

            <Box display="flex" alignItems="center" mb={2}>
              <TextField
                fullWidth
                placeholder="Search"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  background: "#FFFFFF",
                  borderRadius: "20px",
                  paddingLeft: "10px",
                  height: "40px",
                  "& .MuiInputBase-root": {
                    height: "100%",
                    fontSize: "0.875rem",
                    color: "#7A7A7A",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    fontSize: "0.875rem",
                    color: "#7A7A7A",
                  },
                  boxShadow: "5px 5px 21px 4px #00000014",
                }}
              />
            </Box>

            <Box mb={2} display="flex" justifyContent="flex-start" gap={2}>
              <Button
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)",
                  color: "white",
                  borderRadius: "20px",
                  textTransform: "none",
                }}
              >
                All
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "20px",
                  textTransform: "none",
                  border: "1px solid",
                  borderColor: "#C535C8",
                  color: "#8B8B8B",
                  background: "#FFFFFF",
                }}
              >
                Missed
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "20px",
                  textTransform: "none",
                  border: "1px solid",
                  borderColor: "#C535C8",
                  color: "#8B8B8B",
                  background: "#FFFFFF",
                }}
              >
                Incoming
              </Button>
            </Box>

            <List
              sx={{
                maxHeight: "calc(100vh - 250px)",
              }}
            >
              {[
                { name: "Kim Williamson", status: "Missed", time: "2:34 PM" },
                { name: "Shane Watson", status: "Outgoing", time: "2:34 PM" },
                { name: "Hazelwood", status: "Incoming", time: "2:34 PM" },
                { name: "Zunaira Butt", status: "Incoming", time: "2:34 PM" },
                { name: "Kamran Masood", status: "Outgoing", time: "2:34 PM" },
              ].map((call, index) => {
                const initials = call.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("");

                return (
                  <ListItem
                    key={index}
                    button
                    sx={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: "10px",
                      mb: 2,
                      padding: 1,
                      boxShadow: "5px 5px 21px 4px #00000014",
                      "&:hover": { backgroundColor: "#f5f5f5" },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        background:
                          "linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      {initials}
                    </Box>

                    <ListItemText
                      primary={call.name}
                      primaryTypographyProps={{
                        color: "#333",
                        fontWeight: "bold",
                      }}
                      secondary={
                        <Box display="flex" alignItems="center" gap={1}>
                          <img src={CallIconImage} width={14} height={14} />
                          <Typography variant="caption" color="textSecondary">
                            {call.status}
                          </Typography>
                        </Box>
                      }
                      sx={{ ml: 2 }}
                    />

                    <Box
                      display="flex"
                      flexDirection={"column"}
                      alignItems="center"
                    >
                      <Typography
                        sx={{
                          color: "#7A7A7A",
                          fontSize: "12px",
                        }}
                      >
                        {call.time}
                      </Typography>
                      <img
                        src={InfoQuestionIcon}
                        alt="Info Icon"
                        style={{
                          height: "14px",
                          width: "14px",
                          cursor: "pointer",
                        }}
                      />
                    </Box>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>

        <Box
          width="50%"
          display="flex"
          flexDirection="column"
          borderRight="1px solid #e0e0e0"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            px={2}
            py={1}
            height="64px"
            borderBottom="1px solid #e0e0e0"
            boxShadow="0px 5px 10px 0px #D1D1D140"
          >
            <Box
              display="flex"
              alignItems="center"
              sx={{ marginLeft: "1.5rem" }}
            >
              <Avatar
                alt="Mishal Irfan"
                src={avatarImage}
                sx={{
                  width: "36px",
                  height: "36px",
                  marginRight: "12px",
                  boxShadow: "0px 1px 6px 1px #00000040",
                }}
              />
              <Box>
                <Typography variant="body1" fontWeight="bold" color="#333">
                  Mishal Irfan
                </Typography>
                <Typography variant="caption" sx={{ color: "#ABABAB" }}>
                  Last seen at 2:34 PM
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center">
              <IconButton>
                <img
                  src={CallIconImage}
                  alt="Call"
                  style={{ width: "18px", height: "18px", cursor: "pointer" }}
                />
              </IconButton>
              <IconButton>
                <img
                  src={MenuIcon}
                  alt="More"
                  style={{ width: "22px", height: "22px", cursor: "pointer" }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box flexGrow={1} p={2} sx={{ maxHeight: "calc(100vh - 160px)" }}>
            <Box display="flex" justifyContent="center" mb={2}>
              <Typography
                sx={{ color: "#ABABAB", fontSize: "12px" }}
                textAlign="center"
              >
                Today 12:34 PM
              </Typography>
            </Box>

            {[
              {
                text: "Hello, how are you available for meeting?",
                time: "9:30 AM",
                fromMe: false,
              },
              { text: "Hello", time: "9:33 AM", fromMe: true },
              {
                text: "Hello, how are you available for meeting?",
                time: "9:33 AM",
                fromMe: true,
              },
              {
                text: "Hello, how are you available for meeting?",
                time: "9:33 AM",
                fromMe: true,
              },
              {
                text: "Hello, how are you available for meeting?",
                time: "9:32 AM",
                fromMe: false,
              },
              {
                text: "Hello, how are you available for meeting?",
                time: "9:34 AM",
                fromMe: false,
              },
              { text: "Hello", time: "9:35 AM", fromMe: true },
              {
                text: "Hello, how are you available for meeting?",
                time: "9:30 AM",
                fromMe: false,
              },
              { text: "Hello", time: "9:33 AM", fromMe: true },
              {
                text: "Hello, how are you available for meeting?",
                time: "9:33 AM",
                fromMe: true,
              },
              {
                text: "Hello, how are you available for meeting?",
                time: "9:33 AM",
                fromMe: true,
              },
              {
                text: "Hello, how are you available for meeting?",
                time: "9:32 AM",
                fromMe: false,
              },
              {
                text: "Hello, how are you available for meeting?",
                time: "9:34 AM",
                fromMe: false,
              },
              { text: "Hello", time: "9:35 AM", fromMe: true },
            ].map((message, index) => (
              <Box
                key={index}
                mb={2}
                display="flex"
                justifyContent={message.fromMe ? "flex-end" : "flex-start"}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  maxWidth="60%"
                  minWidth="20%"
                  py={1}
                  px={2}
                  sx={{
                    background: message.fromMe
                      ? "linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)"
                      : "#E9EFF4",
                    color: message.fromMe ? "white" : "#000000",
                    borderTopLeftRadius: message.fromMe ? "50px" : "45px",
                    borderTopRightRadius: message.fromMe ? "50px" : "45px",
                    borderBottomLeftRadius: message.fromMe ? "50px" : "45px",
                    borderBottomRightRadius: message.fromMe ? "0" : "45px",
                  }}
                >
                  <Typography sx={{ fontSize: "14px" }}>
                    {message.text}
                  </Typography>
                  <Typography
                    variant="caption"
                    color={message.fromMe ? "white" : "#000000"}
                    sx={{
                      fontSize: "10px",
                      marginTop: 0.1,
                      alignSelf: "flex-end",
                      width: "100%",
                      textAlign: "right",
                    }}
                  >
                    {message.time}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Box
            display="flex"
            alignItems="center"
            p={2}
            borderTop="1px solid #e0e0e0"
            sx={{ backgroundColor: "#FFFFFF" }}
          >
            <IconButton sx={{ p: 0, mr: 1 }} aria-label="attach">
              <img
                src={AttachIcon}
                alt="Attach"
                style={{ width: 20, height: 20 }}
              />
            </IconButton>
            <IconButton sx={{ p: 0, mr: 1 }} aria-label="schedule">
              <img
                src={ScheduleIcon}
                alt="Schedule"
                style={{ width: 20, height: 20 }}
              />
            </IconButton>
            <TextField
              fullWidth
              placeholder="Type Message here"
              sx={{
                ml: 1,
                borderRadius: "7px",
                backgroundColor: "#F0F2F5",
                border: "0px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
              InputProps={{
                endAdornment: (
                  <Box display="flex" alignItems="center">
                    <IconButton sx={{ p: 0, mr: 1 }} aria-label="emoji">
                      <img
                        src={EmojiIcon}
                        alt="Emoji"
                        style={{ width: 20, height: 20 }}
                      />
                    </IconButton>
                    <IconButton sx={{ p: 0 }} aria-label="voice">
                      <img
                        src={VoiceIcon}
                        alt="Voice"
                        style={{ width: 20, height: 20 }}
                      />
                    </IconButton>
                  </Box>
                ),
              }}
            />
            <IconButton sx={{ p: 0, ml: 1 }} aria-label="send">
              <img src={SendIcon} alt="sendIcon" />
            </IconButton>
          </Box>
        </Box>

        <Box
          width="25%"
          display="flex"
          flexDirection="column"
          bgcolor="#FFFFFF"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            bgcolor="white"
            padding={2}
            height="64px"
            borderBottom="1px solid #e0e0e0"
            boxShadow="0px 5px 10px 0px #D1D1D140"
          >
            <IconButton>
              <img
                src={InfoQuestionIcon}
                alt="Info"
                style={{ width: "18px", height: "18px", cursor: "pointer" }}
              />
            </IconButton>
            <IconButton>
              <img
                src={SettingsIcon}
                alt="Settings"
                style={{ width: "18px", height: "18px", cursor: "pointer" }}
              />
            </IconButton>
          </Box>

          <Box flexGrow={1} p={2}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              <Typography variant="h6" fontWeight="bold" color="#333">
                Contact
              </Typography>
              <IconButton
                sx={{
                  background:
                    "linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)",
                  color: "white",
                  width: 30,
                  height: 30,
                  padding: 0,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    background:
                      "linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)",
                  },
                }}
              >
                <img
                  src={PlusIcon}
                  alt="Plus Icon"
                  style={{ height: "14px", width: "14px" }}
                />
              </IconButton>
            </Box>

            <Box display="flex" alignItems="center" mb={2}>
              <TextField
                fullWidth
                placeholder="Search"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  background: "#FFFFFF",
                  borderRadius: "20px",
                  paddingLeft: "10px",
                  height: "40px",
                  "& .MuiInputBase-root": {
                    height: "100%",
                    fontSize: "0.875rem",
                    color: "#7A7A7A",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    fontSize: "0.875rem",
                    color: "#7A7A7A",
                  },
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              />
            </Box>

            <Box display="flex">
              <List
                sx={{
                  overflowY: "auto",
                  maxHeight: "calc(100vh - 400px)",
                  flexGrow: 1,
                }}
              >
                {contactList.map((contact, index) => (
                  <ListItem key={index} button>
                    <Box
                      sx={{
                        position: "relative",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          border: "2px solid transparent",
                          background:
                            "linear-gradient(white, white) padding-box, linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%) border-box",
                        }}
                      />

                      <Box
                        sx={{
                          zIndex: 1,
                          fontWeight: "bold",
                          fontSize: "14px",
                          color: "transparent",
                          background:
                            "linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)",
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                        }}
                      >
                        {contact.name[0]}
                      </Box>
                    </Box>

                    <ListItemText
                      primary={contact.name}
                      secondary={contact.phone}
                      sx={{ ml: 2 }}
                    />
                  </ListItem>
                ))}
              </List>

              <Box
                ml={1}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    color="#8b43e0"
                    mt={1}
                    key={letter}
                  >
                    {letter}
                  </Typography>
                ))}
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Accordion
              expanded={expanded === "recent"}
              onChange={handleExpand("recent")}
            >
              <AccordionSummary
                expandIcon={<img src={ChevronIcon} alt="Chevron" />}
                aria-controls="recent-content"
                id="recent-header"
              >
                <Typography variant="subtitle1" fontWeight="bold" color="#333">
                  Recent
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>No recent contacts available.</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "favourites"}
              onChange={handleExpand("favourites")}
            >
              <AccordionSummary
                expandIcon={<img src={ChevronIcon} alt="Chevron" />}
                aria-controls="favourites-content"
                id="favourites-header"
              >
                <Typography variant="subtitle1" fontWeight="bold" color="#333">
                  Favourites
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>No favourites contacts available.</Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatBox;
