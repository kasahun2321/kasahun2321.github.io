

<div class="col-md-8 col-md-offset-2">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title"><b>Contact us</b></h3>
        </div>
        <div class="panel-body">
            <?php $attributes = array("name" => "contactform");
            echo form_open("contactform/index", $attributes);?>
            <div class="form-group">
                <label for="name">Name</label>
                <input class="form-control" name="name" placeholder="Your Full Name" type="text" value="<?php echo set_value('name'); ?>" />
                <span class="text-danger"><?php echo form_error('name'); ?></span>
            </div>
            
            <div class="form-group">
                <label for="email">Email ID</label>
                <input class="form-control" name="email" placeholder="Email-ID" type="text" value="<?php echo set_value('email'); ?>" />
                <span class="text-danger"><?php echo form_error('email'); ?></span>
            </div>

            <div class="form-group">
                <label for="subject">Subject</label>
                <input class="form-control" name="subject" placeholder="Subject" type="text" value="<?php echo set_value('subject'); ?>" />
                <span class="text-danger"><?php echo form_error('subject'); ?></span>
            </div>

            <div class="form-group">
                <label for="message">Message</label>
                <textarea class="form-control" name="message" rows="4" placeholder="Message"><?php echo set_value('message'); ?></textarea>
                <span class="text-danger"><?php echo form_error('message'); ?></span>
            </div>

            <div class="form-group">
                <button name="submit" type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
            </div>
            <?php echo form_close(); ?>
            <?php echo $this->session->flashdata('msg'); ?>
        </div>
    </div>
</div>
</div>

