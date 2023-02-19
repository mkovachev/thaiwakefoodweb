import { Tab, Tabs } from '@mui/material';
import Box from '@mui/material/Box';
import { SyntheticEvent, useState } from 'react';
import { CategoryItem } from '../../data';
import { LinkTab } from '../../shared';

export interface CategoriesNavbarProps {
  categories: CategoryItem[]
}

export const Navbar = ({ categories }: CategoriesNavbarProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%', background: 'transparent' }}>
      <Tabs
        value={value}
        variant="scrollable"
        scrollButtons="auto"
        onChange={handleChange}>
        {categories.map((category, index) => (
          <LinkTab key={index} label={category.title} href={`/${category.title}`} />
        ))}
      </Tabs>
    </Box>
  );
}