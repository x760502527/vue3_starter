<template>
  <div class="bg-white m-4 mr-0 overflow-hidden" style="height: calc(100%-16px)">
    <BasicTree
      title="管道列表"
      toolbar
      search
      :clickRowToExpand="false"
      :treeData="treeData"
      :replaceFields="{ key: 'key', title: 'title' }"
      @select="handleSelect"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';

  import { BasicTree, TreeItem } from '/@/components/Tree';

  export default defineComponent({
    name: 'PipelineTree',
    components: { BasicTree },

    emits: ['select'],
    setup(_, { emit }) {
      const treeData = ref<TreeItem[]>([]);

      async function fetch() {
        const data = [
          {
            title: '新疆',
            key: '0-0',
            children: [
              { title: '采油一厂', key: '0-0-0' },
              {
                title: '采油二厂',
                key: '0-0-1',
                children: [
                  { title: '采油二站', key: '0-0-0-0' },
                  { title: '采油五站', key: '0-0-0-1' },
                ],
              },
            ],
          },
          {
            title: '东营',
            key: '1-1',
            children: [
              { title: '东营一厂', key: '1-1-0' },
              { title: '东营二厂', key: '1-1-1' },
            ],
          },
          {
            title: '保定',
            key: '2-2',
            children: [
              { title: '一厂', key: '2-2-0' },
              { title: '二厂', key: '2-2-1' },
            ],
          },
        ];
        treeData.value = data;
      }

      function handleSelect(keys: string, e) {
        emit('select', keys[0], e.selectedNodes[0]['props']['node']['title']);
      }

      onMounted(() => {
        fetch();
      });
      return { treeData, handleSelect };
    },
  });
</script>
