import React, { useState } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import FeedIcon from '@mui/icons-material/Feed';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const ChildNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      {/* Button to open drawer on small screens */}
      <IconButton onClick={toggleDrawer} sx={{ display: { lg: 'none', md: 'none' } }}>
        <MenuIcon />
      </IconButton>

      {/* Navigation for small screens (Drawer) */}
      <Drawer
        anchor="left"
        variant="temporary"
        onClose={toggleDrawer}
        open={isDrawerOpen} 
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#25378f',
            border: 'white', 
        
          },
        }}
      >
        <IconButton onClick={toggleDrawer} aria-label="close drawer" sx={{ alignSelf: 'flex-end', marginRight: 0 }}>
          <CloseIcon  />
        </IconButton>
        <List className='h-full text-white  bg-blue-900 '>
          <ListItem >
            <ListItemIcon><CalendarMonthIcon className='text-white' /></ListItemIcon>
            <ListItemText primary="Book Appointment" />
          </ListItem>
          <ListItem >
            <ListItemIcon><MedicalServicesIcon className='text-white' /></ListItemIcon>
            <ListItemText primary="Treatment" />
          </ListItem>
          <ListItem >
            <ListItemIcon><QuestionAnswerIcon  className='text-white'/></ListItemIcon>
            <ListItemText primary="Ask a Question" />
          </ListItem>
          <ListItem >
            <ListItemIcon><AccountCircleIcon  className='text-white'/></ListItemIcon>
            <ListItemText primary="Plan My Surgery" />
          </ListItem>
          <ListItem >
            <ListItemIcon><FeedIcon  className='text-white'/></ListItemIcon>
            <ListItemText primary="Health Feed" />
          </ListItem>
        </List>
      </Drawer>

      {/* Navigation for large screens */}
      <div className="hidden md:flex justify-evenly items-center bg-violet-200 h-[60px] font-semibold text-lg">
        <div>
          <p className="flex items-center"><CalendarMonthIcon />Book Appointment</p>
        </div>
        <div>
          <p className="flex items-center"><MedicalServicesIcon />Treatment</p>
        </div>
        <div>
          <p className="flex items-center"><QuestionAnswerIcon />Ask a Question</p>
        </div>
        <div>
          <p className="flex items-center"><AccountCircleIcon />Plan My Surgery</p>
        </div>
        <div>
          <p className="flex items-center"><FeedIcon />Health Feed</p>
        </div>
      </div>
    </div>
  );
};

export default ChildNav;
