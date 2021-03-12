import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';

import Page from 'src/components/Page';
import Tabs from './Tabs/Tabs';
// import Budget from './Budget';
// import LatestOrders from './LatestOrders';
// import LatestProducts from './LatestProducts';
// import Sales from './Sales';
// import TasksProgress from './TasksProgress';
// import TotalCustomers from './TotalCustomers';
// import TotalProfit from './TotalProfit';
// import TrafficByDevice from './TrafficByDevice';
import ProfileSlider from './Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(6)
  },
  InstagramIcon: {
    color: '#d99298',
    verticalAlign: 'middle',
    fontFamily: 'inherit'
  },
  Accounts: {
    padding: theme.spacing(0, 0, 2, 8),
    [theme.breakpoints.down(768)]: {
      padding: theme.spacing(0, 0, 1, 8)
    },
    [theme.breakpoints.down(375)]: {
      padding: theme.spacing(0, 0, 1, 8)
    }
  },
  MultipleAccounts: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid container>
            <Grid item md={12} sm={12} className={classes.Accounts}>
              <p>
                <InstagramIcon className={classes.InstagramIcon} />
                ACCOUNTS
              </p>
            </Grid>
            <Grid container md={12} className={classes.MultipleAccounts}>
              <ProfileSlider />
            </Grid>
            <Grid container style={{ position: 'relative' }}>
              <Tabs />
            </Grid>
          </Grid>

          {/* <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalProfit />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice />
          </Grid> */}
          {/* <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts />
          </Grid> */}
          {/* <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
