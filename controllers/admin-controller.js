const { User, Tweet, Like, Followship } = require('../models')

const adminController = {
  // 後台登入
  signInPage: (req, res) => {
    return res.render('admin/signin')
  },
  signIn: async (req, res) => {
    // req.flash('success_msg', '登入成功')
    return res.redirect('/admin/tweets')
  },
  // 後台頁面
  adminGetTweets: async (req, res, next) => {
    try {
      let tweets = await Tweet.findAll({
        order: [['updatedAt', 'DESC']],
        include: User
      })
      tweets = tweets.map(tweet => ({
        ...tweet.toJSON(),
        description: tweet.description.substring(0, 50)
      })
      )
      return res.render('admin/tweets', { tweets })
    } catch (e) {
      next(e)
    }
  },
  deleteUserTweet: async (req, res, next) => {
    const { tid } = req.params
    try {
      const tweet = await Tweet.findByPk(tid)
      if (!tweet) throw new Error("This tweet didn't exist!")
      await tweet.destroy()
      return res.redirect('/admin/tweets')
    } catch (e) {
      next(e)
    }
  },
  adminGetUsers: async (req, res, next) => {
    try {
      let users = await User.findAll({ raw: true, where: { role: 'user' } })
      users = await Promise.all(users.map(async (user) => {
        const userId = user.id
        const followings = await Followship.findAll({ raw: true, where: { followerId: userId } })
        const followers = await Followship.findAll({ raw: true, where: { followingId: userId } })
        const tweets = await Tweet.findAll({ raw: true, where: { UserId: userId } })
        const likes = await Like.findAll({ raw: true, where: { UserId: userId } })


        user.totalTweets = tweets ? tweets.length : 0
        user.totalLikes = likes ? likes.length : 0
        user.totalFollowings = followings ? followings.length : 0
        user.totalFollowers = followers ? followers.length : 0
        return user
      }))

      return res.render('admin/users', { users })
    } catch (e) {
      next(e)
    }
  }
}
module.exports = adminController