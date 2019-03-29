<template>
	<div class="park_Registration">
		<header>
				<h1>车辆信息录入</h1>
		</header>

		<section>
			<div class='mainpart'>
			<div id="oneInfo">
				<span>登记号码：</span>
				<el-input
				  placeholder="请输入内容"
				  v-model="registerNum"
				  clearable
				  class='carInfo'>
				</el-input>
				<p v-show='flag'>*登记号已存在</p>
			</div>
			<div id='twoInfo'>
				<span>车牌号：</span>
				<el-input
				  placeholder="请输入内容"
				  v-model="carNum"
				  clearable
				  class='carInfo'>
		        </el-input>
			</div>
			<el-row >
				 <el-button class='subbtn' @click='upload()' round>提交</el-button> 
			</el-row>
			<div id="prompt">
				<span v-show='flag1'>*输入框中的内容不能为空</span>
			</div>

			</div>
		</section>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        registerNum: '',
        visitingTime:'',
        carNum:'',
        flag:false,
        flag1:false
       
      }
    },
    created(){
    /*	this.$http.get("http://localhost:3000/list").then((res)=>{
                              this.list=res.data
                              console.log(this.list)
                         })*/
    },
    methods:{
    	 upload(){
    	 				if(this.registerNum==''||this.carNum==''){

								this.flag1=true
								return false
							}	

    	 				var date = new Date();
						var d = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +date.getHours()+ ":" + date.getMinutes()+":"+date.getSeconds();
						console.log(d)
						console.log(this.registerNum)
						console.log(this.carNum)

                        this.$http.post("http://localhost:3000/list",{   //post是传值进去
                              registerNum:this.registerNum,
                              carNum:this.carNum,
                              visitingTime:d
                        },
                        {
                              headers:{
                                    "content-type":"application/json"
                              }
                  
		                  }).then((res)=>{	
		               				this.registerNum='',
			                  		this.carNum='',
			                  		console.log(res.status)
			                       console.log("upload data success")
		                  		
		                  		
		                  }).catch((error)=>{
		                  		if(error.message==="cast date error"){
		                  			console.log("时间转换错误")
		                  		}else if(error.message==="register id exists"){
		                  				this.flag=true
		                  			console.log("登记号已存在")
		                  		}else if(error.message==="upload info error"){
		                  			console.log("数据录入错误")
		                  		}
		                  })
		                  
		              },
		              
    }

  }
</script>
<style type="text/css">
	*{
		margin:0 auto;
		padding:0;
	}
	body{
		width:100%;
		height:100%;
		background: url('./img/timg.jpg') no-repeat;
		background-size:100% 100%;
		overflow: hidden;
	}
	.park_Registration{
		width:100%;
		height:1000px;
	}
	.park_Registration>header{
		line-height: 100px;
		padding-left: 30px;
		width:100%;
		height:100px;
		background:#0099ff;
		font-family:"宋体";
		border-bottom:1px solid #fff;
		
	}
	.park_Registration section{
		display: flex;
		margin:100px auto;
		background-color: rgba(255,255,255,0.5);
		border:2px solid #fff;
		width:500px;
		height:450px;
		border-radius:  10% 10%; 
		
	}
	.park_Registration section .mainpart{
		margin: auto auto;
		width: 80%;
		height: 80%;
		padding-top: 50px;
		position: relative;

	}
	.mainpart #oneInfo{
		width: 100%;
		display: flex;
		float: left;
		margin-top: 40px;
		margin-bottom: 40px;
		position: relative;
	}
	.mainpart #oneInfo p{
		position: absolute;
		top: 45px;
		left:150px;
		font-size: 13px;
		color: red;
		
	}
	.mainpart #twoInfo{
		width: 100%;
		display: flex;
		float: left;
	}
	
	.mainpart #twoInfo span,.mainpart #oneInfo span{
		padding-left: 35px;
		height:40px;
		line-height: 40px;

	}
	.mainpart #twoInfo .carInfo{
		margin-left: 20px;
	}
	.mainpart>span{
		width:30px;
		height:40px;
		line-height: 40px;
	}
	.mainpart .carInfo{
		width:250px;
		float: left;
	}
	.mainpart .el-row{
		height: 10px;
		width: 100%;
	}
	.mainpart .subbtn{
		position: absolute;
		left:31%;
		top:220px ;
		height: 40px;
		width:150px;
		background: #0099ff;
		color: #fff;
		border:1px solid #fff;
	}
	#prompt{
		position: absolute;
		bottom:70px;
		color: red;
		font-size: 15px;
		width: 100%;
		height:20px;
		line-height: 20px; 
	}
	#prompt span{
		display: block;
		text-align: center;
	}
</style>