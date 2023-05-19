const rfqConstant={
  'development':{//开发环境，默认
    shenqing:'1',
    xunjia:'2',
    shenpiTy: '1',
    shenpiBty: '0',
    shenpiBh: '2',
    shenpiAjustType: 5,
    shenpiBohuiType: 4,
    workFlowTimeOut: 90000
  },
  'production':{//生产环境 npm run build:prod的时候执行这个环境
    shenqing:'1',
    xunjia:'2',
    shenpiTy: '1',
    shenpiBty: '0',
    shenpiBh: '2',
    shenpiAjustType: 5,
    shenpiBohuiType: 4,
    workFlowTimeOut: 90000
  },
  'staging':{//演示环境 npm run build:staging的时候执行这个环境
    shenqing:'1',
    xunjia:'2',
    shenpiTy: '1',
    shenpiBty: '0',
    shenpiBh: '2',
    shenpiAjustType: 5,
    shenpiBohuiType: 4,
    workFlowTimeOut: 90000
  }
}
export default function getConstants(){
  let env =process.env.NODE_ENV;
  return rfqConstant[env];
}
