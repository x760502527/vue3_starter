<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="500px"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm">
      <template #menu="{ model, field }">
        <BasicTree
          v-model:value="model[field]"
          :treeData="treeData"
          :replaceFields="{ title: 'menuName', key: 'id' }"
          checkable
          toolbar
          title="菜单分配"
        />
      </template>
    </BasicForm>
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './role.data';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { BasicTree, TreeItem } from '/@/components/Tree';

  export default defineComponent({
    name: 'RoleDrawer',
    components: { BasicDrawer, BasicForm, BasicTree },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const treeData = ref<TreeItem[]>([]);

      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 90,
        schemas: formSchema,
        showActionButtonGroup: false,
      });

      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        resetFields();
        setDrawerProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          });
        }
        let tData: any = [
          {
            id: '0',
            icon: 'ion:layers-outline',
            component: 'LAYOUT',
            menuName: 'Dashboard',
            permission: '',
            orderNo: 1,
            createTime: '2003-09-21 23:57:29',
            status: '0',
            children: [
              {
                id: '0-0',
                menuName: '菜单1',
                icon: 'ion:document',
                permission: 'menu1:view',
                component: '/dashboard/welcome/index',
                orderNo: 1,
                createTime: '1979-02-24 01:22:29',
                status: '0',
                parentMenu: '0',
              },
              {
                id: '0-1',
                menuName: '菜单2',
                icon: 'ion:document',
                permission: 'menu1:view',
                component: '/dashboard/analysis/index',
                orderNo: 2,
                createTime: '1974-11-09 15:25:35',
                status: '1',
                parentMenu: '0',
              },
              {
                id: '0-2',
                menuName: '菜单3',
                icon: 'ion:document',
                permission: 'menu1:view',
                component: '/dashboard/workbench/index',
                orderNo: 3,
                createTime: '2009-04-22 00:56:05',
                status: '0',
                parentMenu: '0',
              },
              {
                id: '0-3',
                menuName: '菜单4',
                icon: 'ion:document',
                permission: 'menu1:view',
                component: '/dashboard/test/index',
                orderNo: 4,
                createTime: '1978-11-30 02:53:07',
                status: '1',
                parentMenu: '0',
              },
            ],
          },
          {
            id: '1',
            icon: 'ion:git-compare-outline',
            component: 'LAYOUT',
            menuName: '权限管理',
            permission: '',
            orderNo: 2,
            createTime: '1987-10-18 22:15:41',
            status: '0',
            children: [
              {
                id: '1-0',
                menuName: '菜单1',
                icon: 'ion:document',
                permission: 'menu2:add',
                component: '/dashboard/welcome/index',
                orderNo: 1,
                createTime: '1977-02-19 10:34:50',
                status: '0',
                parentMenu: '1',
              },
              {
                id: '1-1',
                menuName: '菜单2',
                icon: 'ion:document',
                permission: 'menu2:add',
                component: '/dashboard/analysis/index',
                orderNo: 2,
                createTime: '1971-11-12 07:25:00',
                status: '0',
                parentMenu: '1',
              },
              {
                id: '1-2',
                menuName: '菜单3',
                icon: 'ion:document',
                permission: 'menu2:add',
                component: '/dashboard/workbench/index',
                orderNo: 3,
                createTime: '1994-10-21 15:33:40',
                status: '0',
                parentMenu: '1',
              },
              {
                id: '1-3',
                menuName: '菜单4',
                icon: 'ion:document',
                permission: 'menu2:add',
                component: '/dashboard/test/index',
                orderNo: 4,
                createTime: '2001-01-05 14:11:15',
                status: '1',
                parentMenu: '1',
              },
            ],
          },
          {
            id: '2',
            icon: 'ion:tv-outline',
            component: 'LAYOUT',
            menuName: '功能',
            permission: '',
            orderNo: 3,
            createTime: '1976-12-24 02:36:58',
            status: '0',
            children: [
              {
                id: '2-0',
                menuName: '菜单1',
                icon: 'ion:document',
                permission: 'menu3:update',
                component: '/dashboard/welcome/index',
                orderNo: 1,
                createTime: '2021-02-16 00:35:04',
                status: '1',
                parentMenu: '2',
              },
              {
                id: '2-1',
                menuName: '菜单2',
                icon: 'ion:document',
                permission: 'menu3:update',
                component: '/dashboard/analysis/index',
                orderNo: 2,
                createTime: '1980-09-29 01:08:49',
                status: '1',
                parentMenu: '2',
              },
              {
                id: '2-2',
                menuName: '菜单3',
                icon: 'ion:document',
                permission: 'menu3:update',
                component: '/dashboard/workbench/index',
                orderNo: 3,
                createTime: '1998-12-27 17:13:45',
                status: '0',
                parentMenu: '2',
              },
              {
                id: '2-3',
                menuName: '菜单4',
                icon: 'ion:document',
                permission: 'menu3:update',
                component: '/dashboard/test/index',
                orderNo: 4,
                createTime: '1973-10-31 12:13:40',
                status: '0',
                parentMenu: '2',
              },
            ],
          },
        ];
        treeData.value = tData;
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增角色' : '编辑角色'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setDrawerProps({ confirmLoading: true });
          // TODO custom api
          console.log(values);
          closeDrawer();
          emit('success');
        } finally {
          setDrawerProps({ confirmLoading: false });
        }
      }

      return {
        registerDrawer,
        registerForm,
        getTitle,
        handleSubmit,
        treeData,
      };
    },
  });
</script>
