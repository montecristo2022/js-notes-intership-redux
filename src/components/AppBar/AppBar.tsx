import { FC } from "react";
import { StatusFilter } from "../StatusFilter/StatusFilter";

export const AppBar: FC = () => {
  return (
    <header className="flex justify-between">
      <section className="grid gap-4">
        <h2 className="m-0 text-lg font-bold">Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};
