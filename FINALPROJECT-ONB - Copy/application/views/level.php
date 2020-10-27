 <?php if(count($navlist)): ?>
            <?php foreach($navlist as $key => $value): ?>
            <li><?php echo anchor('home/category/' . $value['category_id'].'/'. url_title($value['category_name']), $value['category_name']); ?></li>
            <?php endforeach ;?>
            <?php endif; ?>