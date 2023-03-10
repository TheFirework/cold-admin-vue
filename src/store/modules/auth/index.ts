import { defineStore } from 'pinia'

interface AuthState {
  /** 用户信息 */
  userInfo: object
  /** 用户token */
  token: string
  /** 登录的加载状态 */
  loginLoading: boolean
}

export const useAuthStore = defineStore('auth-store', {
  state: (): AuthState => ({
    userInfo: {},
    token: '',
    loginLoading: false
  }),
  getters: {
    /** 是否登录 */
    isLogin(state) {
      return Boolean(state.token)
    }
  },
  actions: {
    /**
     * 登录
     * @param userName - 用户名
     * @param password - 密码
     */
    async login(userName: string, password: string) {
      this.loginLoading = true
      // const { data } = await fetchLogin(userName, password);
      // if (data) {
      //   await this.handleActionAfterLogin(data);
      // }
      this.loginLoading = false
    }
  }
})
