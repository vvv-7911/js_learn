import vue from 'vue';
import ToastComponent from './index.vue';
// console.log(ToastComponent);
const toastConstruct = vue.extend(ToastComponent)
function showMessage(msg, duration = 2000) {
  const instance = new toastConstruct({
    el: document.createElement('div'),
    propsData: {
      msg: msg,
      visiable: true
    }
  })
  document.body.appendChild(instance.$el);
  setTimeout(() => {
    instance.visiable = false;
  }, 3000)
}
export default showMessage;
// export default ToastComponent;