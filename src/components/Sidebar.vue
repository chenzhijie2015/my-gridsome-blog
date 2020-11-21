<template>
  <div>
    <el-card shadow="never">
      <el-menu :default-active="active" @select="onSelect">
        <el-menu-item
          v-for="(item, index) in constantRouterMap"
          v-if="
            item.meta &&
            item.meta.type == 'user' &&
            (token || !item.meta.LoginRequired) &&
            (!mini || !item.meta.mini)
          "
          :key="item.path"
          :index="index.toString()"
        >
          <i :class="item.meta.icon"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </el-menu-item>
      </el-menu>
    </el-card>

    <el-card shadow="never" style="margin-top: 20px; text-align: center">
      <div
        v-if="!token"
        style="font-size: 0.9rem; line-height: 1.5; color: #606c71"
      >
        <el-tag type="danger" size="small">&nbsp;</el-tag>&nbsp;&nbsp;
        Token未绑定&nbsp;&nbsp;
        <el-button type="text" @click="openTokenDialog">绑定</el-button>
      </div>
      <div
        v-if="token"
        style="font-size: 0.9rem; line-height: 1.5; color: #303133"
      >
        <el-tag type="success" size="small">&nbsp;</el-tag>&nbsp;&nbsp;
        Token已绑定&nbsp;&nbsp;
        <el-button type="text" @click="cancellation">注销</el-button>
      </div>
      <div style="margin-top: 10px; text-align: left">
        <el-alert
          title="Token获取"
          type="info"
          description="在 github-> settings-> developerSettings-> personalAccessTokens 勾选gist权限,获取Token. 详情参考README.md"
          :closable="false"
        >
        </el-alert>
      </div>
    </el-card>
    <token-dialog ref="tokenDialog"></token-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { constantRouterMap } from "@/router";
import TokenDialog from "@/components/TokenDialog";
export default {
  components: {
    TokenDialog,
  },
  data() {
    return {
      constantRouterMap,
      active: "/user/new",
      parentUrl: "",
      menuList: [],
    };
  },
  computed: {
    ...mapGetters(["token", "githubUsername", "mini"]),
  },
  created () {
    this.onSelect('0')
  },
  methods: {
    onSelect(index) {
      const item = this.constantRouterMap[parseInt(index)]
      // console.log(item)
      this.active = index
      this.$setTitle(item.meta.title)
      this.$store.commit('SET_SIDEBAR', item.path)
    },
    openTokenDialog() {
      this.$refs.tokenDialog.open(() => {});
    },
    cancellation() {
      this.$store.dispatch("Cancellation");
    },
  },
};
</script>