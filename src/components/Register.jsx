import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from '@mui/material';

/**
 * 教师注册组件
 * 处理教师注册相关的表单和逻辑
 */
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    major: '',
    grade: '',
    subjects: '',
    experience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里添加表单提交逻辑
    console.log('提交的表单数据：', formData);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          教师注册
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="姓名"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="邮箱"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="手机号码"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="就读学校"
                name="university"
                value={formData.university}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="专业"
                name="major"
                value={formData.major}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>年级</InputLabel>
                <Select
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  label="年级"
                >
                  <MenuItem value="大一">大一</MenuItem>
                  <MenuItem value="大二">大二</MenuItem>
                  <MenuItem value="大三">大三</MenuItem>
                  <MenuItem value="大四">大四</MenuItem>
                  <MenuItem value="研究生">研究生</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="可教授科目"
                name="subjects"
                value={formData.subjects}
                onChange={handleChange}
                helperText="多个科目请用逗号分隔"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="家教经验"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  提交注册
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Register;