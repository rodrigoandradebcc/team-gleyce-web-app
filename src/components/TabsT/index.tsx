import React, { useEffect, useState } from 'react';

import * as S from './styles';
import { PlanProps } from '../../pages/Plans';

interface ITabsProps {
  tabsApi: PlanProps[];
}

const TabsT: React.FC<ITabsProps> = ({ tabsApi }) => {
  const [tabs, setTabs] = useState<PlanProps[]>([]);
  const [tabActive, setTabActive] = useState(0);

  useEffect(() => {
    setTabs(tabsApi);
  }, [tabsApi]);

  return (
    <S.Container>
      <S.ContainerTabs>
        {tabs &&
          tabs.map((item, index) => (
            <S.Tab
              active={index === tabActive}
              key={item.description}
              onClick={() => {
                setTabActive(index);
                // onChangeTabs(item.id);
              }}
            >
              {item.description}
            </S.Tab>
          ))}
      </S.ContainerTabs>
    </S.Container>
  );
};

export default TabsT;
