<template>
  <v-app>
    <v-navigation-drawer app mobile-breakpoint="960" v-model="drawer" color="#2A2935">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="blog-title">土豆博客</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item-group active-class="nav-text-active">
        <v-list dense nav>
          <v-list-item
            :ripple="false"
            :to="item.path"
            v-for="(item,index) in NavItems"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-list-item-group>
      <template v-slot:append>
        <div class="nav-bottom">
          <p>2020 土豆博客</p>
          <p>todoublog.com</p>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar color="#2A2935" app dense class="d-md-none">
      <v-app-bar-nav-icon @click.stop="handleToggle"></v-app-bar-nav-icon>
      <v-toolbar-title>土豆博客</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: true,
      NavItems: [
        {
          title: "菜单一",
          path: "/one",
        },
        { title: "菜单二", path: "/two" },
        {
          title: "菜单三",
          path: "/three",
        },
      ],
    };
  },
  methods: {
    handleToggle() {
      this.drawer = !this.drawer;
    },
  },
};
</script>


<style lang="scss" scoped>
.theme--dark.v-application {
  background-color: #fdfdfd;
  color: #444;
}
.v-list--nav .v-list-item,
.v-list--nav .v-list-item:before {
  border-radius: 0;
}
.v-list--nav .v-list-item:before {
  background-color: unset;
}
.v-list-item {
  border-right: 3px solid transparent;
  border-radius: 0px;
}
.nav-text-active {
  border-color: #ffc402;
  background-color: #26252f;
  border-radius: 0;
  .v-list-item__title {
    color: #ffc402 !important;
  }
}
.v-navigation-drawer {
  width: 210px !important;
  ::v-deep.v-list--nav {
    padding-left: 0;
    padding-right: 0;
  }
  .v-navigation-drawer__content {
    padding-right: 4px;
    .v-list-item__title.blog-title {
      font-size: 16px;
      cursor: pointer;
      margin-right: 20px;
      color: #ffc402;
    }
    .v-list-item__title {
      font-size: 14px;
      font-weight: normal;
      text-align: right;
      margin-right: 30px;
      color: #fff;
    }
  }
}
.nav-bottom {
  font-size: 10px;
  user-select: none;
  pointer-events: none;
  color: #777;
  margin-bottom: 20px;
  text-align: center;
  p {
    margin-bottom: 6px;
    vertical-align: middle;
  }
}
</style>
