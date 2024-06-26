import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
// import { DialogContext, DialogType } from '../store/DialogContext';
import Modal from './Modal';

const options = ["Task", "Event"];
const CreateMenu = () => {


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [open, setOpen] = React.useState(false);
    const openMenu = Boolean(anchorEl);
    const [planType, setPlanType] = React.useState('Task');

    // const { open, handleClickOpen, handleClose } = React.useContext(DialogContext) as DialogType



    const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);

    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleModal = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, value: string) => {
        console.log("VALUE", event.currentTarget.innerText, value);
        if (event.currentTarget.innerText === value) {
            setPlanType(event.currentTarget.innerText)
        }
        setOpen(true);
        handleCloseMenu();
    };

    return (
        <>

            <div>
                <Button
                    id="basic-button"
                    variant="outlined"
                    aria-controls={openMenu ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu ? 'true' : undefined}
                    onClick={handleClickMenu}
                    sx={{ margin: "10px" }}
                >
                    Create <AddIcon />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleCloseMenu}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {options.map((option) => (
                        <MenuItem
                            key={option}
                            // selected={option === "Task"}
                            onClick={(e) => handleModal(e, option)}
                        >
                            {option}
                        </MenuItem>
                    ))}

                </Menu>
            </div>
            <Modal open={open} setOpen={setOpen} planType={planType} setPlanType={setPlanType} options={options}/>
        </>

    );
}

export default CreateMenu;