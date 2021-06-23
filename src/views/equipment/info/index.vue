<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增设备 </a-button>
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
  import { get } from '/@/api/pipeline/table';
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
          title: '设备ID',
          dataIndex: 'id',
          width: 200,
        },
        {
          title: '设备总类',
          dataIndex: 'type',
          width: 150,
        },
        {
          title: '设备子类',
          dataIndex: 'typeSub',
          width: 150,
          sorter: true,
        },
        {
          title: '自编号',
          width: 150,
          sorter: true,
          dataIndex: 'num',
        },
        {
          title: '名称',
          width: 150,
          sorter: true,
          dataIndex: 'name',
        },
        {
          title: '通道号',
          width: 150,
          sorter: true,
          dataIndex: 'cnum',
        },
        {
          title: 'IP',
          width: 100,
          sorter: true,
          dataIndex: 'ip',
        },
        {
          title: '端口',
          width: 100,
          sorter: true,
          dataIndex: 'port',
        },
        {
          title: '备注',
          width: 300,
          sorter: true,
          dataIndex: 'marker',
        },
      ];

      let data = [
        {
          id: 'C400AD29ECA4_1',
          type: '实时监测类',
          typeSub: 'DTS',
          num: '3',
          name: 'C400AD29ECA4',
          cnum: '1',
          ip: '192.168.10.142',
          port: '1111',
          marker: '暂无',
        },
        {
          id: 'C400AD29ECA4_1',
          type: '实时监测类',
          typeSub: 'DTS',
          num: '3',
          name: 'C400AD29ECA4',
          cnum: '1',
          ip: '192.168.10.142',
          port: '1111',
          marker: '暂无',
        },
        {
          id: 'C400AD29ECA4_1',
          type: '实时监测类',
          typeSub: 'DTS',
          num: '3',
          name: 'C400AD29ECA4',
          cnum: '1',
          ip: '192.168.10.142',
          port: '1111',
          marker: '暂无',
        },
      ];

      let search: Partial<FormProps> = {
        labelWidth: 100,
        schemas: [
          {
            label: `设备总类`,
            field: '3',
            component: 'Select',
            componentProps: {
              options: [
                { label: 'DTS', value: '0' },
                { label: 'DVS', value: '1' },
              ],
            },
            colProps: {
              sm: 24,
              md: 8,
              xl: 6,
            },
          },
          {
            label: `设备子类`,
            field: '1',
            component: 'Select',
            componentProps: {
              options: [
                { label: 'DTS', value: '0' },
                { label: 'DVS', value: '1' },
              ],
            },
            colProps: {
              sm: 24,
              md: 8,
              xl: 6,
            },
          },
          {
            label: `设备名称`,
            field: '2',
            component: 'Input',
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
        title: '设备列表',
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
