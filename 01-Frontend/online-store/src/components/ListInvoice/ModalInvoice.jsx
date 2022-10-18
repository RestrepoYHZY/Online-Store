import { IconButton, Modal, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { styleModalInvoice } from "../../styles/theme";

import TableModal from "./TableModal";

const ModalInvoice = () => {
  const [modal, setModal] = useState(false);

  const openCloseModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <Tooltip title="View Invoice">
        <Box align="center">
          <IconButton
            onClick={openCloseModal}
            size="medium"
            edge="start"
            color="primary"
          >
            <IoEyeOutline />
          </IconButton>
        </Box>
      </Tooltip>

      <Modal open={modal} onClose={openCloseModal}>
        <Box sx={styleModalInvoice}>
          <TableModal />
        </Box>
      </Modal>
    </>
  );
};

export default ModalInvoice;
