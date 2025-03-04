import {
  Role as RoleType,
  Roles as RolesType,
} from "@/features/projects/api/getProjects";
import * as s from "@/features/projects/components/Project/style.css";

const Role = ({ role }: { role: RoleType }) => {
  return (
    <div>
      <h4 className={s.sectionTitle}>{role.title}</h4>
      <ul className={s.sectionList}>
        {role.descriptions.map((description, i) => (
          <li key={i} className={s.sectionItem}>
            {description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Roles = ({ roles }: { roles: RolesType }) => {
  return (
    <div className={s.sectionContainer}>
      <h2 className={s.sectionHeading}>🛠️ 담당 역할 및 기여</h2>
      {/* 기본 */}
      {roles.default.map((defaultRole, idx) => (
        <Role key={idx} role={defaultRole} />
      ))}
      {/* 어드민 */}
      {roles.admin?.length && <h4>Admin</h4>}
      {roles.admin?.map((adminRole, idx) => (
        <Role key={idx} role={adminRole} />
      ))}
      {/* 클라이언트 */}
      {roles.client?.length && <h4>Client</h4>}
      {roles.client?.map((clientRole, idx) => (
        <Role key={idx} role={clientRole} />
      ))}
    </div>
  );
};
