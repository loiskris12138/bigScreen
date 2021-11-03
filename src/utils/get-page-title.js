import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Big Screen'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
