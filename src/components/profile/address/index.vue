<template>
    <transition name='slide-fade'>
    <div class="address">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0">
            <defs>
                <symbol viewBox="0 0 8 13" id="arrow-right"><path fill="#D1D1D6" fill-rule="evenodd" d="M1.784 12.714l5.91-5.524a.932.932 0 0 0 0-1.38L1.784.286a1.097 1.097 0 0 0-1.478 0 .932.932 0 0 0 0 1.38L5.478 6.5.306 11.333a.932.932 0 0 0 0 1.381c.408.381 1.07.381 1.478 0z"></path></symbol>
                <symbol viewBox="0 0 18 18" id="edit"><g fill="#999" fill-rule="evenodd"><path d="M8.513 3v1H2.076A.076.076 0 0 0 2 4.075v11.85c0 .041.034.075.075.075h11.85a.074.074 0 0 0 .075-.072V9.521h1v6.407C15 16.52 14.518 17 13.925 17H2.075A1.076 1.076 0 0 1 1 15.925V4.075C1 3.481 1.481 3 2.076 3h6.437z"></path><path fill-rule="nonzero" d="M7.1 10.04l.068 1.312 1.306.067 7.648-7.59-1.42-1.404L7.1 10.04zm7.95-8.676l2.134 2.109a.5.5 0 0 1 .004.707l-8.324 8.26-2.648-.137-.138-2.655 8.267-8.282a.5.5 0 0 1 .705-.002z"></path></g></symbol>
                <symbol xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="delete"><defs><path id="delete_a" d="M13.132 12l6.47-6.47a.75.75 0 0 0-1.061-1.06l-6.47 6.47-6.47-6.47a.75.75 0 0 0-1.06 1.06L11.01 12l-.072.071.071.071-6.47 6.47a.75.75 0 0 0 1.061 1.06l6.47-6.47 6.47 6.47a.75.75 0 0 0 1.06-1.06l-6.47-6.47.072-.07-.071-.072z"></path></defs><use fill="#999" fill-rule="nonzero" transform="translate(-4 -4)" xlink:href="#delete_a"></use></symbol>
            </defs>
        </svg>
        <Header :title="title" />
        <template v-if="$route.hash.indexOf('#/add') == -1 && $route.hash.indexOf('#/edit') == -1">
            <section>
                <ul>
                    <li v-for="(item , index) in addressList" :key="item.id">
                        <div class="left">
                            <p class="address-title">
                                <strong>{{item.username}}</strong>
                                <span>{{item.gender}}</span>
                                {{item.tel}}
                            </p>
                            <p class="address-detail">{{item.address}}</p>
                        </div>
                        <div class="right">
                            <svg class="eidt-icon" @click="edit(item)"><use xlink:href="#edit"></use></svg>
                            <svg class="del-icon" @click="del(index)"><use xlink:href="#delete"></use></svg>
                        </div>
                    </li>
                </ul>
            </section>
            <div class="add-btn" @click="add">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABCFJREFUWAnNmUtsU0cUhs9cQkKCAwgJpxgJqWqXEQS84CHaIpZsKAhKu2JNUwISsAWFLSBBxGPNihYqqmxYIqCIx8I8qi5bIVXCYLdSW2ISHIiH84091sW5wQ8w10e69r3jmTnfnczj/CdGWrT0WO6zkpVt2jwt1qbEmJTec2FZLctqWVbvM4GR8czIwJ/ulyY/TDP1N56fSE5NT/5gxG63VgabaWuM/G7F/NLb3Xfm9t7+fKNtGwLcfDafeP7aHrQih3RkEnTevyCwX37aY9av7JZP+ufJsoWBu7SO/POiJH/r9WxiRu7+NS03HxftxMtS2ZcxBb05sajLnLw+nCzUA60LuHYst0NH65yCDdDZls8XyLer+2TNivkyr27rsvsZpX7w5JX8+GhSrv3xslxoTE5H9fv7IwNXygXRn3O6sNaa9Fj+iPZ9VOHMUKpbDmxKyKrl86N7arD0t6ev5NStgjzMTovOUasAo5mR5DGj91FdRAJuuGR7i9n8BSt2VxAYe/CLhPluqC+qfctlFx9OyslfC7ZUsjqQ5nJPKrnnzjdmqrbDoLaAkfNwiZ7Ant225IPD4ZMXpm98MBDOp/qu5ZkFWP6z2l00vLB7qVmni6BdRt/48JD4rvX1FnFlQfys+5Z7u3bChUHu6UofHv/P6r6q01J2hhdOdQTZSiqr1TDnWoFbezonXM0avvDJYoQBFt9HFZB9jq2E1fqhF4R39q5vfOIbBsdSqewAOSF0dA9RxlYSl3nfsMAEhwMsFqf2KXmCTfh997n3eTl8wwALR2oV0JrS1zxwQsRtnoHzHpaAqEQn5iBnK8dX3AYDLDDBFlRCJvlKD/5Gz9Z2vgQMsOADNuZgmodWthXatcNCLOlAJ6QLMgmZOsWqLMoWVCJhF8t1CiCxpTON0rv0xo1gtTCCstnTodH69/e7EHOWxxBLSoMpcXGY+5hVNZ4CzwJblwY4TxWxnzB95ZLoeTjXm9bi+5FrtH5te/8MCwYbiwTl5TQE351g6BlnysYicYAInE6xKouysVwygBGTdYqhBCuWUckh4zzcUGmI+orbYECmwgFbgOJHVKNbkYZxGwywwASb2xFR/IChW+M2z+CZHCDpCF0sBUQ1ujUuw7cT9srimBTEAZIr0fDhBGCI6rjM+4bF528cIEDkSnQUcyh+RPXHNnxWsg05x1IBcHGXh+lo2QkkelSJR0lHHL76v338b/s3b3zgq5wCkdGwJobprRGkwCWNTud/Ih2B4j++dXFLGpm+6hmHA3CFom4rmp/J7E/urk0iVeeg74wKJHJoQEMUfzvmJH3St4dzPiMyXLNG0IN2dPrNQ/LdsQnMMORcKWDUFwInnAKmHeGSTwEzzzjn25YCDoOSjiALgdBHt4Z/q3fP2dq2JHqU84/1b4g3B4s+pKLE0ioAAAAASUVORK5CYII=" class="bottom-icon">
                <div>新增收货地址</div>
            </div>
        </template>
        <template v-else>
            <div class="address-modify">
                <div class="form-item">
                    <strong>联系人</strong>
                    <div class="item-inner">
                        <input type="text" v-model="address.username" placeholder="您的姓名">
                        <div class="gender">
                            <span class="radio activted">先生</span>
                            <span class="radio">女士</span>
                        </div>
                    </div>
                </div>
                <div class="form-item">
                    <strong>电话</strong>
                    <div class="item-inner">
                        <input type="tel" v-model="address.tel" placeholder="您的手机号">
                    </div>
                </div>
                <div class="form-item">
                    <strong>地址</strong>
                    <div class="item-inner">
                        <input type="address" v-model="address.address" placeholder="小区/写字楼/学校等" readonly>
                        <svg><use xlink:href="#arrow-right"></use></svg>
                    </div>
                </div>
                <div class="form-item detail">
                    <strong>门牌号</strong>
                    <div class="item-inner">
                        <textarea type="text" v-model="address.detail" placeholder="10号楼5层501室"></textarea>
                        <svg class="edit-icon" @click="edit(item)"><use xlink:href="#edit"></use></svg>
                    </div>
                </div>
                <div class="form-item">
                    <strong>标签</strong>
                    <div class="item-inner">
                        <span class="radio">家</span>
                        <span class="radio">学校</span>
                        <span class="radio">公司</span>
                    </div>
                </div>
            </div>
            <button>确定</button>
        </template>
    </div>
    </transition>
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
    name: 'Address',
    components: {
        Header : () => import('@/components/Header')
    },
    data () {
        return {
            title:'我的地址',
            address:{
                username:'',
                gender:'',
                tel:'',
                address:'',
                detail:''
            },
            addressList:[
                {id:1,username:'小脑斧',gender:'女士',tel:'15656892160',address:'天保·青年公寓'},
                {id:2,username:'凯',gender:'先生',tel:'18344582474',address:'七宝中心幼儿园(佳宝分园)七宝镇佳宝四村53号 4楼401'}
            ]
        }
    },
    beforeRouteUpdate (to , from , next) {
        this.title = to.hash == '#/add' ? '添加地址' : to.hash == '#/edit' ? '修改地址': '我的地址'
        next ();
    },
    methods : { 
        add () {
            this.$router.push('/profile/address/#/add')
            this.address.username = '';
            this.address.gender = '';
            this.address.tel = '';
            this.address.address = '';
        },
        edit (address) {
            this.$router.push('/profile/address/#/edit');
            this.address = {...address} ;
        },
        del (index) {
            MessageBox.confirm('确定删除该地址' , '删除地址').then(action => {
                console.log(action);
                this.addressList.splice(index , 1);
            }).catch( () => {
                
            });
        }
    }
}
</script>

