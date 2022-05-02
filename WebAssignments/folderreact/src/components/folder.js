import classes from "./folder.module.css";
import Subfolder from "./subfolders";
let data = [
  {
    text: "root",
    children: [
      {
        text: "F1",
        children: [
          {
            text: "c1",
            children: [
              { text: "c11", children: [] },
              { text: "c12", children: [] },
              { text: "c13", children: [] },
            ],
          },
          { text: "c2", children: [] },
          { text: "c3", children: [] },
        ],
      },
      {
        text: "F2",
        children: [],
      },
    ],
  },
];

const folder = () => {
  return (
    <div>
      <Subfolder data={data} />
    </div>
  );
};

export default folder;
