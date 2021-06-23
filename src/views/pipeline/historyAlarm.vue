<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <PipelineTree class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">数据导出</a-button>
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import PipelineTree from './PipelineTree.vue';

  export default defineComponent({
    name: 'historyAlarm',
    components: { BasicTable, PageWrapper, PipelineTree },
    setup() {
      let data = [
        {
          id: '0',
          startTime: '2020-04-23 17:47:21',
          time: '2020-04-23 17:47:21',
          type: '定温',
          level: '三级',
          fiberlocation: '1002',
          pipelinelocation: '1002',
          value: '23.21',
          status: '预警',
        },
        {
          id: '1',
          startTime: '2020-04-23 17:47:21',
          time: '2020-04-23 17:47:21',
          type: '定温',
          level: '三级',
          fiberlocation: '1002',
          pipelinelocation: '1002',
          value: '23.21',
          status: '预警',
        },
        {
          id: '2',
          startTime: '2020-04-23 17:47:21',
          time: '2020-04-23 17:47:21',
          type: '定温',
          level: '三级',
          fiberlocation: '1002',
          pipelinelocation: '1002',
          value: '23.21',
          status: '预警',
        },
        {
          id: '2',
          startTime: '2020-04-23 17:47:21',
          time: '2020-04-23 17:47:21',
          type: '定温',
          level: '三级',
          fiberlocation: '1002',
          pipelinelocation: '1002',
          value: '23.21',
          status: '预警',
        },
        {
          id: '2',
          startTime: '2020-04-23 17:47:21',
          time: '2020-04-23 17:47:21',
          type: '定温',
          level: '三级',
          fiberlocation: '1002',
          pipelinelocation: '1002',
          value: '23.21',
          status: '预警',
        },
        {
          id: '2',
          startTime: '2020-04-23 17:47:21',
          time: '2020-04-23 17:47:21',
          type: '定温',
          level: '三级',
          fiberlocation: '1002',
          pipelinelocation: '1002',
          value: '23.21',
          status: '预警',
        },
        {
          id: '2',
          startTime: '2020-04-23 17:47:21',
          time: '2020-04-23 17:47:21',
          type: '定温',
          level: '三级',
          fiberlocation: '1002',
          pipelinelocation: '1002',
          value: '23.21',
          status: '预警',
        },
        {
          id: '2',
          startTime: '2020-04-23 17:47:21',
          time: '2020-04-23 17:47:21',
          type: '定温',
          level: '三级',
          fiberlocation: '1002',
          pipelinelocation: '1002',
          value: '23.21',
          status: '预警',
        },
        {
          id: '2',
          startTime: '2020-04-23 17:47:21',
          time: '2020-04-23 17:47:21',
          type: '定温',
          level: '三级',
          fiberlocation: '1002',
          pipelinelocation: '1002',
          value: '23.21',
          status: '预警',
        },
      ];
      const [registerTable, { reload }] = useTable({
        title: '报警列表',
        dataSource: data,
        columns: [
          {
            title: '开始报警时间',
            dataIndex: 'startTime',
            width: 200,
          },
          {
            title: '最新报警时间',
            dataIndex: 'time',
            width: 200,
          },
          {
            title: '报警类型',
            dataIndex: 'type',
            width: 100,
          },
          {
            title: '报警等级',
            dataIndex: 'level',
            width: 100,
          },
          {
            title: '光纤位置（米）',
            dataIndex: 'fiberlocation',
            width: 100,
          },
          {
            title: '管道位置（米）',
            dataIndex: 'pipelinelocation',
            width: 100,
          },
          {
            title: '报警值',
            dataIndex: 'value',
            width: 100,
          },
          {
            title: '报警状态',
            dataIndex: 'status',
            width: 100,
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
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        console.log(record);
        openModal(true, {
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

      function handleSelect(deptId = '') {
        reload({ searchInfo: { deptId } });
      }

      return {
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
