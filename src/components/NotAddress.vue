<template>
    <div class="not-address">
        <section>
            <img src="https://fuss10.elemecdn.com/2/67/64f199059800f254c47e16495442bgif.gif">
            <h3>输入地址后才能订餐哦！</h3>
            <button><router-link to="/location">手动选择地址</router-link></button>
        </section>
    </div>
</template>

<script>
export default {
    name: 'NotAddress',
    data () {
        return {

        }
    },
    methods : {
        
    }
}
</script>

<style scoped lang="scss">  
.not-address {
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
            margin:5px 0;
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
      