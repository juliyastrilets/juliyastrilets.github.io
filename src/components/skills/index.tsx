import styles from './style.module.scss';
import { SkillsList } from './skills-list';
import { EducationList, WorkHistoryList } from './skills-list/model';
import { ToolsList } from './tools-list';

export const Skills = () => {
  return (
    <>
      <div className={styles.skillsContent}>
        <SkillsList
          title="Образование"
          color="blue"
          items={EducationList}
        />
        <SkillsList
          title="Опыт работы"
          color="orange"
          items={WorkHistoryList}
        />
      </div>
      <ToolsList />
    </>
  );
};
