import React, { useEffect, useState } from 'react';
import { useTrainingSetup } from '../../hooks/TrainingSetupContext';
import { PlanProps } from '../../pages/Plans';
import * as S from './styles';

interface ITabsProps {
  tabsApi: PlanProps[];
}

const TabsPlans: React.FC<ITabsProps> = ({ tabsApi }) => {
  const [tabActive, setTabActive] = useState(tabsApi ? tabsApi[0]?.id : '');
  const { changeTabPlanActive } = useTrainingSetup();

  useEffect(() => {
    if (tabsApi[0]?.description) {
      const { description, id } = tabsApi[0];
      setTabActive(description);
      changeTabPlanActive(id);
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
                changeTabPlanActive(item.id);
              }}
            >
              {item.description}
            </S.Tab>
          ))}
      </S.ContainerTabs>
    </S.Container>
  );
};

export default TabsPlans;
