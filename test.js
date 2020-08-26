function cloneDeep(target) {
  let result
  // 判断克隆对象的目标数据是对象还是数组
  if (target instanceof Object) {
    result = {}
  } else if (target instanceof Array) {
    result = []
  } else {
    return target
  }

  // 遍历目标数据
  for (const key in tarhet) {
    // 收集个体数据
    let item = target[i]
    // 拷贝的过程，拷贝的数据不能有引用数据类型，一旦有引用数据类型继续拆解克隆
    if (item instanceof Object || item instanceof Array) {
      result[i] = cloneDeep(item)
    } else {
      result[i] = item
    }
  }
  return result
}
