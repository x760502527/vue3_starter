<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增管道 </a-button>
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
    <Drawer @register="registerDrawer" @success="handleSuccess"></Drawer>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { BasicColumn } from '/@/components/Table/src/types/table';
  import { FormProps } from '/@/components/Table';
  import { useDrawer } from '/@/components/Drawer';
  import Drawer from './drawer.vue';

  export default defineComponent({
    name: 'equipmentInfo',
    components: { BasicTable, TableAction, Drawer },
    setup() {
      const tableColumns: BasicColumn[] = [
        {
          title: '名称',
          dataIndex: 'name',
          width: 300,
        },
        {
          title: '别名',
          dataIndex: 'alias',
          width: 100,
        },
        {
          title: '所属部门',
          dataIndex: 'company',
          width: 100,
          sorter: true,
        },
        {
          title: '类型',
          width: 100,
          sorter: true,
          dataIndex: 'type',
        },
        {
          title: '长度（米）',
          width: 100,
          sorter: true,
          dataIndex: 'long',
        },
        {
          title: '投产日期',
          width: 150,
          sorter: true,
          dataIndex: 'time',
        },
        {
          title: '备注',
          width: 150,
          sorter: true,
          dataIndex: 'marker',
        },
      ];

      let data = [
        {
          name: '常熟管线',
          alias: '常熟管线',
          company: '油气运销部',
          type: '油',
          long: '23542',
          time: '2021-06-01',
          marker: '暂无',
        },
        {
          name: '常熟管线',
          alias: '常熟管线',
          company: '油气运销部',
          type: '油',
          long: '23542',
          time: '2021-06-01',
          marker: '暂无',
        },
        {
          name: '常熟管线',
          alias: '常熟管线',
          company: '油气运销部',
          type: '油',
          long: '23542',
          time: '2021-06-01',
          marker: '暂无',
        },
      ];

      let search: Partial<FormProps> = {
        labelWidth: 100,
        schemas: [
          {
            field: `name`,
            label: `管道名称`,
            component: 'Input',
            colProps: {
              sm: 24,
              md: 8,
              xl: 6,
            },
          },
          {
            label: `开始时间`,
            field: '3',
            component: 'DatePicker',
            colProps: {
              sm: 24,
              md: 8,
              xl: 6,
            },
          },
          {
            label: `结束时间`,
            field: '4',
            component: 'DatePicker',
            colProps: {
              sm: 24,
              md: 8,
              xl: 6,
            },
          },
        ],
      };

      const [registerDrawer, { openDrawer }] = useDrawer();

      const [registerTable, { reload }] = useTable({
        title: '管道列表',
        // api: get,
        columns: tableColumns,
        useSearchForm: true,
        showTableSetting: true,
        dataSource: data,
        formConfig: search,
        rowSelection: { type: 'checkbox' },
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
