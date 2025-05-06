import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

/**
 * 导航栏组件
 * 提供网站的主要导航功能
 */
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            家教招聘
          </Typography>
          <Button color="inherit" onClick={() => navigate('/jobs')}>
            招聘信息
          </Button>
          <Button color="inherit" onClick={() => navigate('/register')}>
            教师注册
          </Button>
          <Button color="inherit" onClick={() => navigate('/login')}>
            登录
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;