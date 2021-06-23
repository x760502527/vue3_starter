<template>
  <div>
    <ScrollContainer>
      <div ref="wrapperRef" :class="prefixCls">
        <Tabs tab-position="left" :tabBarStyle="tabBarStyle">
          <template v-for="item in settingList" :key="item.key">
            <TabPane :tab="item.name">
              <component :is="item.component" />
            </TabPane>
          </template>
        </Tabs>
      </div>
    </ScrollContainer>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { Tabs } from 'ant-design-vue';
  import headerImg from '/@/assets/images/header.jpg';
  import { useUserStore } from '/@/store/modules/user';

  import { ScrollContainer } from '/@/components/Container/index';

  import BaseSetting from './BaseSetting.vue';
  import SecureSetting from './SecureSetting.vue';

  export default defineComponent({
    components: {
      ScrollContainer,
      Tabs,
      TabPane: Tabs.TabPane,
      BaseSetting,
      SecureSetting,
    },
    setup() {
      const userStore = useUserStore();

      let settingList = [
        {
          key: '1',
          name: '基本设置',
          component: 'BaseSetting',
        },
        {
          key: '2',
          name: '安全设置',
          component: 'SecureSetting',
        },
      ];

      const avatar = computed(() => {
        const { avatar } = userStore.getUserInfo;
        return avatar || headerImg;
      });

      return {
        prefixCls: 'account-setting',
        settingList,
        tabBarStyle: {
          width: '220px',
        },
        avatar,
      };
    },
  });
</script>
<style lang="less">
  .account-setting {
    margin: 12px;
    background-color: @component-background;

    .base-title {
      padding-left: 0;
    }

    .ant-tabs-tab-active {
      background-color: @item-active-bg;
    }
    &-col:not(:last-child) {
      padding: 0 10px;

      &:not(:last-child) {
        border-right: 1px dashed rgb(206, 206, 206, 0.5);
      }
    }

    &-top {
      &__avatar {
        background: @component-background;
        margin: 8px 16px 0px 16px;
        padding: 16px;
        text-align: center;

        img {
          margin: auto;
          border-radius: 50%;
        }

        span {
          display: block;
          font-size: 20px;
          font-weight: 500;
        }

        div {
          margin-top: 3px;
          font-size: 12px;
        }
      }

      &__detail {
        padding-left: 20px;
        margin-top: 15px;
      }

      &__team {
        &-item {
          display: inline-block;
          padding: 4px 24px;
        }

        span {
          margin-left: 3px;
        }
      }
    }

    &-bottom {
      padding: 10px;
      margin: 0 16px 16px 16px;
      background-color: @component-background;
      border-radius: 3px;
    }
  }
</style>
