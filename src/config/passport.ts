import { User } from "../entity/User";

const config=require('./default');
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : config.secretKey
}
module.exports=passport=>{
    passport.use(new JwtStrategy(opts,async (jwt_payload,done)=>{
        console.log({jwt_payload})
    	//jwt_payload 返回的是登录时返回的数据 即payload
        const user=await User.findOne(jwt_payload.id);
        if(user){
            done(null,user);
        }else{
            done(null,false);
        }
    }))
    return passport
}
// 

