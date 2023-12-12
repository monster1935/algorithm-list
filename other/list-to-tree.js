function buildTree(items, pid = 0) {
  //查找pid子节点
  let pitems = items.filter((s) => s.pid === pid);
  if (!pitems || pitems.length <= 0) return null;
  //递归
  pitems.forEach((item) => {
    const res = buildTree(items, item.id);
    if (res && res.length > 0) item.children = res;
  });
  return pitems;
}

const data = [
  { id: 1, name: "用户中心", orderNum: 1, pid: 0 },
  { id: 2, name: "订单中心", orderNum: 2, pid: 0 },
  { id: 3, name: "系统管理", orderNum: 3, pid: 0 },
  { id: 12, name: "所有订单", orderNum: 1, pid: 2 },
  { id: 14, name: "待发货", orderNum: 2, pid: 2 },
  { id: 15, name: "订单导出", orderNum: 2, pid: 2 },
  { id: 18, name: "菜单设置", orderNum: 1, pid: 3 },
  { id: 19, name: "权限管理", orderNum: 2, pid: 3 },
  { id: 21, name: "系统权限", orderNum: 1, pid: 19 },
  { id: 22, name: "角色设置", orderNum: 2, pid: 19 },
];

// console.log(buildTree(data));

function list2tree(data) {
  let map = {};
  let tree = [];
  data.forEach((item) => {
    map[item.id] = item;
  });
  data.forEach((item) => {
    if (!item.pid) {
      tree.push(item);
    } else {
      const temp = map[item.pid].children;
      if (!temp) {
        map[item.pid].children = [];
        map[item.pid].children.push(item);
      }
      map[item.pid].children.push(item);
    }
  });

  return tree;
}
console.log(list2tree(data));
