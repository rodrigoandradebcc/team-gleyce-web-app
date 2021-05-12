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
  const [tabs, setTabs] = useState<PlanProps[]>([]);
  const [tabActive, setTabActive] = useState(0);
  const { changeTabActive } = useTrainingSetup();
  const modalOpen = false;

  useEffect(() => {
    setTabs(tabsApi);
  }, [tabsApi]);

  const handleToggleModalAddPlan = useCallback(() => {
    console.log('dentro do tabs plans', !modalOpen);

    if (handleOpenModal) {
      handleOpenModal(!modalOpen);
    }
  }, [handleOpenModal, modalOpen]);

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
                changeTabActive(item.description);
                // onChangeTabs(item.id);
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
