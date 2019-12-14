import * as React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Layout from "../templates/Layout";
import { Card, CompanyOverview } from "../components";

import { company, companyParamsStructure } from "../data";
import * as styles from "./index.module.scss";

interface IndexPageProps {}

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <Layout companyLogoSrc={company.logoSrc} companyLink={company.link}>
        <div className="viewport center column">
          <div
            className={[styles.wrapper, "center", "column", "mb-4"].join(" ")}
          >
            <CompanyOverview
              name={company.name}
              link={company.link}
              date={company.date}
              city={company.city}
              descriprion={company.descriprion}
              logoSrc={company.logoSrc}
            />
          </div>
          <Tabs
            className={styles.tabs}
            selectedTabClassName={styles.selectedTab}
          >
            <div className={[styles.wrapper, "center", "column"].join(" ")}>
              <TabList className={[styles.tabList, "mb-2"].join(" ")}>
                {companyParamsStructure
                  .map(
                    (category, i) =>
                      company.params[category.id] && (
                        <Tab
                          key={`tab--${i}`}
                          className="secondary-color-text pb-1"
                        >
                          {category.name}
                        </Tab>
                      )
                  )
                  .filter(Boolean)}
              </TabList>
            </div>

            {companyParamsStructure
              .map(
                (category, k) =>
                  company.params[category.id] && (
                    <TabPanel
                      key={`tab-panel--${k}`}
                      className={[styles.tabContent].join(" ")}
                    >
                      {category.children &&
                        category.children.map(
                          (subCategory, i) =>
                            company.params[category.id][subCategory.id] && (
                              <Card
                                key={`card--${i}`}
                                name={subCategory.name}
                                id={subCategory.id}
                                params={
                                  company.params[category.id][subCategory.id]
                                }
                                lines={subCategory.params}
                                description={subCategory.description}
                                icon={subCategory.icon}
                              />
                            )
                        )}
                    </TabPanel>
                  )
              )
              .filter(Boolean)}
          </Tabs>
        </div>
      </Layout>
    );
  }
}
