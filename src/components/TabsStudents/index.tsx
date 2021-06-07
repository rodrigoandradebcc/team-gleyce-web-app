import React, { useCallback, useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { useTrainingSetup } from '../../hooks/TrainingSetupContext';
import { PlanProps } from '../../pages/Plans';
import * as S from './styles';

interface ITabsProps {
  tabsApi: PlanProps[];
  handleOpenModal?: (openModal: boolean) => void;
}

const TabsStudent: React.FC<ITabsProps> = ({ tabsApi, handleOpenModal }) => {
  const [tabActive, setTabActive] = useState(
    tabsApi ? tabsApi[0]?.description : '',
  );

  const handleToggleModalAddPlan = useCallback(() => {
    if (handleOpenModal) {
      handleOpenModal(true);
    }
  }, [handleOpenModal]);

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
              }}
            >
              {item.description}
            </S.Tab>
          ))}
      </S.ContainerTabs>
    </S.Container>
  );
};

export default TabsStudent;
