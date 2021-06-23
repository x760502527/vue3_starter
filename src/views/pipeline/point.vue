<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <a-row type="flex" style="height: 100%">
      <a-col class="left">
        <PipelineTree style="height: calc(100% - 32px)" @select="handleSelect" />
      </a-col>
      <a-col class="right">
        <div class="bg">
          <div class="chart_container">
            <BasicTable @register="registerTable">
              <template #toolbar>
                <a-button type="primary" @click="handleCreate"> 新增 </a-button>
              </template>
              <template #action="{ record, column }">
                <TableAction :actions="createActions(record, column)" />
              </template>
            </BasicTable>
          </div>
        </div>
      </a-col>
    </a-row>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import PipelineTree from './PipelineTree.vue';

  export default defineComponent({
    name: 'point',
    components: { BasicTable, PageWrapper, PipelineTree, TableAction },
    setup() {
      let data = [
        {
          id: '0',
          num: '1',
          lon: '114.21',
          lat: '37.35',
          marker: '',
        },
        {
          id: '1',
          num: '2',
          lon: '114.22',
          lat: '37.33',
          marker: '',
        },
      ];
      const [registerTable, { reload }] = useTable({
        title: '拐点坐标',
        dataSource: data,
        columns: [
          {
            title: '拐点坐标序号',
            dataIndex: 'num',
            editRow: true,
            editComponent: 'InputNumber',
            editRule: async (text) => {
              text = text.toString();
              if (text.indexOf('.') > -1) {
                return '该列需为整数！';
              }
              return '';
            },
            width: 100,
          },
          {
            title: '经度',
            dataIndex: 'lon',
            editRow: true,
            editComponent: 'InputNumber',
            width: 200,
          },
          {
            title: '纬度',
            dataIndex: 'lat',
            editRow: true,
            editComponent: 'InputNumber',
            width: 200,
          },
          {
            title: '备注',
            dataIndex: 'marker',
            editRow: true,
            width: 200,
          },
        ],
        formConfig: {
          labelWidth: 120,
          schemas: [
            {
              field: 'type',
              label: '报警类型',
              component: 'ApiSelect',
              componentProps: {
                api: async () => {
                  let data = [
                    {
                      label: '定温',
                      value: '1',
                    },
                    { label: '温速', value: '2' },
                  ];
                  return data;
                },
              },
              colProps: {
                sm: 24,
                md: 8,
                lg: 8,
              },
            },
            {
              field: 'level',
              label: '报警等级',
              component: 'ApiSelect',
              colProps: {
                sm: 24,
                md: 8,
                lg: 8,
              },
            },
            {
              field: 'status',
              label: '报警状态',
              component: 'ApiSelect',
              colProps: {
                sm: 24,
                md: 8,
                lg: 8,
              },
            },
            {
              field: 'startTime',
              label: '开始时间',
              component: 'DatePicker',
              colProps: {
                sm: 24,
                md: 8,
                lg: 8,
              },
            },
            {
              field: 'endTime',
              label: '结束时间',
              component: 'DatePicker',
              colProps: {
                sm: 24,
                md: 8,
                lg: 8,
              },
            },
            {
              field: 'startLocation',
              label: '管道开始位置',
              component: 'Input',
              colProps: {
                sm: 24,
                md: 8,
                lg: 8,
              },
            },
            {
              field: 'endLocation',
              label: '管道结束位置',
              component: 'Input',
              colProps: {
                sm: 24,
                md: 8,
                lg: 8,
              },
            },
          ],
        },
        useSearchForm: false,
        showTableSetting: true,
        bordered: true,
        actionColumn: {
          width: 160,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record) {
        currentEditKeyRef.value = record.key;
        record.onEdit?.(true);
      }

      function handleCancel(record) {
        currentEditKeyRef.value = '';
        record.onEdit?.(false, false);
      }

      async function handleSave(record) {
        const pass = await record.onEdit?.(false, true);
        if (pass) {
          currentEditKeyRef.value = '';
        }
      }

      function handleDelete(record: Recordable) {
        console.log(record);
      }

      function handleSuccess() {
        reload();
      }

      function handleSelect(deptId = '') {
        reload({ searchInfo: { deptId } });
      }

      const currentEditKeyRef = ref('');

      function createActions(record, column) {
        if (!record.editable) {
          return [
            {
              icon: 'clarity:note-edit-line',
              disabled: currentEditKeyRef.value ? currentEditKeyRef.value !== record.key : false,
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              disabled: currentEditKeyRef.value ? currentEditKeyRef.value !== record.key : false,
              color: 'error',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ];
        }
        return [
          {
            label: '保存',
            onClick: handleSave.bind(null, record, column),
          },
          {
            label: '取消',
            popConfirm: {
              title: '是否取消编辑',
              confirm: handleCancel.bind(null, record, column),
            },
          },
        ];
      }

      return {
        createActions,
        registerTable,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleSelect,
      };
    },
  });
</script>
