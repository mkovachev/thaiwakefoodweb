import { Tab, Tabs } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { CategoryItem } from '../../data';

export interface CategoriesNavbarProps {
  categories: CategoryItem[]
}

interface LinkTabProps {
  label?: string;
  href?: string;
}

const LinkTab = (props: LinkTabProps) => {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
      }}
      {...props}
    />
  );
}

export const Navbar = ({ categories }: CategoriesNavbarProps) => {
  const [value, setValue] = useState(0);

  const slideLeft = () => {
    const slider = document.getElementById('slider')
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById('slider')
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    slideLeft()
  };


  return (
    <Box sx={{ width: '100%', background: 'transparent' }}>
      <Tabs value={value} onChange={handleChange}>
        {categories.map((category, index) => (
          <LinkTab key={index} label={category.title} href={`/${category.title}`} />
        ))}
      </Tabs>
    </Box>
  );
}