import { post, get } from './utils'
import * as urls from './utils/urls'
import { getTokenIds } from './third'
/**
 * @description 注册
 * @param kaniuId {String}  required 卡牛id 路由中获取
 * @param mobile  {String}  required 手机号
 * @param password {String} required 密码
 * @param smsCode {String}  required 短信验证码
 */
export function register(opts) {
	return post(urls.REGISTER, opts)
}

/**
 *
 * @param loginChannelId {String} required  登录渠道id，卡牛登录：1 公积金贷款app登录：2
 * @param mobile {String}         required 手机号码11位数字
 * @param password {String}       required 密码
 * @param smsCode {String}                 设备首次登陆时或者多次用户名密码输错时需要，待确认
 */
export function login(opts) {
	return post(urls.LOGIN, opts)
}

/**
 * @param mobile {string}      required 手机号
 * @param newPassword {string} required 新的登录密码
 * @param smsCode {string}     required 短信验证码
 */
export function resetPassword(opts) {
	return post(urls.RESET_PASSWORD, opts)
}

export function findPasswordStep1(opts) {
	return get(urls.FIND_PASSWORD_STEP1, opts)
}
export function findPasswordStep2(opts) {
	return get(urls.FIND_PASSWORD_STEP2, opts)
}

/**
 * @description 获取已验证的手机号码
 */
export function getMobile() {
	return get(urls.MOBILE)
}