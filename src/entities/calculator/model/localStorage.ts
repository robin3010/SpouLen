import { FORM_DATA_KEY, lStore } from 'shared/consts'

export function getSavedToLsForm<T>() {
  const getStore = lStore.getItem(FORM_DATA_KEY)

  return getStore ? (JSON.parse(getStore) as T) : {}
}

export const saveFormToLs = <T>(newData: T) => {
  lStore.setItem(FORM_DATA_KEY, JSON.stringify(newData, null, '\t'))
}
