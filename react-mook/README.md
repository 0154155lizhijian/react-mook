- 在只使用redux的时候，需要传入action 的相关参数在父组件传入，子组件引用才可以进行dispatch操作
subscribe（listen）进行实时更新

<Index 
    store={store} 
    add = {add}
    del = {del}
    addAsync ={addAsync}
></Index>


- 在使用react-redux时则只需要给provider传入一个store 
<Provider  store={store}>
    <Index></Index>
</Provider>

export default connect(mapStatetoProps,actionCreate)(Index)
数据都由props传入 rrc生成函数
mapStatetoProps  要什么属性
actionCreate     要什么方法