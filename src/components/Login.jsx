import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
} from '@mui/material';

/**
 * 登录组件
 * 处理用户登录相关的表单和逻辑
 */
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里添加登录逻辑
    console.log('登录信息：', formData);
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          登录
        </Typography>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            label="邮箱"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            required
            fullWidth
            label="密码"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
          />
          <Box sx={{ mt: 3 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
            >
              登录
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;