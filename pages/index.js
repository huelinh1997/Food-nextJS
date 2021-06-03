import React from 'react';
import Head from 'next/head';
import { Row, Col } from 'reactstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import MainLayout from '../components/MainLayout';
import Search from '../components/SearchInput';
import Card from '../components/Card';
// import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout className="home-page" typeHeader="cart">
        <>
          <h1 className="main-title">Delicious food for you</h1>
          <Search placeholder="Search" />
          <div className="pt-5">
            <Tabs className="custom-tab">
              <TabList className="custom-tab-list custom-tab-transparent d-flex">
                <Tab>Foods</Tab>
                <Tab>Drinks</Tab>
                <Tab>Snacks</Tab>
                <Tab>Sauce</Tab>
              </TabList>

              <TabPanel className="custom-tab-panel">
                <div>
                  <div className="products">
                    <div className="products-wrap d-flex pt-5 p-b-80">
                      <Row className="flex-nowrap p-r-35">
                        <Col>
                          <div className="products-card">
                            <Card />
                          </div>
                        </Col>
                        <Col>
                          <div className="products-card">
                            <Card />
                          </div>
                        </Col>
                        <Col>
                          <div className="products-card">
                            <Card />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel className="custom-tab-panel">
                <h2>Any content 2</h2>
              </TabPanel>
              <TabPanel className="custom-tab-panel">
                <h2>Any content 3</h2>
              </TabPanel>
              <TabPanel className="custom-tab-panel">
                <h2>Any content 4</h2>
              </TabPanel>
            </Tabs>
          </div>
        </>
      </MainLayout>
    </div>
  );
}
