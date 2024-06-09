import React from "react";

const TableHead = ({ items }) => {
  return (

    <thead>
    <tr>
      {
        items.map((item, i) => <th scope="col" key={i}>{item}</th>)
      }
    </tr>
  </thead>   
  );
};

export default TableHead;
