//dynamicQueryController

//viewTopicController-list

app
		.controller(
				'dynamicQueryController',
				function($scope,$http,$log,$location, $routeParams,
						topicMgmtAppConfig, TopicManagementServices) {

					/** Variable Declaration start */
					
					$scope.dynamicQueryRequestObject={
						    "dataSourcePojo": {
						        "dbUniqueName": "InterviewManagementDatabaseIVLLaptopWala",
						        "userName": "root",
						        "password": "admin@123",
						        "url": "jdbc:mysql://localhost:3306/jtrac_28_dec_21?useLegacyDatetimeCode=false&serverTimezone=IST",
						        "driverClassName": "com.mysql.jdbc.Driver"
						    },
						    "query": "SELECT * FROM users"
						};
					
					$scope.dynamicQueryResponse={};
					$scope.dynamicTableData=[];
					$scope.showDynamicTableData=false;
					$scope.showDynamicResponseError=false;

					
					/** Variable Declaration end ################################ */

					/** ##################################################################################################### */

					/** Method Declaration start */

					$scope.saveQueryConfig=function () {
						
					};
					
					$scope.autogrow=function autogrowTextHeight(event, htmlElement) {
						  // https://developer.mozilla.org/en-US/docs/Web/API/Event
						  // var htmlElement = event.target; ... OR use this ...
						  htmlElement.style.height = htmlElement.scrollHeight+"px";
						};
					
					$scope.executeQuery=function () {
//						var urrrlll="http://127.0.0.1:8090/Exporter/excuteQuery";
                        var urrrlll="/Exporter/excuteQuery";
						$scope.dynamicQueryResponse={};
						$scope.dynamicTableData=[];
						$scope.showDynamicTableData=false;
						$scope.showDynamicResponseError=false;
						$http(
								{
									method : 'POST',					
									url :urrrlll,					
									data : $scope.dynamicQueryRequestObject				
								})
								.success(function(data) {					
									//alert("Success : "+data.message);
									//$location.path('/groups-list');
									$scope.dynamicQueryResponse=data;
									$scope.dynamicTableData=$scope.dynamicQueryResponse.data.data.resultMap.tableData;
									$scope.showDynamicTableData=true;
									$scope.showDynamicResponseError=false;
								})
								.error(function(data,status) { 
									//alert("Error : "+data.message +"status"+data.status);
									$scope.dynamicQueryResponse=data;
									$scope.showDynamicResponseError=true;
								});
					};
					/** Method Declaration end ################################ */

					/** ##################################################################################################### */

					/** Initial Method start */

					/** Initial Method end ################################ */

				});
