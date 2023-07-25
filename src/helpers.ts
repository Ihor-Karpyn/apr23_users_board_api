export interface BaseObjectWithId {
  id: number;
}

export const getNewId = (arr: BaseObjectWithId[]): number => {
  const ids = arr.map(({ id }) => id);

  if (ids.length === 0) {
    return 1;
  }

  const maxId = Math.max(...ids);

  return maxId + 1;
}
