import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// 自定义样式的Hero部分
const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(8, 0, 6),
  marginBottom: theme.spacing(4),
}));

/**
 * 首页组件
 * 展示网站主要功能和最新家教信息
 */
const Home = () => {
  // 模拟的家教数据
  const tutorPosts = [
    {
      id: 1,
      subject: '高中数学',
      location: '北京海淀',
      salary: '200元/小时',
      requirements: '重点大学在读研究生，有家教经验',
    },
    {
      id: 2,
      subject: '初中英语',
      location: '北京朝阳',
      salary: '180元/小时',
      requirements: '英语专业本科生，普通话标准',
    },
    {
      id: 3,
      subject: '小学全科',
      location: '北京东城',
      salary: '150元/小时',
      requirements: '师范类专业在读学生，有耐心',
    },
  ];

  return (
    <>
      <HeroSection>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
          >
            大学生家教招聘平台
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            连接优秀大学生与家长的桥梁，为您提供优质的家教服务
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button variant="contained" color="secondary">
              我要当家教
            </Button>
            <Button variant="outlined" color="inherit">
              我要请家教
            </Button>
          </Box>
        </Container>
      </HeroSection>

      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          最新家教信息
        </Typography>
        <Grid container spacing={4}>
          {tutorPosts.map((post) => (
            <Grid item key={post.id} xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.subject}
                  </Typography>
                  <Typography color="textSecondary">
                    地点：{post.location}
                  </Typography>
                  <Typography color="textSecondary">
                    薪资：{post.salary}
                  </Typography>
                  <Typography variant="body2" component="p">
                    要求：{post.requirements}
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
    </>
  );
};

export default Home;