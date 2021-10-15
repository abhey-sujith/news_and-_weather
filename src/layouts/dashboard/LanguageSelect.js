import { useRef, useState } from 'react';
// material
import { alpha } from '@mui/material/styles';
import {
  Box,
  MenuItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  InputLabel,
  FormControl,
  Select
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getNewsDataAsync, setLanguage } from '../../features/slice/appSlice';
// components
import MenuPopover from '../../components/MenuPopover';

// ----------------------------------------------------------------------

const LANG = [
  {
    value: 'en',
    label: 'English'
  },
  {
    value: 'ar',
    label: 'Arabic'
  },
  {
    value: 'de',
    label: 'German'
  },
  {
    value: 'el',
    label: 'Greek'
  },
  {
    value: 'es',
    label: 'Spanish'
  },
  {
    value: 'fr',
    label: 'French'
  },
  {
    value: 'he',
    label: 'Hebrew'
  },
  {
    value: 'hi',
    label: 'Hindi'
  },
  {
    value: 'it',
    label: 'Italian'
  },
  {
    value: 'ja',
    label: 'Japanese'
  },
  {
    value: 'ml',
    label: 'Malayalam'
  },
  {
    value: 'ml',
    label: 'Marathi'
  },
  {
    value: 'nl',
    label: 'Dutch'
  },
  {
    value: 'no',
    label: 'Norwegian'
  },
  {
    value: 'pt',
    label: 'Portuguese'
  },
  {
    value: 'ro',
    label: 'Romanian'
  },
  {
    value: 'ru',
    label: 'Russian'
  },
  {
    value: 'sv',
    label: 'Swedish'
  },
  {
    value: 'ta',
    label: 'Tamil'
  },
  {
    value: 'te',
    label: 'Telugu'
  },
  {
    value: 'uk',
    label: 'Ukrainian'
  },
  {
    value: 'zh',
    label: 'Chinese'
  }
];

// ----------------------------------------------------------------------

export default function LanguageSelect() {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log(e.target);
    setValue(e.target.value);

    dispatch(setLanguage({ value: e.target.value }));
    dispatch(getNewsDataAsync());
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">English</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Language"
            onChange={handleChange}
          >
            {LANG.map((option) => (
              <MenuItem value={option.value}>{option.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}