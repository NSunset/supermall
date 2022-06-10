<template>
  <tab-bar>
    <tab-bar-item link="/home" activeColor="rosybrown">
      <template #item-icon>
        <img src="~assets/img/tabbar/home/house-door.svg" />
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/home/house-door-fill.svg" />
      </template>
      <template #item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>

    <tab-bar-item link="/category" activeColor="rosybrown">
      <template #item-icon>
        <img src="~assets/img/tabbar/category/grid.svg" />
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/category/grid-fill.svg" />
      </template>
      <template #item-text>
        <div>类别</div>
      </template>
    </tab-bar-item>

    <tab-bar-item link="/cart" activeColor="rosybrown">
      <template #item-icon>
        <img src="~assets/img/tabbar/cart/cart.svg" />
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/cart/cart-fill.svg" />
      </template>
      <template #item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>

    <tab-bar-item link="/profile" activeColor="rosybrown">
      <template #item-icon>
        <img src="~assets/img/tabbar/mine/person.svg" />
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/mine/person-fill.svg" />
      </template>
      <template #item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style></style>
