var vm = new Vue({
    el: '#services',
    data: {
        tableNames:[1,2],
        result:''
    },
    created:function() {
        axios.get('/api/v1/basicAction').then(function(res){
            console.log(res)
            let data = res.data;
            vm.tableNames=data
        })
    },
    methods:{
        onGeneClick:function(){
            axios.post('/api/v1/basicAction/gene').then(function(res){
                console.log(res)
              
            })
        },
        onGeneAPIClick:function(tableName){
            console.log(tableName)
            axios.post('/api/v1/basicAction/genec',{tableName}).then(function(res){
                console.log(res)
              
            })
        },
        onTestAPIClick:function(tableName){
            axios.get('/api/v1/'+tableName).then(function(res){
                console.log(res)
                vm.result=JSON.stringify(res.data, null, "\t")
                $('#myModal').modal()
            })
        }
    }
})
