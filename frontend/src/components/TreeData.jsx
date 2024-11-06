import React, { useEffect, useState } from "react";
import TreeTable from "./TreeTable";
import { Skeleton } from "antd";
import {
  fetchTreesByArrodissement,
  fetchTreesByType,
} from "../services/treeService";

const TreeData = ({ selectedKey }) => {
  const [trees, setTrees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrees = async () => {
      setLoading(true);
      try {
        const data =
          selectedKey === "1"
            ? await fetchTreesByArrodissement()
            : await fetchTreesByType();
        setTrees(data);
      } catch (error) {
        console.error("Failed to fetch tree data", error);
      } finally {
        setLoading(false);
      }
    };

    getTrees();
  }, [selectedKey]);

  const columns =
    selectedKey === "1"
      ? [
          {
            title: "Arrondissement",
            dataIndex: "arrondissement",
            key: "arrondissement",
            width: 200,
          },
          {
            title: "Nombre d'arbres",
            dataIndex: "tree_count",
            key: "tree_count",
            width: 100,
          },
        ]
      : [
          { title: "Type", dataIndex: "type", key: "type", width: 200 },
          {
            title: "Nombre d'arbres",
            dataIndex: "tree_count",
            key: "tree_count",
            width: 100,
          },
        ];

  return (
    <div>
      {loading ? <Skeleton /> : <TreeTable trees={trees} columns={columns} />}
    </div>
  );
};
export default TreeData;
