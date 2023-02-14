<?php 
session_start();
$con=mysqli_connect("localhost","root","","solution");
//$con=mysqli_connect("localhost","root","root","btcnexo");
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
?>
<?php



// create zip function 
function create_zip($files = array()){
		// Check if the ZIP extension is available or not
		$folderpath='myfiles';
		if(extension_loaded('zip')){	
			$zip = new ZipArchive();			//create an object of Zip Library
			$zip_name = "download_".time().".zip";			// Zip name
			
			//create a zip file (ZIPARCHIVE::CREATE)
			$zip->open($zip_name, ZIPARCHIVE::CREATE);
			
			foreach($files as $file){	
				$zip->addFile($folderpath."/".$file);	
			}
			$zip->close();
			
		//lets download the zip if it is created
		if(file_exists($zip_name)){
			header('Content-type: application/zip');
			header('Content-Disposition: attachment; filename="'.$zip_name.'"');
			readfile($zip_name);
			//delete the file after download
			unlink($zip_name);
		}		
	}else{
		echo "ZIP extension is not installed in your server!!";
	}
}			


//usage example of the above create zip function
	
if(isset($_POST['show_itemx'])){
    $files = $_POST['show_itemx'];
	create_zip($files);
}













//usage example of the above create zip function
	
/* if(isset($_POST['show_item'])){
    $files = $_POST['show_item'];
	create_zip($files);
} */

?>
<!Doctype Html>  
<Html>     
<Head>      
</script>  
    <script src=
"https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href=
"https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css">
<Title>     
NEC-CP Package Management System 
</Title>  
<!--<link rel="stylesheet" href="css/style.css"/>-->
<!-- css -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>  
           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />  
           <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script> 

<!-- end -->

</Head> 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<Body>
<nav>
<a href="#" class="logo">
       <img src="/images/nec.png" width="170" height="60"/> 
    </a>
    <div class="navbar">
      <a href="Home.html">Home</a>
      <div class="subnav">
        <button class="subnavbtn">Solution <i class="fa fa-caret-down"></i></button>
        <div class="subnav-content">
          <a href="Solution_all.html">ALL</a>
          <a href="Solution_oran.html">ORAN</a>
          <a href="Solution_5G.html">5GC</a>
        </div>
      </div>
      <div class="subnav">
        <button class="subnavbtn">Products <i class="fa fa-caret-down"></i></button>
        <div class="subnav-content">
          <a href="Product_CloudPF.html">CloudPF</a>
          <a href="Product_CU_DU.html">CUDU</a>
          <a href="#package">vEMS</a>
          <a href="#express">RU</a>
        </div>
      </div>
      <div class="subnav">
        <button class="subnavbtn">Partners <i class="fa fa-caret-down"></i></button>
        <div class="subnav-content">
          <a href="#link1">Rakuten Symphony</a>
          <a href="Vendor_NEC.html">NEC</a>
        </div>
      </div>
      <a href="#contact">Contact</a>
    </div>
  <div class="search";>
    <input type="text" placeholder="Search Here.."/>
    <i class="fa fa-search icon"></i>
  </div>
</nav>
<form  class="form-container" method="post" enctype="multipart/form-data">

 <div id="dataModal" class="modal fade">  
      <div class="modal-dialog">  
           <div class="modal-content">  
                <div class="modal-header">  
                     <button type="button" class="close" data-dismiss="modal">&times;</button>  
                     <h1 class="modal-title">Review your Selections</h1>  
                </div>  
                <div class="modal-body" id="employee_detail">  
                </div>  
                <div class="modal-footer">
    <button type="submit" value"submit" class="btn">Download</button>
				
                     <button type="button" class="btn btn-default" data-dismiss="modal" onclick="javascript:window.location.reload()">Close</button>  
                </div>  
           </div>  
      </div>  
 </div> 
 </form>
<form action="" class="form-container" method="post">
<?php
$sql="select * from product_parents";
$result=mysqli_query($con,$sql);
?>

