var vm = new Vue({
    el: '#services',
    data: {
        tableNames:[1,2]
    },
    created:function() {
        axios.get('/api/v1/basicAction').then(res => {
            console.log(res)
            let data = res.data;
            vm.tableNames=data
        })
    },
    methods:{
        onGeneClick:function(){
            axios.post('/api/v1/basicAction/gene').then(res => {
                console.log(res)
              
            })
        },
        onGeneAPIClick:function(tableName){
            console.log(tableName)
            axios.post('/api/v1/basicAction/genec',{tableName}).then(res => {
                console.log(res)
              
            })
        }
    }
})
