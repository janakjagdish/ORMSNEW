<?php  
$con=mysqli_connect("localhost","root","","solution");

//$con=mysqli_connect("localhost","root","root","btcnexo");
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$cid=$_REQUEST['cid'];
$nid=explode(',',$cid);
//$nid=array_filter($ex);
//echo count($nid);
 for($i=0;$i<count($nid);$i++)
 {
  $sqlc="select * from product_child where id='".$nid[$i]."'";
      $resultc=mysqli_query($con,$sqlc); 
	  $rowc=mysqli_fetch_array($resultc,MYSQLI_BOTH);
	//  $rowcount=mysqli_num_rows($resultc); 
	if(!empty($rowc['id'])){ ?>
	 <input id="check1" type="checkbox" name="show_itemx[]" value="<?php echo $rowc['files'];?>" checked><?php echo $rowc['version'];?>&nbsp;&nbsp;<br>

 <?php }
 }
 ?>
