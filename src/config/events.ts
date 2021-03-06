/**
 * @description 事件配置
 * @author wangfupeng
 */

import { EMPTY_FN } from '../utils/const'

export type TCatalog = {
    tag: string
    id: string
    text: string
}

export default {
    onchangeTimeout: 200,

    onchange: EMPTY_FN,
    onfocus: EMPTY_FN,
    onblur: EMPTY_FN,

    onCatalogChange: null,
}
