<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <DeptTree class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增账号</a-button>
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
    <AccountModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import DeptTree from './DeptTree.vue';

  import { useModal } from '/@/components/Modal';
  import AccountModal from './AccountModal.vue';

  export default defineComponent({
    name: 'account',
    components: { BasicTable, PageWrapper, DeptTree, AccountModal, TableAction },
    setup() {
      const [registerModal, { openModal }] = useModal();
      let data = [
        {
          id: '0',
          account: 'Helen',
          email: 'c.istfy@nkejjc.hu',
          nickname: '杜军',
          role: 'Kimberly',
          createTime: '2015-04-09 01:03:42',
          remark: '红史题北正现任里何度快',
          status: '1',
        },
        {
          id: '1',
          account: 'Shirley',
          email: 'i.ismg@tijly.pm',
          nickname: '魏静',
          role: 'Gary',
          createTime: '1988-12-11 16:24:28',
          remark: '以几准件务不思拉制细据见',
          status: '0',
        },
        {
          id: '2',
          account: 'Susan',
          email: 'v.bxc@sliqdvkm.az',
          nickname: '林敏',
          role: 'Richard',
          createTime: '1993-04-28 22:02:11',
          remark: '亲华主非商器才接金构里产周身酸还利如',
          status: '0',
        },
        {
          id: '3',
          account: 'Gary',
          email: 'z.bxpurnpkxk@mnmcepgddh.bb',
          nickname: '万明',
          role: 'Larry',
          createTime: '1970-11-30 19:52:57',
          remark: '同适者群华发按至新育往动常工强区委向口八',
          status: '1',
        },
        {
          id: '4',
          account: 'Kenneth',
          email: 'c.tbvbva@euox.lr',
          nickname: '沈勇',
          role: 'Shirley',
          createTime: '1997-04-17 19:34:23',
          remark: '有没又求对各难作院必电压毛节油是车引因',
          status: '1',
        },
        {
          id: '5',
          account: 'Eric',
          email: 'e.dsa@iluckmm.th',
          nickname: '杨艳',
          role: 'Kimberly',
          createTime: '1979-10-30 10:55:17',
          remark: '至子族文拉传把联度根政务题必究使始按',
          status: '1',
        },
        {
          id: '6',
          account: 'Elizabeth',
          email: 's.ufasogev@gdkfhbyrfh.nl',
          nickname: '冯洋',
          role: 'Steven',
          createTime: '2000-11-18 05:23:46',
          remark: '正状进两机切较些效加象引产研',
          status: '0',
        },
        {
          id: '7',
          account: 'George',
          email: 'n.kyo@cnsqgp.cy',
          nickname: '锺强',
          role: 'Richard',
          createTime: '2018-04-21 19:40:04',
          remark: '八己十点法叫在府术革',
          status: '0',
        },
        {
          id: '8',
          account: 'Christopher',
          email: 'w.ufbci@rgvvu.ua',
          nickname: '谢娜',
          role: 'Anthony',
          createTime: '1999-01-03 08:12:26',
          remark: '所研求加心达运劳应共比深候接当事',
          status: '0',
        },
        {
          id: '9',
          account: 'Michael',
          email: 'm.wtmsjmyh@bvgkwoczy.中国互联.公司',
          nickname: '陆娟',
          role: 'Joseph',
          createTime: '2021-02-01 18:56:32',
          remark: '般至向研长被头集行问积据',
          status: '1',
        },
      ];
      const [registerTable, { reload }] = useTable({
        title: '账号列表',
        dataSource: data,
        columns: [
          {
            title: '用户名',
            dataIndex: 'account',
            width: 120,
          },
          {
            title: '昵称',
            dataIndex: 'nickname',
            width: 120,
          },
          {
            title: '邮箱',
            dataIndex: 'email',
            width: 120,
          },
          {
            title: '创建时间',
            dataIndex: 'createTime',
            width: 180,
          },
          {
            title: '角色',
            dataIndex: 'role',
            width: 200,
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
              field: 'account',
              label: '用户名',
              component: 'Input',
              colProps: {
                sm: 24,
                md: 8,
                lg: 6,
              },
            },
            {
              field: 'nickname',
              label: '昵称',
              component: 'Input',
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
        actionColumn: {
          width: 80,
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
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleSelect,
      };
    },
  });
</script>
