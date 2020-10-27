<div class="container">
        <div class="pannel">
    
            <div class="login-card"><img src="<?php echo base_url();?>assets/img/kkk.jpg" class="profile-img-card">
                <p class="profile-name-card"> </p>
                <form class="form-signin"><span class="reauth-email"> </span>
                    <input class="form-control" type="email" required="" placeholder="Email address" autofocus="" id="inputEmail">
                    <input class="form-control" type="password" required="" placeholder="Password" id="inputPassword">
                    <div class="checkbox">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox">Remember me</label>
                        </div>
                    </div>
                    <button class="btn btn-primary btn-block btn-lg btn-signin" type="submit">
                        <?php echo anchor('admin/dashboard', 'signin', 'class="btn btn-defa text-white"'); ?>
                        <!--<a href="admin/dashboard" class="forgot-password">Sign in</a>--></button>
                </form><a href="#" class="forgot-password">Forgot your password?</a></div>
        </div>
    </div>