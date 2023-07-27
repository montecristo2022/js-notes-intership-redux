import { FC } from "react";
import { StatusFilter } from "../StatusFilter/StatusFilter";
import css from "./AppBar.module.css";

export const AppBar: FC = () => {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};
