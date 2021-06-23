<template>
  <CollapseContainer title="基本设置" :canExpan="false">
    <a-row :gutter="24">
      <a-col :span="14">
        <BasicForm @register="register" />
      </a-col>
      <a-col :span="10">
        <div class="change-avatar">
          <div class="mb-2"> 头像 </div>
          <img width="140" :src="avatar" />
          <Upload :showUploadList="false">
            <Button class="ml-5"> <Icon icon="feather:upload" />更换头像 </Button>
          </Upload>
        </div>
      </a-col>
    </a-row>
    <Button type="primary" @click="handleSubmit"> 更新基本信息 </Button>
  </CollapseContainer>
</template>
<script lang="ts">
  import { Button, Upload, Row, Col } from 'ant-design-vue';
  import { computed, defineComponent, onMounted } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  import Icon from '/@/components/Icon/index';

  import { useMessage } from '/@/hooks/web/useMessage';

  import headerImg from '/@/assets/images/header.jpg';
  import { useUserStore } from '/@/store/modules/user';

  export default defineComponent({
    components: {
      BasicForm,
      CollapseContainer,
      Button,
      Upload,
      Icon,
      [Row.name]: Row,
      [Col.name]: Col,
    },
    setup() {
      const { createMessage } = useMessage();
      const userStore = useUserStore();

      const [register, { setFieldsValue }] = useForm({
        labelWidth: 120,
        schemas: [
          {
            field: 'email',
            component: 'Input',
            label: '邮箱',
            colProps: { span: 18 },
          },
          {
            field: 'name',
            component: 'Input',
            label: '昵称',
            colProps: { span: 18 },
          },
          {
            field: 'introduction',
            component: 'InputTextArea',
            label: '个人简介',
            colProps: { span: 18 },
          },
          {
            field: 'phone',
            component: 'Input',
            label: '联系电话',
            colProps: { span: 18 },
          },
          {
            field: 'address',
            component: 'Input',
            label: '所在地区',
            colProps: { span: 18 },
          },
        ],
        showActionButtonGroup: false,
      });

      onMounted(async () => {
        const data = {
          name: 'Vben',
          userid: '00000001',
          email: 'test@gmail.com',
          signature: '海纳百川，有容乃大',
          introduction: '微笑着，努力着，欣赏着',
          title: '交互专家',
          group: '某某某事业群－某某平台部－某某技术部－UED',
          tags: [
            {
              key: '0',
              label: '很有想法的',
            },
            {
              key: '1',
              label: '专注设计',
            },
            {
              key: '2',
              label: '辣~',
            },
            {
              key: '3',
              label: '大长腿',
            },
            {
              key: '4',
              label: '川妹子',
            },
            {
              key: '5',
              label: '海纳百川',
            },
          ],
          notifyCount: 12,
          unreadCount: 11,
          country: 'China',
          address: 'Xiamen City 77',
          phone: '0592-268888888',
        };
        setFieldsValue(data);
      });

      const avatar = computed(() => {
        const { avatar } = userStore.getUserInfo;
        return avatar || headerImg;
      });

      return {
        avatar,
        register,
        handleSubmit: () => {
          createMessage.success('更新成功！');
        },
      };
    },
  });
</script>

<style lang="less" scoped>
  .change-avatar {
    img {
      display: block;
      margin-bottom: 15px;
      border-radius: 50%;
    }
  }
</style>
