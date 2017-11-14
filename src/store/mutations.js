
// ---------我秀模块-----------
// 保存显示分销遮罩层开关
const SAVE_SHARESHADE = 'SAVE_SHARESHADE'
// 保存标签数据
const SAVE_SHOWLABEL = 'SAVE_SHOWLABEL'

export default {
  [SAVE_SHARESHADE](state, payload) {
    state.showShareShade = payload.showShareShade
  },
  [SAVE_SHOWLABEL](state, payload) {
    state.showLabel = payload.tags
  }
}
