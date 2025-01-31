import Link from "next/link";
import Github from "./github.svg";
import * as s from "./style.css";

export const Closing = () => {
  return (
    <section className={s.container}>
      {/* 클로징 */}
      <div className={s.closingWrapper}>
        <h1 className={s.thanks}>감사합니다</h1>
        <h2 className={s.aspiration}>
          앞으로는 기능 구현을 넘어 성능 최적화와 문제 해결 능력을 갖춘
          프론트엔드 개발자로 성장하고자 하며,
          <br />
          어떠한 문제도 해결해 나갈 수 있는 개발자가 되고자 합니다.
        </h2>
        <Link href="https://github.com/byeongminn" className={s.githubLink}>
          <Github />
        </Link>
      </div>

      {/* 저작권 */}
      <div className={s.copyrightWrapper}>
        <p className={s.copyright}>
          Copyright 2025. <span className={s.onwer}>Byeongmin Jeon</span> all
          rights reserved.
        </p>
      </div>
    </section>
  );
};