<style scoped lang="scss">
.flex {
  display:-webkit-box; 
  display:-webkit-flex;
  display:flex;
}
.flex-center {
  -webkit-box-align:center;
  -webkit-align-items:center;
  align-items:center;
}
.flex-space-between {
  -webkit-box-pack:justify;
  -webkit-justify-content:space-between;
  justify-content:space-between;
}
.flex-content-center {
	-webkit-box-pack:center;
  	-webkit-justify-content:center;
  	justify-content:center;
}
.address {
    height: 100%;
    svg {
        width:12px;
        height:12px;
    }
    section {
        ul {
            background-color:#fff;
            margin-bottom:34px;
            li {
                @extend .flex;
                @extend .flex-center;
                padding:10px;
                border-bottom:1px solid #ddd;/*no*/
                .left {
                    -webkit-box-flex: 1;
                    flex: 1;
                    font-size:12px;
                    color:#666;
                    margin-right:5px;
                    strong {
                        color:#000;
                    }
                    p.address-detail {
                        margin-top:3px;
                        font-size:10px;
                    }
                }
                .right {
                    width: 40px;
                    text-align: center;
                    svg.del-icon {
                        width: 10px;
                        height: 10px;
                        margin-left:5px;
                    }
                }
            }
        }
    }
    .add-btn {
        @extend .flex;
        @extend .flex-center;
        @extend .flex-content-center;
        height:34px;
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        background-color: #fff;
        color:#3190e8;
        border-top: 1px solid #ddd;/*no*/
        img {
            width:16px;
            height:16px;
            margin-right:5px;
        }
    }
}
.address-modify {
    background-color: #fff;
    padding:0 10px;
    .form-item {
        @extend .flex;
        @extend .flex-center;
        padding:10px 0;
        strong {
            font-size:10px;
            min-width:40px;
        }
        input , textarea {
            width: 100%;
            margin-right:10px;
            color: #666;
            border: none;
            outline: none;
        }
        .radio {
            min-width: 40px;
            text-align: center;
            padding: 3px 0;
            display: inline-block;
            border: 1px solid #ddd;
            border-radius: 2px;
            margin-right: 10px;
            color: #666;
        }
        .radio.activted {
            color: #2395ff;
            background-color: #eef7ff;
            border-color: rgba(35,149,255,.18);
        }
        .item-inner {
            @extend .flex;
            @extend .flex-center;
            -webkit-box-flex: 1;
            flex: 1;
            svg.edit-icon {
                width:16px;
                height:16px;
            }
            .gender {
                flex: none;
            }
        }
    }
    .detail {
        -webkit-box-align:flex-start;
        -webkit-align-items:flex-start;
        align-items:flex-start;
        .item-inner {
            -webkit-box-align:flex-start;
            -webkit-align-items:flex-start;
            align-items:flex-start;
        }
    }
}
button {
    width: 90%;
    margin: 0 auto;
    display: block;
    border-radius: 4px;
    background-color: #00d762;
    color:#fff;
    height:32px;
    margin-top: 20px;
}
</style>
      