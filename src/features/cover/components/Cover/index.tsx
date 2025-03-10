"use client";

import Image from "next/image";
import { useGetCover } from "@/features/cover/hooks/useGetCover";
import Search from "./search.svg";
import * as s from "./style.css";
import { IMAGE_URL } from "@/shared/constants";

export const Cover = () => {
  const { data } = useGetCover();
  const { title, stacks, info } = data;

  return (
    <section className={s.container}>
      <div className={s.contentWrapper}>
        <div className={s.content}>
          {/* 타이틀 */}
          <div className={s.titleWrapper}>
            <div className={s.p1}>
              <span>{title.p1}</span>
              <div className={s.searchIconWrapper}>
                <Search className={s.searchIcon} viewBox="0 0 72 72" />
              </div>
            </div>
            <div className={s.p2}>{title.p2}</div>
          </div>

          {/* 기술 스택 */}
          <div className={s.stacksWrapper}>
            {Object.entries(stacks).map(([type, skills]) => (
              <div key={type} className={s.stacks}>
                <h2 className={s.type}>{type}</h2>
                <div className={s.stackWrapper}>
                  {skills.map(({ iconUrl, name }) => (
                    <div key={name} className={s.stack}>
                      <Image
                        className={s.stackIcon}
                        src={iconUrl}
                        alt={name}
                        width={24}
                        height={24}
                        priority
                      />
                      <h3 className={s.stackName}>{name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 커버 이미지 */}
          <div className={s.imageWrapper}>
            <Image
              className={s.image}
              src={`${IMAGE_URL}/developer.svg`}
              alt="developer"
              fill
              sizes={`
                (max-width: 767px) 50vw,
                (max-width: 991px) 20rem,
                (max-width: 1439px) 25rem,
                31.25rem
              `}
              priority
            />
          </div>
        </div>
      </div>

      {/* 정보 */}
      <div className={s.infoWrapper}>
        <h2 className={s.info}>{info.number}</h2>
        <h2 className={s.info}>{info.email}</h2>
      </div>
    </section>
  );
};
