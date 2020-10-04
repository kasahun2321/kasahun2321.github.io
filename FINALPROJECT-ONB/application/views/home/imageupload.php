<div class="jumbotron">
	
<p><?php if(isset($error)) echo $error;  ?></p>

<p>
	<?php
	if(isset($upload_data))
	{
		print_r($upload_data);
	}

	?>


</p>

<?php echo form_open_multipart('imageupload/do_upload','class="form_horizontal"');?>

<input type="file" name="userfile">
<br>
<br>
<input type="submit" name="" value="Upload" class="btn btn-primary">

<?php echo form_close();?>
	<div></div>
</div>