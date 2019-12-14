import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Layout from '../templates/Layout';
import { Button, Card } from '../components';
import logoSrc from "../assets/images/logo.png";
import * as styles from './index.module.scss';

interface IndexPageProps { }

export default class IndexPage extends React.Component<IndexPageProps, {}> {

  public render() {
    return (
      <Layout>
        <div className="viewport center column">
          <div className={[styles.wrapper, "center", "column", "mb-4"].join(" ")}>
            <img src={logoSrc} alt="" className={[styles.companyLogo, "m-4"].join(" ")} />
            <h1 className="mb-1">Ogilvy</h1>
            <p className="secondary-text text-center mb-1">10 years · New York</p>
            <p className="secondary-text text-center mb-3">In the beginning, there was one Ogilvy, the company founded by David Ogilvy in 1948. Today, there is again one Ogilvy, in 83 countries and 132 offices. We are one doorway to a creative network, re-founded to make brands matter in a complex, noisy, hyper-connected world.</p>
            <Button>Contact Ogilvy</Button>
          </div>
          <Tabs className={styles.tabs} selectedTabClassName={styles.selectedTab}>
            <div className={[styles.wrapper, "center", "column"].join(" ")}>
              <TabList className={styles.tabList}>
                <Tab className="secondary-text pb-1">Summary</Tab>
                <Tab className="secondary-text pb-1">Performance</Tab>
                <Tab className="secondary-text pb-1">Portfolio</Tab>
                <Tab className="secondary-text pb-1">Reviews</Tab>
                <Tab className="secondary-text pb-1">Latest</Tab>
              </TabList>
            </div>

            <TabPanel className={[styles.tabContent, "mt-2"].join(" ")}>
              <Card className="p-1 m-1">
                <h2>Summary content 1</h2>
              </Card>
              <Card className="p-1 m-1">
                <h2>Summary content 1</h2>
              </Card>
            </TabPanel>
            <TabPanel>
              <Card>
                <h2>Performance content 2</h2>
              </Card>
            </TabPanel>
            <TabPanel>
              <h2>Portfolio content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Reviews content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Latest content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </Layout>
    );
  }
}
