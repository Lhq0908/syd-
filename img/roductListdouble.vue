<template>
    <c2b-layout :ready="ready"  class="roductList">
        <yd-navbar title="产品列表"  slot="navbar">
            <router-link to="/native/index" slot="left">
                <yd-navbar-back-icon></yd-navbar-back-icon>
            </router-link>
        </yd-navbar>
                <router-link :to="'/native/specialtyDetails/'+inem.id" class="pay-goods" v-for="inem in orderall" :key="inem">
                    <div class="row information">
                        <div class="information-left">
                            <img :src="inem.thumb"/>
                        </div>
                        <div class="information-rght">
                            <p class="ngbinding">{{inem.title}}</p>
                            <div class="shop-num common">
                                <div class="shop-num-money">
                                    <span><font>¥</font>{{inem.vip_price}}</span>
                                </div>
                                <div class="shop-num-numberl">
                                    x{{inem.num}}
                                </div>
                                <div class="shop-num-numbor" v-if="inem.User_commission">
                                    购买赠游币:{{inem.User_commission}}
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
                <div style="font-size: 0.3rem;text-align: center;margin-top: 50%;color: #b9b5b5;" v-if="!numl"> 暂无此数据....</div>

    </c2b-layout>
</template>

<script>
    import Qs from 'qs'
    export default {
        data() {
            return {
                ready: true,
                orderall:[],
                gopdata:'',
                citylid:'',
                numl:'',
                page:0,
                condition:''

            }
        },
        mounted(){
            this.init()
        },
        methods:{
            init() {
                if(this.$route.params.id == '1'){this.gopdata = 'sales';}
                if(this.$route.params.id == '2'){this.gopdata = 'nowtime';}
                let params = {
                    type:this.gopdata,
                    page: this.page,
                }
                this.axios.post('/Service/Native/getList', Qs.stringify(params)).then((response) => {
                    var data = response.data;
                    if (data.code == 200) {
                        this.orderall = data.result;
                        this.numl += this.orderall.length;
                    }
                });
//                获取保存数据
                let need = this.$store.state.carNeed;
                this.citylid = need.citylid;
                let paramsdata = {
                    keyword:this.citylid,
                    page: this.page,
                }
                this.axios.post('/Service/Native/getSearch', Qs.stringify(paramsdata)).then((response) => {
                    var data = response.data;
                    if (data.code == 200) {
                        this.orderall = data.result;
                        this.numl += this.orderall.length;
                    }
                });
            },
            //        滚动加载

    }
    }
</script>

<style lang="css">
    .roductList .pay-goods {background-color: #fff;  border-bottom: 1px solid #e5e5e5;margin: 0.17rem 0.2rem 0 0.2rem;display: block;}
    .roductList .information {  background-color: #fff!important;  line-height: 0.4rem;padding:0.15rem 0.15rem;padding-top: 0.25rem}
    .roductList .information .information-left{margin-right: 0.15rem; height: 1.9rem;width: 2rem;border:1px solid #eee;}
    .roductList .information .information-rght{flex: 1;}
    .roductList .information img {width: 100%;height: 100%}
    .roductList .information .ngbinding { height: 0.8rem; font-weight: 500!important; display: -webkit-box;  -webkit-box-orient: vertical;  -webkit-line-clamp: 2;  overflow: hidden; color: #000;  font-size: 0.33rem;  font-weight: 200;  margin-bottom: 0.3rem; }
    .roductList .common { display: flex;  flex-direction: row;  flex-wrap: nowrap;  }
    .roductList .shop-num .shop-num-money {overflow: hidden;  }
    .roductList .information .shop-num div>span {  color: #f01414;  font-size: 0.42rem;  margin-top: 0.4rem;  height: 0.6rem;  line-height: 0.6rem;  overflow: hidden;  }
    .roductList .information font {  font-size: 0.3rem;  }
    .roductList .shop-num .shop-num-numberl {  text-align: -webkit-right;padding-top: 0.2rem;font-size: 0.24rem;color:#999;margin-left: .2rem;}
    .roductList .shop-num .shop-num-numbor {  text-align: -webkit-right;padding-top: 0.2rem;font-size: 0.24rem;color:#f01414;flex:1;}
    .roductList .tab-panel{background-color: #f6f6f6;}
</style>
