import React, { useState } from "react";
import { TitleLevel } from "/src/components/ui/title/title";
import { TabList, TabButton, TabTitle, Content } from "./style";

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <TabList>
        {tabs &&
          tabs.length &&
          tabs.map((item, index) => {
            if (index === activeTab) {
              return (
                <TabButton active key={item.title}>
                  <TabTitle active level={TitleLevel.H3}>
                    {item.title}
                  </TabTitle>
                </TabButton>
              );
            }
            return (
              <TabButton key={item.title} onClick={() => setActiveTab(index)}>
                <TabTitle level={TitleLevel.H3}>{item.title}</TabTitle>
              </TabButton>
            );
          })}
      </TabList>
      <Content>{tabs[activeTab].content}</Content>
    </>
  );
}

export default Tabs;
