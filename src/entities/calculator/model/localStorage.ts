import { FORM_DATA_KEY, formInit, lStore } from 'shared/config'

export function getFormLsData<T>() {
  const getStore = lStore.getItem(FORM_DATA_KEY)

  return getStore ? (JSON.parse(getStore) as T) : formInit
}

export function setFormLsData<T>(formData: T) {
  lStore.setItem(FORM_DATA_KEY, JSON.stringify(formData, null, '\t'))
}
