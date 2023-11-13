import { Component, onBeforeMount, reactive, h } from "vue";
import { Form, FormItem } from "ant-design-vue";
export type ComponentJson = {
  element: string | Component,
  vmodel: string,
  on?: Function,
  props?: Function,
  span?: number,
  [k:string]: any,
}

export default {
  name: 'jsonView',
  props: {
    // 父组件传入的组件
    components: {
      type: Array,
      default: [],
    },
    needValidate: {
      type: Boolean,
      default: true,
    }
  },
  setup(props: any, { expose }: any) {
    // 初始化表单数据
    const { components, needValidate } = props; 
    const originModel: Record<string, any> = {};
    components.forEach((item: ComponentJson) => { originModel[item.vmodel] = undefined })
    const model = reactive(originModel);
    // const forms = components.map((item: ComponentJson) => needValidate ? (<Form ></Form>))
    return () => <div></div>
  },
};