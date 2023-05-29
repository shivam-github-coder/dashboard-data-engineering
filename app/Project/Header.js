import {
  Box,
  Breadcrumbs,
  Divider,
  Grid,
  InputAdornment,
  Modal,
  Skeleton,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Add, Reorder, SearchRounded, Window } from "@mui/icons-material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRouter } from "next/navigation";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
};

function Header() {
  const router = useRouter();
  const [ModalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const [ModalData, setModalData] = useState({
    FlowN:"",
    FolderN:""
  })

  const AddsetModalData = (e) =>{
    setModalData((prev) => ({...prev,[e.target.name]:e.target.value}))
  }
  
  return (
    <>
      <Modal
        open={ModalOpen}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            className="font-bold"
          >
            New Flow
          </Typography>
          <Box className="w-full bg-transparent">
            <TextField
              id="outlined-required"
              label="Flow Name *"
              variant="standard"
              fullWidth
              className="mt-5 bg-transparent"
              name="FlowN"
              onChange={AddsetModalData}
              />
            <TextField
              id="outlined-required"
              label="Folder Name (Optional)"
              variant="standard"
              fullWidth
              className="mt-5 bg-transparent"
              onChange={AddsetModalData}
              name="FolderN"
            />
            <Box className="flex justify-evenly items-center w-full mt-10">
              <Box>
                <button
                  onClick={handleClose}
                  className="w-full px-10 py-2 text-sm rounded-lg bg-purple-200 capitalize"
                >
                  cancel
                </button>
              </Box>
              <Box>
                <button onClick={() => router.push(`/AddFlow?name=${ModalData.FlowN}`)} disabled={ModalData.FlowN?.length > 0 ? false : true} className={`w-full px-10 py-2 text-sm rounded-lg ${ModalData?.FlowN?.length > 0 ? "bg-blue-600 text-white" :"bg-slate-300"} capitalize`}>
                  create
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
      <Grid
        container
        display="flex"
        alignItems="center"
        className=" shadow border-2"
      >
        <Grid item xs={6} className="py-3">
          <Box className="flex justify-start items-center">
            <Box className="bg-blue-300 h-8 w-8 rounded-lg flex justify-center items-center mx-5">
              <ChevronLeftIcon />
            </Box>
            <Box>
              <Box className="flex items-center">
                <Typography
                  variant="caption"
                  className="font-bold text-blue-950"
                >
                  Project
                </Typography>
                <ChevronRightIcon fontSize="small" className="mx-1.5" />
                <Typography variant="caption" className="font-bold">
                  Supply Chain
                </Typography>
              </Box>
              <Typography variant="h5" className="font-semibold">
                Supply Chain Flows
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} className="py-3">
          <Box className="flex items-center justify-end">
            <button
              // onClick={() => router.push("/AddFlow")}
              onClick={handleOpen}
              className="bg-blue-500 px-4 py-2 text-white rounded-lg flex items-center"
            >
              <Add className="mr-1" /> Add Flow
            </button>
            <Box className="bg-blue-200 px-3 py-2 text-white mx-3 rounded-lg flex items-center cursor-pointer">
              <MoreHorizIcon />
            </Box>
          </Box>
        </Grid>
        {/* <Divider className="w-full bg-slate-300" /> */}
      </Grid>
    </>
  );
}

export default Header;
