/**
 * Created by bigBigSir on 2019/3/30
 *
 * 主题配置信息，gulp打包生成时与切换主题时使用,属性名要加''，不然JSON.parse会失败
 * hasBuild 是否已构建？
 * true ：  已构建，不再构建
 * false：  未构建，执行命令后会自动构建
 */

const themeList = [
  { name: 'default', color: '#409EFF', label: '默认色', hasBuild: true },
  { name: 'cyan', color: '#0BB2D4', label: '青色', hasBuild: false },
  { name: 'blue', color: '#3E8EF7', label: '蓝色', hasBuild: false },
  { name: 'green', color: '#11C26D', label: '绿色', hasBuild: false },
  { name: 'turquoise', color: '#17B3A3', label: '蓝绿色', hasBuild: false },
  { name: 'indigo', color: '#667AFA', label: '靛青色', hasBuild: false },
  { name: 'brown', color: '#997B71', label: '棕色', hasBuild: false },
  { name: 'purple', color: '#9463F7', label: '紫色', hasBuild: false },
  { name: 'gray', color: '#757575', label: '灰色', hasBuild: false },
  { name: 'orange', color: '#EB6709', label: '橙色', hasBuild: false },
  { name: 'pink', color: '#F74584', label: '粉红色', hasBuild: false },
  { name: 'yellow', color: '#FCB900', label: '黄色', hasBuild: false },
  { name: 'red', color: '#FF4C52', label: '红色', hasBuild: false }
]

export default themeList
