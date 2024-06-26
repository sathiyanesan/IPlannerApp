import React, { createContext, useState } from "react"


export interface DialogType {
    open: boolean;
    handleClickOpen: () => void;
    handleClose: () => void;
}

export const DialogContext = createContext<DialogType | null>(null);
const DialogContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (<>
        <DialogContext.Provider value={{ open, handleClickOpen, handleClose }}>
            {children}
        </DialogContext.Provider>
    </>)

}

export default DialogContextProvider;
