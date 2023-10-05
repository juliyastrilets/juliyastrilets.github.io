import styles from './style.module.scss';
import { SkillsList } from './skills-list';
import { EducationList, WorkHistoryList } from './skills-list/model';
import { ToolsList } from './tools-list';

export const Skills = () => {
  return (
    <>
      <div className={styles.skillsContent}>
        <SkillsList
          title="Education"
          color="blue"
          items={EducationList}
        />
        <SkillsList
          title="Work History"
          color="orange"
          items={WorkHistoryList}
        />
      </div>
      <ToolsList />
    </>
  );
};
