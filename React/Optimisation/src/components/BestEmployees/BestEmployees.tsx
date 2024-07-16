import React, { useEffect, useState, useCallback } from "react";
import { IBestEmployees } from "../../api.ts";
import "./styles.css";

interface IBestEmployeesData {
  getApi: () => Promise<IBestEmployees>;
}

export const BestEmployees = React.memo(({ getApi }: IBestEmployeesData) => {
  const [employees, setEmployees] = useState<IBestEmployees | null>(null);

  const memoizedGetApi = useCallback(getApi, [getApi]);

  useEffect(() => {
    memoizedGetApi().then((res) => setEmployees(res));
  }, [memoizedGetApi]);

  if (!employees) return null;

  return (
    <div className="container">
      <h2>Best employee of the year</h2>
      <img src={employees.image} width={400} height={400} alt="" />
      <p>
        {employees.name}: {employees.position}
      </p>
    </div>
  );
});
