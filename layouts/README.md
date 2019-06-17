# LAYOUTS

## 根目录下的所有文件都属于个性化布局文件，可以在页面组件中利用 layout 属性来引用。使用 layout 属性来为页面指定使用哪一个布局文件. 默认值： 'default' 如在pages/user/index.vue 中指定layout/userList

``` bash
export default {
  layout: 'userList',
  // 或
  layout (context) {
    return 'userList'
  }
}

```
