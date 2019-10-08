<template>
  <div class="numberkeyboard">
    <div class="key-box" v-show="keyShow">
      <div class="box-group-first">
        <div class="box-item" v-for="(item,index) in numListF" :key="index"  @click="inputHandler(item)">
          <span class="num-btn">{{item}}</span>
        </div>
        <div class="box-item" @click="delHandler">
          <img class="del-btn" :src="delIcon" alt="删除">
        </div>
      </div>
      <div class="box-group-second">
        <div class="box-left">
          <div class="box-items" v-for="(item,index) in numListS" :key="index" >
            <div class="box-item" v-for="(it,i) in item" :key="i" @click="inputHandler(it)">
              <span class="num-btn">{{it}}</span>
            </div>
          </div>
        </div>
        <div class="box-right">
          <div class="box-item" @click="sureHandler">
            <span class="sure-btn">确定</span>
          </div>
        </div>
      </div>

    </div>
    <p></p>
  </div>
</template>

<script>
import delIcon from '@assets/delete.png'
export default {
  name: 'NumberKeyBoard',
  props: {
    keyShow: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      delIcon: delIcon,
      numListF: ['1', '2', '3'],
      numListS: [
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['00', '0', '.']
      ]
    }
  },
  methods: {
    inputHandler (val) {
      this.$emit('inputHandle', val)
    },
    delHandler () {
      console.log('del')
    },
    sureHandler () {
      console.log('sure')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
p{
  width: 375px;
  background-color: aqua;
  height: 20px;

}
.numberkeyboard{
  background-color: #eeeeee;
  font-size: 18px;
  .key-box{
    padding: 5px 10px;
    .box-group-first{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .box-item{
        background-color: #ffffff;
        width: 82px;
        height: 40px;
        line-height: 40px;
        border-radius: 6px;
        margin: 5px 0;
        .num-btn{
        }
        .del-btn{
          vertical-align: middle;
          width: 26px;
          height: 18px;
        }
      }
    }
    .box-group-second{
      display: flex;
      align-items: center;
      .box-left{
        flex-grow: 1;
        .box-items{
          display: flex;
          align-items: center;
          justify-content: space-between;
          .box-item{
            background-color: #ffffff;
            width: 82px;
            height: 40px;
            line-height: 40px;
            border-radius: 6px;
            margin: 5px 0;
            .num-btn{
            }
            .del-btn{
              vertical-align: middle;
              width: 26px;
              height: 18px;
            }
          }
        }
      }
      .box-right{
        .box-item{
          display: flex;
          align-items: center;
          justify-content: space-around;
          border-radius: 6px;
          margin-left: 10px;
          width: 82px;
          height: 140px;
          background-color: rgb(122, 236, 46);
          color: #ffffff;
          .sure-btn{
          }
        }
      }
    }
  }
}
</style>
