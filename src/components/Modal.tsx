import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContext, DialogType } from '../store/DialogContext';
import DateTimeSelect from './DateTimeSelect';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Modal({ open, setOpen, planType, setPlanType, options }: any) {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  // const { open, handleClickOpen, handleClose } = React.useContext(DialogContext) as DialogType

  // const [planType, setPlanType] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setPlanType(event.target.value);
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        {/* <DialogTitle>Add Plans</DialogTitle> */}
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          {/* <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            name="title"
            label="Add title"
            type="text"
            fullWidth
            variant="standard"
          />
          <Select
            value={planType}
            onChange={handleChange}
            displayEmpty
            fullWidth
            margin='dense'
            inputProps={{ 'aria-label': 'Without label' }}
          >
            {options?.map((option: string) => (
              <MenuItem
                key={option}
                // selected={option === "Task"}
                value={option}
              >
                {option}
              </MenuItem>
            ))}

          </Select>
          <DateTimeSelect />
          <TextField
            id="outlined-textarea"
            label="Add Description"
            placeholder="Add Description"
            multiline
            fullWidth
            margin="dense"
            maxRows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}