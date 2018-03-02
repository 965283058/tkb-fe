// 账号相关
export const REGISTER = 'register' // post
export const LOGIN = 'login' // post
// export const RESET_PASSWORD = 'user/resetPassword'
export const FIND_PASSWORD_STEP1 = 'user/findPasswordFirstStep'
export const FIND_PASSWORD_STEP2 = 'user/findPasswordSecondStep'
export const MOBILE = 'getUserMobile'

// 公积金相关
export const FUND_LOAN = 'reserveloan/preReserveLoan' // post
export const FUND_APPLY = 'reserveloan/applyReserveLoan' // post
export const FUND_PRE_AUTH = 'reserveloan/getLoanLine' // get
export const FUND_LOGIN_HOUSE = 'housefundVerify/loginHousefund' // get
export const FUND_CITIES = 'housefundVerify/getAllCities' // get
export const FUND_VERIFY = 'housefundVerify/verifyHousefund' // post

// 认证
export const AUTH_BANK = 'creditAuth/creditAuthBank' // post
export const AUTH_TAOBAO = 'creditAuth/taoBao' // post
export const AUTH_MOBILE_STEP1 = 'mobileOperator/validate' // post
export const AUTH_MOBILE_STEP2 = 'mobileOperator/' // post
export const MOBILE_TYPE = 'mobileOperator/checkMobileType' // post

// 填写资料

export const UPLOAD_IDS = 'loanMaterial/uploadIdCardImgBase64' // post
export const SAVE_WORKINFO = 'loanMaterial/saveWorkInfo' // post
export const SAVE_CONTACTOR = 'loanMaterial/saveContactor' // post
export const SAVE_LOAN_INTENTION = 'loanMaterial/saveLoanIntention' // post
export const SAVE_LIVE_ADDRESS = 'loanMaterial/saveLiveAddr' // post
export const GET_COMPANYTYPELIST = 'loanMaterial/getCompanyTypeList' // get
export const GET_COMPANYINDUSTRYLIST = 'loanMaterial/getCompanyIndustryList' // get
export const GET_MARRIAGESTATUSLIST='loanMaterial/getMarriageStatusList'//get
export const GET_DEGREELIST = 'loanMaterial/getDegreeList' // get
export const GET_WORKYEARLIST = 'loanMaterial/getWorkYearList' // get
export const GET_INCOMELIST = 'loanMaterial/getIncomeList' // get
export const GET_CARDINFO = 'loanMaterial/findIdCardInfo' // get
export const GET_AREADATA = 'loanMaterial/getAreaData' // post
export const GET_RELATIONSHIPLIST = 'loanMaterial/getRelationshipList' // get
export const GET_THIRDPARTTOKENID = 'loanMaterial/getThirdPartTokenId' // get
export const GET_FINANCIALSITUATIONLIST = 'loanMaterial/getFinancialSituationList' // get
export const VERIFY_USERINFO = 'loanMaterial/verifyUserInfo' // post
export const APPLYINFOSTATUS = 'loanMaterial/applyInfoStatus' // get
export const SAVE_BASEUSERINFO = 'loanMaterial/saveBaseUserInfo' // post

// 引导页
export const ANALOG_LOGIN = 'cardniu/analogLogin' // post

// 验证码
export const SMS_CODE = 'smsCode/getRegisterSmsCode' // post
export const SMS_VALIDATE = 'smsCode/validateSmsCode' // post

// 绑卡页面
export const BANK_LIST = 'bankCard/getBanks' // get
export const BANK_PAY_CARD = 'bankCard/getPayCard' // get
export const BANK_PROVINCE_CITY = 'bankCard/getProvinceAndCity' // get
export const BANK_BIND = 'bankCard/bind' // get
export const SEND_CODE = 'bankCard/sendCcqCode' //get
export const BANK_CARD_INFO = 'bankCard/getBankCardInfo'
export const BANK_CARD_USER_INFO= 'bankCard/getBankCardUserInfo'
// 贷款
export const LOAN_APPLY = 'loan/apply' // post
export const LOAN_SIGN = 'loan/signSsqian' // get
export const LOAN_AUDIT_RESULT = 'loan/getAuditResult' // get
export const LOAN_INFO = 'loan/getLoanInfo' // get
export const LOAN_PROGRESS = 'loan/getProcess' //get
export const LOAN_CONFIRM = 'loan/confirmLoan' // post
export const LOAN_CHECK_RECHARGE = 'loan/checkIsNeedRecharge' // post
// 还款
export const REPAY_PLAN = 'loan/getRepaymentDetail' // get
export const REPAY_PRE_DETAILS = 'loan/getPrepaymentDetail' // get
export const REPAY_EXECUTE = 'loan/prepaymentExecute'
// 充值
export const RECHARGE_LL_URL = 'recharge/exec' // post
export const RECHARGE_INFO = 'loan/getPrepayRechargeInfo'

// 第三方
export const THIRD_FUND_RECORD = 'loanmanage/loan/partner/k_n_user_quota.do' // post
export const THIRD_PRE_AUTH_INFO = 'hbadmin/inter/ApplyOnline' // post

// 同盾
export const THIRD_TONG_DUN = 'loanMaterial/getThirdPartTokenId'

// 获取文档
export const SERVER_URL = 'loan/getServiceContractHtml'

//获取贷款用途下拉数据
export const LOAN_USE = 'loanMaterial/getPurposeList'

//获取存管开户url
export const GET_DEPOSIT_URL = 'cg/url' //post

//获取存管开户Status
export const GET_DEPOSIT_STATUS = 'cg/setUserStatus' //get

//获取随手记开户url
export const GET_SSJ_URL = 'bankCard/ssjUrl' //post

//代扣提前结清
export const WITHHOLD_RECHARGE = 'loan/prerepayWithhold'

