import CreateMenu from '../components/CreateMenu'
// import GridViewer from '../components/GridViewer';
import Modal from '../components/Modal';
import Navbar from '../components/Navbar'
import { useState } from 'react';
// import DialogContextProvider from '../store/DialogContext';
const Home = () => {

    return (<>
       {/* <DialogContextProvider> */}
        <Navbar />
        <CreateMenu />
        {/* <GridViewer /> */}
      {/* </DialogContextProvider> */}
      
    </>)
}

export default Home;