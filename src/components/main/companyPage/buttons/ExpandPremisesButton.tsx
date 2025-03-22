import React, {FC} from 'react';
import {Box, Button, Modal, Typography} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#023047',
    color: '#FFB35C',
    border: 'none',
    borderRadius: '20px',
    boxShadow: 24,
    p: 7,
    textAlign: 'center',
};

const style2 = {
    margin: '20px',
    width: '200px',
    height: '30px',
    bgcolor: '#FFB35C',
    color: '#023047FF',
    border: 'none',
    borderRadius: '40px',
    boxShadow: 24,
    p: 4
};
const ExpandPremisesButton: FC<{}> = ({}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <button onClick={handleOpen} className={"recuite-button"}>Agrandir le local</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Agrandissez vos locaux
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        Niveau 2 <Button sx={style2}>payer 500 000€</Button>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        Niveau 3 <Button sx={style2}>payer 1 500 000€</Button>
                    </Typography>
                </Box>
            </Modal>
        </>
    );
};

export default ExpandPremisesButton;