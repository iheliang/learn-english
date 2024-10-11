<template>
  <view class="rate-box">
    <block v-for="(item,index) in starNum" :key="index">
      <view class="l-icons icon-xingxing star" :class="[hollow&&(index+1>value)?'icon-xingxing1':'icon-xingxing']"
        :style="{color:index+1 <= value ? activeColor : unActiveColor}" @click="change(index)"></view>
    </block>
  </view>
</template>

<script>
  export default {
    name: 'lStarRate',
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      // 星星总数
      starNum: {
        type: Number,
        default: 5
      },
      // 选中星星数量
      value: {
        type: Number,
        default: 0
      },
      // 选中颜色
      activeColor: {
        type: String,
        default: '#F2CB51'
      },
      // 未选中时的颜色
      unActiveColor: {
        type: String,
        default: '#B2B2B2'
      },
      // 是否空心
      hollow: {
        type: Boolean,
        default: false
      },
      // 禁用点击
      disabled: {
        type: Boolean,
        default: false
      },
    },
    methods:{
      change(index){
        if(this.disabled) return
        this.$emit('input',index+1)
      }
    }
  };
</script>

<style lang="scss" scoped>
	@font-face {
		font-family: 'l-icons';
		src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAT4AA0AAAAAB4wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAE3AAAABoAAAAciBprQUdERUYAAAS8AAAAHgAAAB4AKQALT1MvMgAAAaAAAABDAAAAVj1YSN1jbWFwAAAB+AAAAEIAAAFCAA/qlmdhc3AAAAS0AAAACAAAAAj//wADZ2x5ZgAAAkgAAADwAAABZLMTdXtoZWFkAAABMAAAADAAAAA2FZKISmhoZWEAAAFgAAAAHQAAACQHYgOFaG10eAAAAeQAAAARAAAAEgx6AHpsb2NhAAACPAAAAAwAAAAMAEYAsm1heHAAAAGAAAAAHgAAACABEQBPbmFtZQAAAzgAAAFJAAACiCnmEVVwb3N0AAAEhAAAAC0AAABHLO3vkXjaY2BkYGAA4t2/VF7G89t8ZeBmYQCBm9ZKMnC6ikGMuYXpP5DLwcAEEgUAHPQJOXjaY2BkYGBu+N/AEMPCAALMLQyMDKiABQBQwgLwAAAAeNpjYGRgYGBlcGZgYgABEMkFhAwM/8F8BgAPigFhAAB42mNgZGFgnMDAysDA1Ml0hoGBoR9CM75mMGLkAIoysDIzYAUBaa4pDA7PXj17zdzwv4EhhrmBoQEozAiSAwD/YA2wAHjaY2GAABYIrmKoAgACggEBAAAAeNpjYGBgZoBgGQZGBhCwAfIYwXwWBgUgzQKEQP6z1///A8lX//9LSkJVMjCyMcCYDIxMQIKJARUwMgx7AAA/9QiLAAAAAAAAAAAAAABGALJ42mNgZKhiEGNuYfrPoMnAwGimps+ox6jPqKbEz8jHCMLyjHJAmk1czMie0cxInlHMDChrZs6cJyaosI+NlzmU34I/lImPdb+CoHgXCyujIosYtzTfKlYBtlWyuqwKjKwsjNvFTdlkGDnZ1srKrmXjZJRhMxVvZxFgA+rgYI9iYoriV1TYzybAwsDABHeLBIMT0DUg29VBTjEHucvcjtGeUVyOUZ6JaFcybefnZ5HuFdEX6ZVm5uMvniemxuXmzqUmNs+FeOfHCeiKzfPi4vKaJ6YrUCDOIiM8YYKwDIu4OMRbrOtkZdex4vMWACzGM5B42n2QPU4DMRCFn/MHJBJCIKhdUQDa/JQpEyn0CKWjSDbekGjXXnmdSDkBLRUHoOUYHIAbINFyCl6WSZMia+3o85uZ57EBnOMbCv/fJe6EFY7xKFzBETLhKvUX4Rr5XbiOFj6FG9R/hJu4VQPhFi7UGx1U7YS7m9JtywpnGAhXcIon4Sr1lXCN/CpcxxU+hBvUv4SbGONXuIVrZakM4WEwQWCcQWOKDeMCMRwskjIG1qE59GYSzExPN3oRO5s4GyjvV2KXAx5oOeeAKe09t2a+Sif+YMuB1JhuHgVLtimNLiJ0KBtfLJzV3ahzsP2e7ba02L9rgTXH7FENbNT8Pdsz0khsDK+QkjXyMrekElOPaGus8btnKdbzXgiJTrzL9IjHmjR1OvduaeLA4ufyjBx9tLmSPfeoHD5jWQh5v91OxCCKXYY/k9hxGQAAAHjaY2BigAAuMMnIgA5YwaJMjEyMzPzJ+Tk5qcklmfl58WmZOTlcCD4Ak9QKlAAAAAAAAAH//wACAAEAAAAMAAAAFgAAAAIAAQADAAQAAQAEAAAAAgAAAAB42mNgYGBkAIKrS9Q5QPRNayUZGA0AM8UETgAA) format('woff');
		font-weight: normal;
		font-style: normal;
	}

  /* icon默认样式 */
  .l-icons {
    font-family: 'l-icons';
    font-size: 50rpx;
    color: #333333;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
  }

  .icon-xingxing:before {
    content: "\e6ea";
  }

  .icon-xingxing1:before {
    content: "\e6eb";
  }

  .rate-box {
    display: flex;
    align-items: center;

  }
</style>
