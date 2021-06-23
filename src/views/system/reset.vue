<template>
  <PageWrapper title="修改当前用户密码" content="修改成功后会自动退出当前登录！">
    <div class="py-8 bg-white flex flex-col justify-center items-center">
      <BasicForm @register="register" />
      <div class="flex justify-center">
        <a-button @click="resetFields"> 重置 </a-button>
        <a-button class="!ml-4" type="primary" @click="handleSubmit"> 确认 </a-button>
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { BasicForm, useForm } from '/@/components/Form';

  export default defineComponent({
    name: 'ChangePassword',
    components: { BasicForm, PageWrapper },
    setup() {
      const [register, { validate, resetFields }] = useForm({
        size: 'large',
        labelWidth: 100,
        showActionButtonGroup: false,
        schemas: [
          {
            field: 'passwordOld',
            label: '当前密码',
            component: 'InputPassword',
            required: true,
          },
          {
            field: 'passwordNew',
            label: '新密码',
            component: 'StrengthMeter',
            componentProps: {
              placeholder: '新密码',
            },
            rules: [
              {
                required: true,
                message: '请输入新密码',
              },
            ],
          },
          {
            field: 'confirmPassword',
            label: '确认密码',
            component: 'InputPassword',

            dynamicRules: ({ values }) => {
              return [
                {
                  required: true,
                  validator: (_, value) => {
                    if (!value) {
                      return Promise.reject('不能为空');
                    }
                    if (value !== values.passwordNew) {
                      return Promise.reject('两次输入的密码不一致!');
                    }
                    return Promise.resolve();
                  },
                },
              ];
            },
          },
        ],
      });

      async function handleSubmit() {
        try {
          const values = await validate();
          const { passwordOld, passwordNew } = values;

          // TODO custom api
          console.log(passwordOld, passwordNew);
          // const { router } = useRouter();
          // router.push(pageEnum.BASE_LOGIN);
        } catch (error) {}
      }

      return { register, resetFields, handleSubmit };
    },
  });
</script>
