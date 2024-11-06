import React from "react";
import { Table } from "antd";

const TreeTable = ({ trees, columns }) => (
  <Table
    dataSource={trees}
    columns={columns}
    rowKey="id"
    pagination={{ pageSize: 9 }}
  />
);

export default TreeTable;
