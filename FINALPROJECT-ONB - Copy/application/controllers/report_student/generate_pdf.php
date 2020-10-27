<?php
//include connection file
include_once("connection.php");
include_once('libs/fpdf.php');

class PDF extends FPDF
{
// Page header
function Header()
{
    // Logo
    $this->Image('image_logo.jpg',10,-1,30);
    $this->SetFont('Arial','B',13);
    // Move to the right
    $this->Cell(80);
    // Title
    $this->Cell(40,10,'Student Lists',1,0,'C');
    // Line break
    $this->Ln(20);
}

// Page footer
function Footer()
{
    // Position at 1.5 cm from bottom
    $this->SetY(-15);
    // Arial italic 8
    $this->SetFont('Arial','I',8);
    // Page number
    $this->Cell(0,10,'Page '.$this->PageNo().'/{nb}',0,0,'C');
}
}

$db = new dbObj();
$connString =  $db->getConnstring();
$display_heading = array('user_id'=>'ID', 'name'=> 'Name', 'reg_no'=> 'Regnumber','select_college'=> 'College','department'=> 'Department','select_your_section'=> 'Section',);

$result = mysqli_query($connString, "SELECT user_id, name, reg_no,   select_college, department, select_your_section , role FROM users") or die("database error:". mysqli_error($connString));
$header = mysqli_query($connString, "SHOW columns FROM users");

$pdf = new PDF();
//header
$pdf->AddPage();
//foter page
$pdf->AliasNbPages();
$pdf->SetFont('Arial','B',6);
foreach($header as $heading) {
$pdf->Cell(20,6,$display_heading[$heading['Field']],1);
}
foreach($result as $row) {
$pdf->Ln();
foreach($row as $column)
$pdf->Cell(20,6,$column,1);
}
$pdf->Output();
?>
