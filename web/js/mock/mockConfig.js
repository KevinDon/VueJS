var data = Mock.mock({
    data : [{
        'id|1-10' : 1,
        'data' : '',
        'success' : '@boolean(10, 0, true)'
    }]
});
Mock.mock(RegExp('localhost/username?' + ".*"), 'POST', data)