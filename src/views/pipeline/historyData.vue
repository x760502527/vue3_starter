<template>
  <div class="historyData_container">
    <a-row type="flex" style="height: 100%">
      <a-col class="left">
        <PipelineTree style="height: calc(100% - 32px)" @select="handleSelect" />
      </a-col>
      <a-col class="right">
        <div class="bg">
          <a-row>
            <a-col class="title"> {{ title }}历史数据 </a-col>
          </a-row>
          <a-row style="margin-top: 16px">
            <a-col>
              <a-select style="width: 140px" placeholder="请选择数据类型">
                <a-select-option value="1"> 温度 </a-select-option>
                <a-select-option value="2"> 振动 </a-select-option>
              </a-select>

              <a-range-picker
                style="margin-left: 8px"
                :show-time="{ format: 'HH:mm' }"
                format="YYYY-MM-DD HH:mm"
                :placeholder="['开始时间', '结束时间']"
              />

              <a-input placeholder="管道开始位置" style="width: 140px; margin-left: 8px" />

              <a-input placeholder="管道结束位置" style="width: 140px; margin-left: 8px" />

              <a-button
                @click="search"
                style="margin-left: 8px"
                type="primary"
                preIcon="mdi:search"
              >
                搜索
              </a-button>
            </a-col>
          </a-row>
          <div class="chart_container">
            <v-chart class="chart" :option="option" />
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
  import { ref, defineComponent } from 'vue';
  import { SearchOutlined } from '@ant-design/icons-vue';

  import { PageWrapper } from '/@/components/Page';
  import PipelineTree from './PipelineTree.vue';

  export default defineComponent({
    name: 'pipelineHistoryData',
    components: { PageWrapper, PipelineTree, SearchOutlined },
    setup() {
      let title = ref('');

      const option = ref({
        color: ['#00FF2A'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        legend: {
          selectedMode: 'single',
        },
        grid: {
          left: '3%',
          right: '5%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [0, 1],
          axisLabel: {
            showMaxLabel: true,
            showMinLabel: true,
          },
          name: '距离(米)',
        },
        yAxis: {
          type: 'value',
          splitNumber: 3,
          name: '温度' + '（℃）',
        },
        series: [
          {
            type: 'line',
            name: '温度',
            data: [0, 0],
            markPoint: {
              data: [{ type: 'max', name: '最大值' }],
            },
          },
        ],
      });

      function getCurrentStyle(current, today) {
        const style = {};

        if (current && current.date() === 1) {
          style.border = '1px solid #1890ff';
          style.borderRadius = '50%';
        }
        return style;
      }

      function search() {}

      function handleSelect(key, t) {
        title.value = t;
      }

      return {
        title,
        search,
        option,
        handleSelect,
        getCurrentStyle,
      };
    },
  });
</script>
<style lang="less" scoped>
  .historyData_container {
    height: 100%;
    width: 100%;
    .left {
      width: 20%;
    }
    .right {
      width: 80%;
      padding: 16px 16px 16px 16px;
      .bg {
        background-color: @component-background !important;
        height: 100%;
        width: 100%;
        padding: 8px 16px;
      }
    }
    .title {
      font-size: 16px;
      font-weight: bold;
    }
    .chart_container {
      height: calc(100% - 72px);
      width: 100%;
      padding: 32px 32px 64px 32px;
    }
  }
</style>
