<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增角色 </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <RoleDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, h } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { Tag } from 'ant-design-vue';
  import { useDrawer } from '/@/components/Drawer';
  import RoleDrawer from './RoleDrawer.vue';

  export default defineComponent({
    name: 'RoleManagement',
    components: { BasicTable, RoleDrawer, TableAction },
    setup() {
      const [registerDrawer, { openDrawer }] = useDrawer();

      let data = [
        {
          id: '0',
          orderNo: '1',
          roleName: '超级管理员',
          roleValue: 'Thomas',
          createTime: '1983-10-16 06:58:14',
          remark: '引节情果只这主日头消道',
          status: '1',
        },
        {
          id: '1',
          orderNo: '2',
          roleName: '管理员',
          roleValue: 'Jeffrey',
          createTime: '1971-06-25 09:45:52',
          remark: '格而之自连育民想设六界特商确意办等面',
          status: '0',
        },
        {
          id: '2',
          orderNo: '3',
          roleName: '文章管理员',
          roleValue: 'Dorothy',
          createTime: '1973-04-27 23:13:54',
          remark: '真时里红近状连总界两代细如',
          status: '0',
        },
        {
          id: '3',
          orderNo: '4',
          roleName: '普通用户',
          roleValue: 'Nancy',
          createTime: '1996-07-15 16:27:11',
          remark: '记料下般一发质又住果存党目知果包便完',
          status: '1',
        },
      ];
      const [registerTable, { reload }] = useTable({
        title: '角色列表',
        dataSource: data,
        columns: [
          {
            title: '角色名称',
            dataIndex: 'roleName',
            width: 200,
          },
          {
            title: '角色值',
            dataIndex: 'roleValue',
            width: 180,
          },
          {
            title: '排序',
            dataIndex: 'orderNo',
            width: 50,
          },
          {
            title: '状态',
            dataIndex: 'status',
            width: 80,
            customRender: ({ record }) => {
              const status = record.status;
              const enable = ~~status === 0;
              const color = enable ? 'green' : 'red';
              const text = enable ? '启用' : '停用';
              return h(Tag, { color: color }, () => text);
            },
          },
          {
            title: '创建时间',
            dataIndex: 'createTime',
            width: 180,
          },
          {
            title: '备注',
            dataIndex: 'remark',
          },
        ],
        formConfig: {
          labelWidth: 120,
          schemas: [
            {
              field: 'roleNme',
              label: '角色名称',
              component: 'Input',
              colProps: {
                sm: 24,
                md: 8,
                lg: 6,
              },
            },
            {
              field: 'status',
              label: '状态',
              component: 'Select',
              componentProps: {
                options: [
                  { label: '启用', value: '0' },
                  { label: '停用', value: '1' },
                ],
              },
              colProps: {
                sm: 24,
                md: 8,
                lg: 6,
              },
            },
          ],
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      function handleCreate() {
        openDrawer(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openDrawer(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        console.log(record);
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        registerDrawer,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