<div align="center" class="table table-responsive">
  <br><br><br>  </br><b style="height: 40%;">Filter table with any keyword:
  <input id="gfg" type="text"
      placeholder="Search here">
  </b>
  <table id="detail_table" class="detail">
    <thead> 
      <tr>
        <th>Show Products</th> 
        <th>Solution Version</th>
        <th>Last Update</th>
        <th>Status</th>
        <th>Release Date</th>
        <th>Number of Items</th>
        <th>Test Environment Condition</th>
      </tr>
    </thead><?php while($row=mysqli_fetch_array($result,MYSQLI_BOTH)) { ?>
    <tbody id="geeks">
      
	  <tr class="parent" id="row123" title="Click to expand/collapse" style="cursor: pointer;">
        <td><label><input type="checkbox" id="check" name="show_prod" value="">Show Items</label></td>
        <td><?php  echo $row['solution_version'];?></td>  
        <td>30-08-2022        </td>  
        <td><?php  echo $row['status'];?> </td>  
        <td>10-09-2022        </td>  
        <td><?php echo $row['number_of_items'];?></td> 
        <td><details>
  "Environemnt Name : (Test environment name)
  Machine info[1]: DQA-env-PM001, Dell, R740,  Xeon XXX,  128GB,  3.5TB, -
  Machine info[2]: DQA-env-PM002, HPE, XXX,  Xeon XXX,  256GB,  2.0TB, -
  NIC info [1]: Intel, igb-uio,  ver2.4 , Attached on DQA-env-PM001
  Other Conditions: Multisite DQA environment" </details></td>
  
  
   
  
      </tr>
	  <?php 
	  $sqlc="select * from product_child where pid='".$row['pid']."'";
      $resultc=mysqli_query($con,$sqlc); 
	  $rowcount=mysqli_num_rows($resultc);
	  if($rowcount>0){
	  ?>	  
      <tr class="child-row123" style="display: none;">  
          <th>Products Name            </th>  
          <th>Vendor           </th> 
          <th>Version     </th> 
          <th>md5sum           </th> 
          <th>Status          </th> 
          <th>Release Date           </th> 
          <th>Last Update         </th> 
          <th>Download           </th> 
      </tr> 
	  <?php  $str=''; while($rowc=mysqli_fetch_array($resultc,MYSQLI_BOTH)) {   ?>
    <tr class="child-row123" style="display: none;">
        <td>15</td> 
        <td>2018-01-02</td>  
        <td><?php echo $rowc['version']; ?></td>  
        <td><?php echo $rowc['md5sum']; ?></td>  
        <td>15</td> 
        <td>15</td> 
        <td>15</td> 
        <td><input id="check1" type="checkbox" name="show_item[]" value="<?php echo $rowc['id'];?>">
		
		</td>
      </tr>
	  <?php
	 
	  }
	  } 
	  
	  ?>
   
    </tbody>
	<?php } ?>
  </table>
  </div>

  
 <!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Auto width
<input type = "button" id = "btnCheck" value = "Download" />
<button class="btn" onclick="openForm()"><i class="fa fa-download"></i> Download</button> -->
                                 <input type="button" name="view" value="view" id="" class="btn btn-info btn-xs view_data" />
<br><br><br><br><br>
<!--<div class="form-popup" id="myForm">
  
    <h1>Review your Selections</h1>

 
    <button type="submit" value"submit" class="btn">Download</button>
    <button type="button" class="btn cancel" onclick="closeForm()">Close</button>

</div>-->
  </form>
  <script>
    $(document).ready(function() {
      $("#gfg").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#geeks tr").filter(function() {
          $(this).toggle($(this).text()
          .toLowerCase().indexOf(value) > -1)
        });
      });
    });


  </script>

<script type="text/javascript">
  var currentUserName=_spPageContextInfo.userDisplayName;
</script>
  
<script type="text/javascript">  
    $(document).ready(function () {  
            $('tr.parent')  
                .css("cursor", "pointer")  
                .attr("title", "Click to expand/collapse")  
                .click(function () {  
                    $(this).siblings('.child-' + this.id).toggle();  
                });  
            $('tr[@class^=child-]').hide().children('td');  
    }); 
    $(document).ready(function () {
$('#checkbox').change(function () {
    if (!this.checked) {
	   $('#row').fadeIn('slow');
		// $('#P').prop('checked',false); 
	}
    else 
	{
        $('#row').fadeOut('slow');
	}
});
});
/* $(document).ready(function() {
    $('#CHECK-ALL').click(function() {
        if ($(this).is(':checked')) {
            $('#P').prop('checked',true);                
        } else {
            $('#P').prop('checked',false);                
        }
    });
}); */
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

 $('.view_data').click(function(){
              var arr = [];
              $.each($("input[type='checkbox']:checked"), function(){
                  arr.push($(this).val());
				  
              });
              //alert("Your Selected Product are: " + arr.join("\n "));
			  //alert(arr);
			  //alert(arr.join);
			   $.ajax({  
                url:"select_data.php",  
                method:"post",  
                data:{cid:arr.toString()},  
                success:function(data){  
				//alert(data);
                    $('#employee_detail').html(data);  
                    $('#dataModal').modal("show");  
                }  
           });
			  
			  
			  
			  
			  
          });
//$(function () {
        
   // });

</script>

</Body>   
</Html>  