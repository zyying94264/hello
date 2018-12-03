new Vue({
    el: '#app',
    data: {
        productList: [{
                'name': 'HuaWei nova 3',
                'price': 2900,
                'isRed': false,
            },
            {
                'name': '南极棉服',
                'price': 200,
                'isRed': false,
            },
            {
                'name': '北极熊帽子',
                'price': 400,
                'isRed': false,
            },
            {
                'name': '海拉尔羊肉',
                'price': 80,
                'isRed': false,
            },
            {
                'name': '万圣节披萨',
                'price': 180,
                'isRed': false,
            },
        ],
        total: 0, //总价
        name: '', //添加的商品名称
        price: '', //添加商品的价格
        keyword: '', //搜索商品的关键字
        checked: [], //存入要删除商品的index
    },
    methods: {
        select(product) {
            /*  if(product.isRed==false){//方法一:
                product.isRed = true;
             }else{
                product.isRed = false;
             } */
            // console.log(product.price);
            product.isRed = !product.isRed; //方法二

            /* if(product.isRed){//求总价: 方法一
                this.total += parseInt(product.price);
            }else{
                this.total -= parseInt(product.price);
            } */
        },
        sum() {
            let sum = 0;
            this.productList.forEach(function (val, index) {
                if (val.isRed) {
                    sum += parseInt(val.price);
                    console.log(index, val.name, val.price, val.isRed);
                }
            })
            return sum
        },
        add() {
            this.productList.push({
                name: this.name,
                price: this.price,
                'isRed': false,
            });
            this.name = '',
                this.price = 0,
                console.log(this.productList);
        },
        search() {
            let arr = this.productList.filter((val, index) => {
                // console.log(val.name.includes(this.keyword));
                if (val.name.includes(this.keyword)) {
                    // console.log(val.name);
                    return val;
                }
            });
            this.productList = arr;
            //console.log(this.keyword);
        },
        del(index) {
            this.productList.splice(index, 1); //splice(删除位置,删除数量)
            //console.log(this.productList[index].name);
        },
        delAll() {
            //console.log(this.checked);
            let arr = this.productList.filter((val, index) => {
                /* if(this.checked.includes(index)){
                   console.log(index, val.name);
                } */

                if (!this.checked.includes(index)) {
                    console.log(index, val.name);
                    return val;
                }
            });
            this.productList = arr;
            this.checked = []; //清除选中标记
        }
    }
});
