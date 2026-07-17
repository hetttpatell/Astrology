import defaultCmsData from './cms.json';

const CMS_STORAGE_KEY = 'dr_jalpesh_mehta_cms_data_v2';

export const getCmsData = () => {
  const data = localStorage.getItem(CMS_STORAGE_KEY);
  if (!data) {
    // Seed localStorage with default JSON
    localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(defaultCmsData));
    return defaultCmsData;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return defaultCmsData;
  }
};

export const saveCmsData = (newData) => {
  localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(newData));
  // Dispatch a event to update UI immediately
  window.dispatchEvent(new Event('cmsDataChange'));
};

export const resetCmsData = () => {
  localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(defaultCmsData));
  window.dispatchEvent(new Event('cmsDataChange'));
  return defaultCmsData;
};
