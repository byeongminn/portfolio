"use client";

import { useGetAbout } from "@/features/about/hooks/useGetAbout";
import * as s from "./style.css";

export const About = () => {
  const { data } = useGetAbout();
  const { about } = data;

  return (
    <section className={s.container}>
      {about.map(({ title, contents }) => (
        <div key={title} className={s.wrapper}>
          <h1 className={s.title}>{title}</h1>
          <h2
            className={s.contents}
            dangerouslySetInnerHTML={{ __html: contents }}
          />
        </div>
      ))}
    </section>
  );
};
