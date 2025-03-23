import React, {FC, useEffect, useState} from 'react';
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

interface ExpandPremisesButtonProps {
    localLevel: string;
}

const ExpandPremisesButton: FC<ExpandPremisesButtonProps> = ({localLevel}) => {
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
                    <Typography id="modal-modal-title" variant="h6">
                        Agrandissez vos locaux
                    </Typography>
                    {localLevel === "Niveau 1" && (
                        <Typography sx={{mt: 2}}>
                            Niveau 2 <Button sx={style2}>Payer 5 000 000€</Button>
                        </Typography>
                    )}
                    {localLevel === "Niveau 2" && (
                        <Typography sx={{mt: 2}}>
                            Niveau 3 <Button sx={style2}>Payer 1 500 000€</Button>
                        </Typography>
                    )}
                    {localLevel === "Niveau 3" && (
                        <Typography sx={{mt: 2}}>Local amélioré au maximum</Typography>
                    )}
                </Box>
            </Modal>
        </>
    );
};

export default ExpandPremisesButton;