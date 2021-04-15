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
    }
})
