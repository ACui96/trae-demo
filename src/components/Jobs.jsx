import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

/**
 * 招聘信息组件
 * 展示所有家教职位信息，并提供筛选功能
 */
const Jobs = () => {
  // 模拟的招聘数据
  const jobs = [
    {
      id: 1,
      subject: '高中数学',
      location: '北京海淀',
      salary: '200元/小时',
      requirements: '重点大学在读研究生，有家教经验',
      frequency: '每周2次，每次2小时',
      studentLevel: '高二',
      contactPerson: '张女士',
    },
    {
      id: 2,
      subject: '初中英语',
      location: '北京朝阳',
      salary: '180元/小时',
      requirements: '英语专业本科生，普通话标准',
      frequency: '每周3次，每次1.5小时',
      studentLevel: '初三',
      contactPerson: '李先生',
    },
    {
      id: 3,
      subject: '小学全科',
      location: '北京东城',
      salary: '150元/小时',
      requirements: '师范类专业在读学生，有耐心',
      frequency: '每周5次，每次1小时',
      studentLevel: '小学三年级',
      contactPerson: '王女士',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        家教招聘信息
      </Typography>

      {/* 搜索和筛选区域 */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="关键词搜索"
              placeholder="输入科目、年级等关键词"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel>地区</InputLabel>
              <Select label="地区">
                <MenuItem value="海淀">海淀区</MenuItem>
                <MenuItem value="朝阳">朝阳区</MenuItem>
                <MenuItem value="东城">东城区</MenuItem>
                <MenuItem value="西城">西城区</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel>科目</InputLabel>
              <Select label="科目">
                <MenuItem value="数学">数学</MenuItem>
                <MenuItem value="英语">英语</MenuItem>
                <MenuItem value="语文">语文</MenuItem>
                <MenuItem value="物理">物理</MenuItem>
                <MenuItem value="化学">化学</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button variant="contained" fullWidth>
              搜索
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* 招聘信息列表 */}
      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid item key={job.id} xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {job.subject}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  地点：{job.location}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  薪资：{job.salary}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  学生年级：{job.studentLevel}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  上课频率：{job.frequency}
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                  要求：{job.requirements}
                </Typography>
                <Typography color="textSecondary">
                  联系人：{job.contactPerson}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  查看详情
                </Button>
                <Button size="small" color="primary">
                  立即申请
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Jobs;