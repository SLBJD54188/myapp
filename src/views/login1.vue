<template>
    <div>
        <div class="top">
            <div class="center">
                <div class="cen">
                    <img src="../../public/ogo.png" alt="">
                </div>
                <div class="follter">
                    <el-from ref="form" :model="form">
                        <el-form-item label="用户名">
                            <el-input v-model="form.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input v-model="form.password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="primary">确认</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                    </el-from>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                username: 'admin',
                password: '123456'
            }
        }
    },
    methods: {
        primary() {
            // 通过dispatch 调用 vuex里面的actions方法 
            this.$store.dispatch('gitlon', this.form)
        }
    }
}
</script>
<style lang="scss" scoped>
.top {
    // 可视区样式
    width: 100vw;
    height: 100vh;
    background-color: #2b4b6b;
    display: flex;
    justify-content: center;
    align-items: center;

    .center {
        width: 450px;
        height: 304px;
        background-color: #fff;
        position: relative;

        .cen {
            width: 132px;
            height: 132px;
            padding-top: 20px;
            border-radius: 50%;
            background-color: #fff;
            text-align: center;
            position: absolute;
            left: 34%;
            top: -24%;
            box-shadow: 0 0 20px #fff;

            img {
                width: 130px;
            }
        }

    }

    .follter {
        width: 80%;
        margin: 0 49px;
        margin-top: 80px;

        .el-input {
            margin-bottom: 10px;
        }
    }
}
</style>