import React, { useCallback, useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { useTrainingSetup } from '../../hooks/TrainingSetupContext';
import { PlanProps } from '../../pages/Plans';
import * as S from './styles';

interface ITabsProps {
  tabsApi: PlanProps[];
  handleOpenModal?: (openModal: boolean) => void;
}

const TabsPlans: React.FC<ITabsProps> = ({ tabsApi, handleOpenModal }) => {
  const [tabActive, setTabActive] = useState(tabsApi ? tabsApi[0]?.id : '');
  const { changeTabPlanActive } = useTrainingSetup();

  const handleToggleModalAddPlan = useCallback(() => {
    if (handleOpenModal) {
      handleOpenModal(true);
    }
  }, [handleOpenModal]);

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

        <S.AddTabButton
          onClick={() => {
            handleToggleModalAddPlan();
          }}
        >
          <FiPlus size={16} />
        </S.AddTabButton>
      </S.ContainerTabs>
    </S.Container>
  );
};

export default TabsPlans;
