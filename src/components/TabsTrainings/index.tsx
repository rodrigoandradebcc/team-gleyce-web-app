import React, { useEffect, useState } from 'react';
import { PlanProps } from '../../pages/Plans';
import * as S from './styles';

interface ITabsProps {
  tabsApi: PlanProps[];
  setTypeTrainingActive: (description: string) => void;
}

const TabsTrainings: React.FC<ITabsProps> = ({
  tabsApi,
  setTypeTrainingActive,
}) => {
  const [tabActive, setTabActive] = useState(
    tabsApi ? tabsApi[0]?.description : '',
  );

  useEffect(() => {
    if (tabsApi[0]?.description) {
      const { description } = tabsApi[0];
      setTabActive(description);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabsApi[0]?.description]);

  return (
    <S.Container>
      <S.ContainerTabs>
        {tabsApi &&
          tabsApi.map(item => (
            <S.Tab
              active={item.description === tabActive}
              key={item.description}
              onClick={() => {
                setTabActive(item.description);
                setTypeTrainingActive(item.description);
              }}
            >
              {item.description}
            </S.Tab>
          ))}
      </S.ContainerTabs>
    </S.Container>
  );
};

export default TabsTrainings;
