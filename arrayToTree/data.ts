export const originData = [
  {
    id: 0,
    parentId: null,
    name: "生物"
  },
  {
    id: 1,
    parentId: 0,
    name: "动物"
  },
  {
    id: 2,
    parentId: 0,
    name: "植物"
  },
  {
    id: 3,
    parentId: 0,
    name: "微生物"
  },
  {
    id: 4,
    parentId: 1,
    name: "哺乳动物"
  },
  {
    id: 5,
    parentId: 1,
    name: "卵生动物"
  },
  {
    id: 6,
    parentId: 2,
    name: "种子植物"
  },
  {
    id: 7,
    parentId: 2,
    name: "蕨类植物"
  },
  {
    id: 8,
    parentId: 4,
    name: "大象"
  },
  {
    id: 9,
    parentId: 4,
    name: "海豚"
  },
  {
    id: 10,
    parentId: 4,
    name: "猩猩"
  },
  {
    id: 11,
    parentId: 5,
    name: "蟒蛇"
  },
  {
    id: 12,
    parentId: 5,
    name: "麻雀"
  }
];

export const treeData = {
  children: [
    {
      children: [
        {
          children: [
            { children: [], id: 8, name: "大象", parentId: 4 },
            { children: [], id: 9, name: "海豚", parentId: 4 },
            { children: [], id: 10, name: "猩猩", parentId: 4 }
          ],
          id: 4,
          name: "哺乳动物",
          parentId: 1
        },
        {
          children: [
            { children: [], id: 11, name: "蟒蛇", parentId: 5 },
            { children: [], id: 12, name: "麻雀", parentId: 5 }
          ],
          id: 5,
          name: "卵生动物",
          parentId: 1
        }
      ],
      id: 1,
      name: "动物",
      parentId: 0
    },
    {
      children: [
        { children: [], id: 6, name: "种子植物", parentId: 2 },
        { children: [], id: 7, name: "蕨类植物", parentId: 2 }
      ],
      id: 2,
      name: "植物",
      parentId: 0
    },
    { children: [], id: 3, name: "微生物", parentId: 0 }
  ],
  id: 0,
  name: "生物",
  parentId: null
};
