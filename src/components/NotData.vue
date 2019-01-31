<template>
    <div class="not-data">
        <section>
            <img :src="info.img">
            <h3>{{info.title}}</h3> 
            <button><router-link :to="info.link">{{info.text}}</router-link></button>
        </section>
    </div>
</template>

<script>
export default {
    name: 'NotData',
    props:{
        info:{
            type:Object,
            default:function () {
                return {
                    img:'',
                    title:'',
                    text:'',
                    link:''
                }
            }
        },
    },
    data () {
        return {

        }
    }
}
</script>

<style scoped lang="scss">  
.not-data {
    section {
        width:60%;
        margin: 0 auto;
        img {
            width: 100%;
        }
        h3 {
            text-align: center;
            color: #6a6a6a;
            font-weight: 400;
            font-size:12px;
            margin:8px 0;
        }
        button {
            width: 100px;
            height: 30px;
            background-color: #56d176;
            border-radius: 4px;
            text-align: center;
            margin: 0 auto ;
            display: block;
            a {
                display: block;
                line-height:30px;
                color: #fff;
            }
        }
    }
}
</style>
      