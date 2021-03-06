// import Vue from 'vue'
import vuet from '@/vuet/'
export default {
  moduleName (code) {
    const codeList = vuet.getModule('sys-module-names')
    if (!codeList.list) {
      return ''
    } else {
      for (let codeItem of codeList.list) {
        if (code === codeItem.code) {
          return codeItem.name
        }
      }
      return '-'
    }
  },
  pageName (code) {
    const codeList = vuet.getModule('sys-page-names')
    if (!codeList.list) {
      return ''
    } else {
      for (let codeItem of codeList.list) {
        if (code === codeItem.code) {
          return codeItem.name
        }
      }
      return '-'
    }
  }
}
