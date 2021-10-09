// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”
// 这句是必须的写的，固定格式。没有为啥，规定就是这样用的
const cloud = require('wx-server-sdk')

// 这句也是必须写的。初始化
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
  // 配置env的值，默认也不用改。
  // cloud.DYNAMIC_CURRENT_ENV 默认是当前所处的云环境，如果之前创建了多个云服务环境，就需要改。
  // 一般初学咱们也不会创建好几个，因为一个账号只有开通一个免费的基础云服务环境。
  // 忘记了怎么开通云服务的，可以去看文章一「基于云开发的微信小程序实战教程（一）」
})

/**
 * event，能够拿到前端传过来的数据，比如删除某条数据，从前端把这条数据的id传过来，使用event对象去拿到参数
 * context，一般用不到
 * 这个方法也是固定格式，按这个样子在里面写自己的逻辑就可以了
 */
exports.main = async (event, context) => {

  console.log(event)

  // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）等信息
  // OPENID比较常用于校验身份
  // OPENID是用户的唯一身份标识，不管你改微信号、昵称、头像等等，这个值是不会变的，一个用户就一个值
  const wxContext = cloud.getWXContext()

  // 这里写你要做的逻辑，比如查询列表，调用到这里就是拿到存下来的数据，并把它 return 出去

  // 使用 return 把你需要返回给前端的数据返回，这样页面就能拿到你的处理结果了
  return {
    openid: wxContext.OPENID,
    message: "我从云函数把数据带回来了"
  }
}

