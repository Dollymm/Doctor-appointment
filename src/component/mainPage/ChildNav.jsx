import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import FeedIcon from '@mui/icons-material/Feed';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const ChildNav = () => {
  return (
   <div className='flex justify-evenly items-center bg-violet-200 h-[60px] font-semibold gap-3'>
    <div>
        <p><span><CalendarMonthIcon/></span>Book Appointment</p>
    </div>
    <div>
        <p><span><MedicalServicesIcon/></span>Treatment</p>
    </div>
    <div>
        <p><span><QuestionAnswerIcon/></span>Ask a Question</p>
    </div>
    <div>
        <p><span><AccountCircleIcon/></span>Plan My Sergery</p>
    </div>
    <div>
        <p><span><FeedIcon/></span>Health Feed</p>
    </div>
   </div>
  )
}

export default ChildNav