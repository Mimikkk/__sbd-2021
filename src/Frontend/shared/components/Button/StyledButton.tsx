import React, { VFC, ReactElement } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Props } from 'shared/components/Navigator/Menu';
import { Button, Icon } from '@mui/material';

export interface ButtonProps {
  title: string;
  icon: ReactElement;
}

export const StyledButton: VFC<ButtonProps> = ({ title, icon }) => {
  return (
    <Button
      variant="contained"
      startIcon={
        <div
          style={{
            color: 'rgba(124, 77, 255, 1)',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {icon}
        </div>
      }
      size="large"
      style={{
        backgroundColor: 'rgba(124, 77, 255, 0.05)',
        color: 'rgba(0, 0, 0, 0.87)',
        textTransform: 'none',
        boxShadow: 'none',
        alignItems: 'center',
      }}
    >
      {title}
    </Button>
  );
};
