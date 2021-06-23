<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './dept.data';

  export default defineComponent({
    name: 'DeptModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);

      const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
        labelWidth: 100,
        schemas: formSchema,
        showActionButtonGroup: false,
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          });
        }
        const treeData = [
          {
            id: '0',
            deptName: '华东分部',
            orderNo: 1,
            createTime: '1973-01-17 21:12:32',
            remark: '别常提准正段候石点求直还山家白段极',
            status: '0',
            children: [
              {
                id: '0-0',
                deptName: '研发部',
                orderNo: 1,
                createTime: '1978-09-06 00:55:52',
                remark: '记个采问效口题律领别速',
                status: '0',
                parentDept: '0',
              },
              {
                id: '0-1',
                deptName: '市场部',
                orderNo: 2,
                createTime: '1995-07-28 23:24:33',
                remark: '维派要很线长快立发算便算设效部厂来',
                status: '0',
                parentDept: '0',
              },
              {
                id: '0-2',
                deptName: '商务部',
                orderNo: 3,
                createTime: '2017-09-11 00:06:55',
                remark: '利手准开下调说真非质类越即件品受积',
                status: '0',
                parentDept: '0',
              },
              {
                id: '0-3',
                deptName: '财务部',
                orderNo: 4,
                createTime: '1986-05-09 13:34:52',
                remark: '划办质品求且为压步面确拉斯决公素西',
                status: '1',
                parentDept: '0',
              },
            ],
          },
          {
            id: '1',
            deptName: '华南分部',
            orderNo: 2,
            createTime: '1988-01-29 04:55:06',
            remark: '际料由低分地价区青四原',
            status: '0',
            children: [
              {
                id: '1-0',
                deptName: '研发部',
                orderNo: 1,
                createTime: '1988-02-07 06:09:22',
                remark: '据段史九矿办中为带美区展接',
                status: '1',
                parentDept: '1',
              },
              {
                id: '1-1',
                deptName: '市场部',
                orderNo: 2,
                createTime: '1998-02-15 06:22:28',
                remark: '习当今引必公院几是军低一存象团白',
                status: '1',
                parentDept: '1',
              },
              {
                id: '1-2',
                deptName: '商务部',
                orderNo: 3,
                createTime: '1975-11-02 19:01:35',
                remark: '感行干值万习建最手大级习说',
                status: '0',
                parentDept: '1',
              },
              {
                id: '1-3',
                deptName: '财务部',
                orderNo: 4,
                createTime: '1972-07-25 08:26:18',
                remark: '非三层林半来进经受部或次现具然',
                status: '1',
                parentDept: '1',
              },
            ],
          },
          {
            id: '2',
            deptName: '西北分部',
            orderNo: 3,
            createTime: '2005-10-06 16:24:11',
            remark: '劳到新调样构清难给六法近到',
            status: '0',
            children: [
              {
                id: '2-0',
                deptName: '研发部',
                orderNo: 1,
                createTime: '2006-06-06 07:48:14',
                remark: '该准周要住响收却严复状段查七',
                status: '0',
                parentDept: '2',
              },
              {
                id: '2-1',
                deptName: '市场部',
                orderNo: 2,
                createTime: '2017-04-17 09:51:32',
                remark: '生整半动个你准内感就华美我特四第东',
                status: '0',
                parentDept: '2',
              },
              {
                id: '2-2',
                deptName: '商务部',
                orderNo: 3,
                createTime: '2013-05-07 03:38:51',
                remark: '斯矿商外白统政记然工适就技条较',
                status: '1',
                parentDept: '2',
              },
              {
                id: '2-3',
                deptName: '财务部',
                orderNo: 4,
                createTime: '2018-06-02 02:20:22',
                remark: '角感人研时矿年那长高五型次界',
                status: '1',
                parentDept: '2',
              },
            ],
          },
        ];
        updateSchema({
          field: 'parentDept',
          componentProps: { treeData },
        });
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增部门' : '编辑部门'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          console.log(values);
          closeModal();
          emit('success');
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
