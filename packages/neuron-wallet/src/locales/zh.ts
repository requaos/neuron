export default {
  translation: {
    mainmenu: {
      neuron: {
        about: '关于{{app}}',
        preferences: '设置...',
        quit: '退出{{app}}',
      },
      edit: {
        label: '编辑',
        cut: '剪切',
        copy: '复制',
        paste: '粘贴',
      },
      view: {
        label: '视图',
        fullscreen: ' 全屏',
      },
      window: {
        label: '窗口',
        minimize: '最小化',
        close: '关闭窗口',
      },
      help: {
        label: '帮助',
        sourceCode: '源代码',
      },
      develop: {
        terminal: '终端',
        develop: '开发',
        forceReload: '强制刷新',
        reload: '刷新',
        toggleDevTools: '开发者工具',
      },
    },
    services: {
      transactions: '交易',
      wallets: '钱包',
    },
    messages: {
      'failed-to-load-networks': '加载节点失败',
      'Networks-will-be-reset': '节点列表将被重置',
      'wallet-password-less-than-min-length': '密码至少{{minPasswordLength}}位字符',
      'wallet-password-more-than-max-length': '密码不能超过{{maxPasswordLength}}位字符',
      'wallet-password-letter-complexity': '密码包含大写字母、小写字母、数字、特殊符号的至少三类',
      'current-wallet-is-not-found': '未找到当前钱包',
      'password-is-required': '缺少密码',
      'password-is-incorrect': '密码不正确',
      'current-key-has-no-data': '当前 Key 文件缺少数据',
      'address-is-invalid': '地址 {{address}} 不合法',
      'codehash-is-not-loaded': 'codehash 还未加载完成',
      'wallet-is-not-found': '未找到钱包 {{id}}',
      'no-active-wallet': '没有默认钱包',
      'wallet-incorrect-password': '密码错误',
      'failed-to-create-mnemonic': '创建助记词失败',
      'failed-to-activate-wallet': '设置默认钱包失败',
      'failed-to-delete-wallet': '删除钱包失败',
      'wallet-name-existed': '钱包名称重复',
      'network-of-id-is-not-found': '未找到 Id 为 {{id}} 的网络设置',
      'id-is-required': '缺少参数 ID',
      'name-and-remote-address-are-required': '缺少名称或地址',
      'invalid-name': '非法名称',
      'default-network-is-unremovable': '默认网络不可删除',
      'cannot-delete-active-network-due-to-lack-of-default-one': '未设置默认网络, 因此无法删除当前网络',
      'active-network-is-not-set': '未设置当前网络',
      'transaction-is-not-found': '未找到交易 {{hash}}',
      'service-not-responds': '{{service}} 服务未响应',
      'name-is-required': '缺少名称',
      'mnemonic-is-required': '缺少助记词',
      'keystore-is-required': '缺少 Keystore',
      'parameters-of-sending-transactions-are-required': '缺少交易参数',
    },
  },
}
