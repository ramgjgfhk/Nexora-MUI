import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import SmsIcon from '@mui/icons-material/Sms';

export const audienceData = [
  {
    title: 'Total Audience',
    value: '248,731',
    change: '34% increase',
    icon: <PeopleIcon sx={{color:'#276EF1'}}/>,
    iconColor: '#e3f2fd',
  },
  {
    title: 'Push Reachability',
    value: '200,000',
    change: '20% increase',
    icon: <NotificationsIcon sx={{color:'#00B84D'}}/>,
    iconColor: '#e8f5e9',
  },
  {
    title: 'Email Reachability',
    value: '175,000',
    change: '50% increase',
    icon: <EmailIcon sx={{color:'#9A48F1'}}/>,
    iconColor: '#F0E6FF',
  },
  {
    title: 'SMS Reachability',
    value: '220,000',
    change: '25% increase',
    icon: <SmsIcon sx={{color:'#000'}}/>,
    iconColor: '#F4F4F4',
  },
];
